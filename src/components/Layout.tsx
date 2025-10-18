import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export function Layout({ children, currentPath }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar onMenuClick={() => setSidebarOpen(true)} />
      
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentPath={currentPath}
      />

      <div className="p-4 pt-20 lg:ml-64">
        <div className="min-h-screen">
          {children}
        </div>
      </div>
    </div>
  );
}