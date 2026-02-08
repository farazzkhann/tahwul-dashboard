import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import {
  Home,
  Target,
  CheckSquare,
  FileText,
  BarChart3,
  Users,
} from 'lucide-react';
import Logo from '../../assets/images/Tahwul_logo1.png'
import ToggleArrowLeft from '../../assets/icons/toggle-arrow.svg'

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home, path: '/' },
  { id: 'perspectives', label: 'Perspectives', icon: Target, path: '/perspectives' },
  { id: 'tasks', label: 'Tasks', icon: CheckSquare, path: '/tasks' },
  { id: 'documents', label: 'Documents', icon: FileText, path: '/documents' },
  { id: 'reports', label: 'Reports', icon: BarChart3, path: '/reports' },
  { id: 'users', label: 'Users & Roles', icon: Users, path: '/users' },
];

interface SidebarProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export const Sidebar = ({ isMobileMenuOpen, setIsMobileMenuOpen }: SidebarProps) => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setIsMobileMenuOpen]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
      <aside
        className={`
          bg-navy-900 text-white h-screen fixed lg:sticky top-0 left-0
          transition-all duration-300 ease-in-out flex flex-col z-50
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          ${isCollapsed ? 'w-20' : 'w-64'}
        `}
      >
        <div className="p-6 flex items-center justify-between">
          {!isCollapsed && (
            <img src={Logo} alt="Tahwul Logo" className='w-32' />
          )}

          {isCollapsed && (
            <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center mx-auto">
              <span className="text-white font-bold text-sm">T</span>
            </div>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="lg:hidden p-2 hover:bg-navy-800 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <X size={20} className="text-white" />
          </button>
        </div>

        <button
          onClick={toggleSidebar}
          className="hidden lg:block absolute -right-3 top-6 bg-white text-[#747A8B] rounded-full p-1.5 shadow-lg transition-colors z-10 hover:bg-gray-100"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <img src={ToggleArrowLeft} alt="" className={isCollapsed ? 'rotate-180' : ''} />
        </button>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={handleLinkClick}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-lg 
                  transition-all duration-200
                  ${isCollapsed ? 'justify-center' : ''}
                  ${isActive
                    ? 'bg-[#98AEC0]/10 text-white'
                    : 'text-gray-600 hover:bg-navy-800 hover:text-white'
                  }
                `}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} className="flex-shrink-0" />
                {!isCollapsed && (
                  <span className="text-sm font-medium">{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};
