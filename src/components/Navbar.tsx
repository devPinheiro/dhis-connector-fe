import React from 'react';
import { Menu, Bell, User, LogOut, Settings, Search } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { getInitials } from '../lib/utils';

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white border-b border-gray-200 fixed w-full z-30">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              onClick={onMenuClick}
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            >
              <Menu className="w-6 h-6" />
            </button>
            
            <a href="/" className="flex ml-2 md:mr-24">
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-gray-900">
                Health Dashboard
              </span>
            </a>
          </div>

          <div className="flex items-center">
            <div className="flex items-center ml-3 space-x-3">
              {/* Search */}
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-gray-500" />
                </div>
                <input
                  type="text"
                  className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Search facilities, commodities..."
                />
              </div>

              {/* Notifications */}
              <button className="relative p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-300">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
              </button>

              {/* User Menu */}
              <div className="flex items-center">
                <button className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                    {user ? getInitials(user.firstName, user.lastName) : 'U'}
                  </div>
                </button>
                
                <div className="ml-3 hidden md:block">
                  <div className="text-sm font-medium text-gray-900">
                    {user ? `${user.firstName} ${user.lastName}` : 'User'}
                  </div>
                  <div className="text-xs text-gray-500 capitalize">
                    {user?.role?.replace('_', ' ') || 'Role'}
                  </div>
                </div>

                <div className="ml-2 flex items-center space-x-1">
                  <button className="p-1 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100">
                    <Settings className="w-4 h-4" />
                  </button>
                  
                  <button
                    onClick={logout}
                    className="p-1 text-gray-500 rounded hover:text-gray-900 hover:bg-gray-100"
                    title="Logout"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}