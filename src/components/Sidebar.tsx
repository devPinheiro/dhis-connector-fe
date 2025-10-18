import { 
  LayoutDashboard, 
  Building2, 
  Package, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  Settings,
  X 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath?: string;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  roles?: string[];
  badge?: number;
}

const navigation: NavigationItem[] = [
  {
    name: 'Dashboard',
    href: '/',
    icon: LayoutDashboard,
  },
  {
    name: 'Facilities',
    href: '/facilities',
    icon: Building2,
  },
  {
    name: 'Stock Monitoring',
    href: '/stock',
    icon: Package,
  },
  {
    name: 'Alerts',
    href: '/alerts',
    icon: AlertTriangle,
    badge: 12,
  },
  {
    name: 'Reports',
    href: '/reports',
    icon: BarChart3,
  },
  {
    name: 'Users',
    href: '/users',
    icon: Users,
    roles: ['admin'],
  },
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
    roles: ['admin'],
  },
];

export function Sidebar({ isOpen, onClose, currentPath = '/' }: SidebarProps) {
  const { user } = useAuth();

  const filteredNavigation = navigation.filter(item => {
    if (!item.roles) return true;
    return user?.role && item.roles.includes(user.role);
  });

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Mobile close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            {filteredNavigation.map((item) => {
              const isActive = currentPath === item.href;
              const Icon = item.icon;

              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={`flex items-center p-2 rounded-lg group transition-colors ${
                      isActive
                        ? 'bg-primary-100 text-primary-900'
                        : 'text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition duration-75 ${
                        isActive
                          ? 'text-primary-600'
                          : 'text-gray-500 group-hover:text-gray-900'
                      }`}
                    />
                    <span className="ml-3">{item.name}</span>
                    {item.badge && (
                      <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* User info at bottom */}
          <div className="absolute bottom-4 left-3 right-3">
            <div className="p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-900">
                {user?.firstName} {user?.lastName}
              </div>
              <div className="text-xs text-gray-500">
                {user?.email}
              </div>
              <div className="text-xs text-gray-500 capitalize mt-1">
                {user?.role?.replace('_', ' ')} • {user?.state || 'National'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}