import { useEffect, useState } from 'react';
import { Upload, Trash2, Image as ImageIcon, Video } from 'lucide-react';
import {
  collection,
  addDoc,
  query,
  orderBy,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db, GalleryItem } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';

export function GalleryManagementPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');
  const [type, setType] = useState<'image' | 'video'>('image');
  const { user } = useAuth();

  useEffect(() => {
    loadGallery();
  }, []);

  const loadGallery = async () => {
    setLoading(true);
    try {
      const q = query(
        collection(db, 'gallery_items'),
        orderBy('created_at', 'desc')
      );
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as GalleryItem[];
      setItems(data);
    } catch (error) {
      console.error('Error loading gallery:', error);
    }
    setLoading(false);
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !user) return;

    setUploading(true);

    try {
      await addDoc(collection(db, 'gallery_items'), {
        type,
        url: url.trim(),
        title: title.trim(),
        description: description.trim(),
        admin_id: user.uid,
        order_index: items.length,
        created_at: new Date().toISOString(),
      });

      setUrl('');
      setTitle('');
      setDescription('');
      await loadGallery();
    } catch (error) {
      console.error('Error uploading media:', error);
    }

    setUploading(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      await deleteDoc(doc(db, 'gallery_items', id));
      await loadGallery();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Gallery Management</h1>
          <p className="text-gray-600 mt-2">Upload and manage project images and videos</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upload New Media</h2>

          <form onSubmit={handleUpload} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Media Type
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setType('image')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    type === 'image'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <ImageIcon className="inline h-5 w-5 mr-2" />
                  Image
                </button>
                <button
                  type="button"
                  onClick={() => setType('video')}
                  className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all ${
                    type === 'video'
                      ? 'bg-green-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Video className="inline h-5 w-5 mr-2" />
                  Video
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Media URL *
              </label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="https://example.com/image.jpg"
              />
              <p className="text-sm text-gray-500 mt-2">
                Enter the complete URL of your image or video hosted online
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Title (Optional)
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Project title"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Description (Optional)
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Brief description of the project"
              />
            </div>

            <button
              type="submit"
              disabled={uploading}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {uploading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>Uploading...</span>
                </>
              ) : (
                <>
                  <Upload className="h-5 w-5" />
                  <span>Upload Media</span>
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Current Gallery Items ({items.length})
          </h2>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : items.length === 0 ? (
            <p className="text-center text-gray-500 py-12">No gallery items yet. Upload your first project!</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
                >
                  <div className="relative aspect-video bg-gray-200">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-800">
                        <Video className="h-12 w-12 text-white" />
                      </div>
                    )}
                    <div className="absolute top-2 right-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.type === 'image'
                          ? 'bg-green-500 text-white'
                          : 'bg-purple-500 text-white'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    {item.title && (
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                    )}
                    {item.description && (
                      <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="w-full bg-red-50 text-red-600 py-2 rounded-lg font-semibold hover:bg-red-100 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
