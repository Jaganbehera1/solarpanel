import { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db, GalleryItem } from '../../lib/firebase';

export function GalleryPage() {
  const [items, setItems] = useState<GalleryItem[]>([]);
  const [filter, setFilter] = useState<'all' | 'image' | 'video'>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [loading, setLoading] = useState(true);

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

  const filteredItems = items.filter(item =>
    filter === 'all' ? true : item.type === filter
  );

  return (
    <div className="bg-white min-h-screen pb-24">
      <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Our Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful solar installations.
              See the quality and craftsmanship that goes into every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12 space-x-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'image'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all duration-200 ${
                filter === 'video'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Videos
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500">No projects to display yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-green-100">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 rounded-full p-6 group-hover:bg-opacity-100 transition-all">
                          <Play className="h-12 w-12 text-green-600" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300"></div>
                  </div>
                  {item.title && (
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 text-lg">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            )}
            {selectedItem.title && (
              <div className="mt-4 text-white text-center">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                {selectedItem.description && (
                  <p className="text-gray-300 mt-2">{selectedItem.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
