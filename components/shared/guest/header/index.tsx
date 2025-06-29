'use client'

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Rocket, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { signOut } from '@/lib/actions';
import { User } from '@/lib/db/schemas';
import useSWR, { mutate } from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function GuestNavbar() {
  const { data: user } = useSWR<User>('/api/user', fetcher);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  async function handleSignOut() {
    await signOut();
    mutate('/api/user');
    router.push('/');
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmic-950/80 backdrop-blur-md border-b border-cosmic-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-to-r from-cosmic-600 to-nebula-600 group-hover:from-cosmic-500 group-hover:to-nebula-500 transition-all duration-300">
              <Rocket className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cosmic-400 to-nebula-400 bg-clip-text text-transparent">
              CosmicApp Guest Pages
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!user?.id ? (
              <>
                <Link
                  href="/features"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Features
                </Link>
                <Link
                  href="/pricing"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/sign-in"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white font-medium hover:from-cosmic-500 hover:to-nebula-500 transition-all duration-300"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleSignOut}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sign Out
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cosmic-800/30">
            <div className="flex flex-col space-y-4">
              {!user?.id ? (
                <>
                  <Link
                    href="/features"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                  <Link
                    href="/sign-in"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/sign-up"
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-cosmic-600 to-nebula-600 text-white font-medium hover:from-cosmic-500 hover:to-nebula-500 transition-all duration-300 text-center"
                  >
                    Get Started
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/dashboard"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="text-gray-300 hover:text-white transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}