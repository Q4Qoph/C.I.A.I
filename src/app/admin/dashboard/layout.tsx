'use client';

import { useAuth } from '@/contexts/auth-context';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  Image as ImageIcon,
  Newspaper,
  FileDown,
  LogOut,
  Menu,
  X,
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { name: 'Gallery', href: '/admin/dashboard/gallery', icon: ImageIcon },
  { name: 'News', href: '/admin/dashboard/news', icon: Newspaper },
  { name: 'Downloads', href: '/admin/dashboard/downloads', icon: FileDown },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const { logout, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const getInitials = (email?: string | null) => {
    if (!email) return 'AD';
    const namePart = email.split('@')[0];
    return namePart
      .split(/[._-]/)
      .filter(Boolean)
      .map((part) => part[0]?.toUpperCase())
      .join('')
      .slice(0, 2);
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Top bar */}
      <div className="fixed top-0 left-0 right-0 h-[7vh] bg-white px-8 border-b flex items-center justify-between z-50">
        {/* Logo */}
        <div className="hidden md:flex items-center">
          <Image
            src="/CIAI-Logo.png"
            alt="CIAI Logo"
            width={180}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Mobile sidebar toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>

        {/* User info (no logout here, logout lives in sidebar) */}
        <div className="flex items-center gap-4">
          {user?.email && (
            <div className="hidden sm:flex flex-col items-end text-xs text-gray-600">
              <span className="font-medium text-gray-900">Admin</span>
              <span className="truncate max-w-[160px]">{user.email}</span>
            </div>
          )}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold">
              {getInitials(user?.email)}
            </div>
          </div>
        </div>
      </div>

      <div className="flex pt-[7vh] h-full">
        {/* Sidebar overlay for mobile */}
        {mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            'fixed left-0 top-[7vh] bottom-0 z-40 bg-white border-r transition-transform duration-300 transform md:translate-x-0 w-[70%] md:w-[20%]',
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0',
          )}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between h-14 px-6 border-b md:hidden">
              <h1 className="text-lg font-semibold">CIAI Admin</h1>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-[#F9A825]/10 text-[#F9A825]'
                        : 'text-gray-700 hover:bg-gray-100',
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
            {/* Sidebar logout (all viewports) */}
            <div className="p-4 border-t text-xs text-gray-500">
              <Button
                variant="ghost"
                className="w-full justify-start text-red-600 hover:text-red-700"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 ml-0 md:ml-[20%] p-6 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
