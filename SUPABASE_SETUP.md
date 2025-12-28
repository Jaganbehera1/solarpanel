# Supabase Storage & RLS Setup

## Fix for Upload Error: RLS Policy Violation

### Problem
- 400 Bad Request when uploading to `gallery` bucket
- Row-Level Security (RLS) policy violation when saving metadata

### Solution

#### 1. Enable RLS on `gallery` bucket (Supabase Dashboard)
Go to **Storage** > **Buckets** > **gallery**:

1. Click the **gallery** bucket
2. Click **Policies** tab
3. Click **New Policy** or **Create Policy**
4. **For Upload** - Create policy:
   - **Policy Name**: `Allow authenticated users to upload`
   - **Target roles**: Select `authenticated`
   - **Allowed operations**: Check `INSERT`
   - **WITH CHECK expression**:
   ```sql
   auth.uid()::text = (storage.foldername(name))[1]
   ```
   This restricts uploads to folders matching the user's UID

5. **For Download** - Create policy:
   - **Policy Name**: `Allow public read access`
   - **Target roles**: Select `authenticated`, `anon`
   - **Allowed operations**: Check `SELECT`
   - **USING expression**:
   ```sql
   true
   ```

6. **For Delete** (admin only) - Create policy:
   - **Policy Name**: `Allow admins to delete`
   - **Target roles**: Select `authenticated`
   - **Allowed operations**: Check `DELETE`
   - **USING expression**:
   ```sql
   auth.uid()::text = (storage.foldername(name))[1]
   ```

#### 2. Configure Firestore Security Rules
Go to **Firebase Console** > **Firestore Database** > **Rules** tab:

Replace all content with these rules:

```firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow everyone to read gallery_items (public gallery)
    match /gallery_items/{document=**} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.uid == resource.data.admin_id;
    }
    
    // Allow everyone to read/write contact_info
    match /contact_info/{document=**} {
      allow read, write: if true;
    }
  }
}
```

Then click **Publish** to apply the rules.

**What these rules do:**
- ✅ Anyone can read gallery items (public access)
- ✅ Any authenticated user can create gallery items
- ✅ Only the original uploader (admin_id) can update/delete their items
- ✅ Contact form can be read/written by anyone

#### 3. Test Upload
1. Log in as admin
2. Go to Gallery Management
3. Select file and upload
4. Check Supabase Storage > gallery bucket for uploaded file
5. Verify metadata saved to Firestore `gallery_items` collection

#### 4. Alternative: Disable RLS (Development Only)
⚠️ **ONLY for development/testing** - Not recommended for production:

In Supabase Dashboard > Storage > **gallery** bucket:
1. Click the three dots menu
2. Select **Disable RLS**
3. This allows all uploads (less secure)

---

## File Structure in Supabase Storage
After successful upload, files appear at:
```
gallery/
  └── {user_uid}/
      ├── 1766940376430.png
      ├── 1766940377831.jpg
      └── ...
```

Public URLs follow pattern:
```
https://ptcufnqlblcfmjxpzkrz.supabase.co/storage/v1/object/public/gallery/{user_uid}/{timestamp}.{ext}
```

---

## Debugging Steps
1. Open Supabase Dashboard > Storage > gallery
2. Check if bucket shows uploaded files
3. Verify bucket policies in **Policies** tab
4. Check browser console for exact error message
5. Confirm authenticated user session in browser DevTools: `localStorage` for auth token

