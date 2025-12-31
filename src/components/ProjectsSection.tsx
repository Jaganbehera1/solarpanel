import { useEffect, useState } from 'react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db, GalleryItem } from '../lib/firebase';
import { GalleryCard } from './GalleryCard';
import { useNavigate } from 'react-router-dom';

export function ProjectsSection({ limit }: { limit?: number }) {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const q = query(collection(db, 'gallery_items'), orderBy('created_at', 'desc'));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as GalleryItem[];
      setItems(limit ? data.slice(0, limit) : data);
    } catch (err) {
      console.error('ProjectsSection load error', err);
    }
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Our Projects</h2>
          <p className="text-gray-600 mt-3">A selection of recent installations and works</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
              onClick={() => navigate('/gallery')}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={() => navigate('/gallery')}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
