import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export function AdminNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { signOut } = useAuth();

  const links = [
    { to: '/admin', label: 'Dashboard' },
    { to: '/admin/gallery', label: 'Gallery Management' },
    { to: '/admin/settings', label: 'Settings' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleSignOut = async () => {
    await signOut();
    navigate('/admin/login');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold">Admin Panel</span>
          </div>

          <div className="flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${
                  isActive(link.to)
                    ? 'text-green-400 border-b-2 border-green-400'
                    : 'text-gray-300 hover:text-white'
                } transition-colors duration-200 font-medium pb-1`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={handleSignOut}
              className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors"
            >
              <LogOut className="h-5 w-5" />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
