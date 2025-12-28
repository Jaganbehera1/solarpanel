import { useEffect, useState } from 'react';
import { X, Play } from 'lucide-react';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db, GalleryItem } from '../../lib/firebase';
import bgVideo from '../../images/background4.mp4';


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
      <section className="bg-gradient-to-br from-green-600 to-blue-600 py-32 relative overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={bgVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">Our Projects</h1> */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Explore our portfolio of successful solar installations.
              See the quality and craftsmanship that goes into every project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-16 space-x-3 sm:space-x-4 flex-wrap gap-3">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                filter === 'all'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('image')}
              className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                filter === 'image'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setFilter('video')}
              className={`px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 ${
                filter === 'video'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              Videos
            </button>
          </div>

          {loading ? (
            <div className="flex justify-center py-32">
              <div className="animate-spin rounded-full h-16 w-16 border-4 border-green-200 border-t-green-600"></div>
            </div>
          ) : filteredItems.length === 0 ? (
            <div className="text-center py-32">
              <p className="text-2xl text-gray-500">No projects to display yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100"
                >
                  <div className="relative aspect-video bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
                    {item.type === 'image' ? (
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                        <div className="bg-white bg-opacity-95 rounded-full p-6 group-hover:bg-opacity-100 group-hover:scale-110 transition-all duration-300">
                          <Play className="h-12 w-12 text-green-600" />
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300"></div>
                  </div>
                  {item.title && (
                    <div className="p-6">
                      <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-600 transition-colors">{item.title}</h3>
                      {item.description && (
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">{item.description}</p>
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
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/80 rounded-full p-2"
            onClick={() => setSelectedItem(null)}
          >
            <X className="h-8 w-8" />
          </button>

          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            {selectedItem.type === 'image' ? (
              <img
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            ) : (
              <video
                src={selectedItem.url}
                controls
                autoPlay
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            )}
            {selectedItem.title && (
              <div className="mt-6 text-white text-center">
                <h3 className="text-3xl font-bold">{selectedItem.title}</h3>
                {selectedItem.description && (
                  <p className="text-gray-300 mt-3 text-lg">{selectedItem.description}</p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
