import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Rocket, ArrowLeft, Home, Search, Compass } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function NotFoundPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-lg w-full">
        <Card className="p-8 text-center">
          {/* Animated 404 */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent animate-pulse">
                404
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/20 to-nebula-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>

          {/* Floating Rocket */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto animate-float">
              <Rocket className="h-8 w-8 text-white transform rotate-45" />
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Lost in Space
            </h2>
            <p className="text-gray-300 mb-2">
              The page you're looking for has drifted into the cosmic void.
            </p>
            <p className="text-gray-400 text-sm">
              Don't worry, even astronauts get lost sometimes. Let's get you back on course.
            </p>
          </div>

          {/* Navigation Suggestions */}
          <div className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <Search className="h-4 w-4 text-cosmic-400 mx-auto mb-1" />
                <p className="text-gray-300">Search</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <Home className="h-4 w-4 text-nebula-400 mx-auto mb-1" />
                <p className="text-gray-300">Home</p>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <Compass className="h-4 w-4 text-stardust-400 mx-auto mb-1" />
                <p className="text-gray-300">Navigate</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="justify-center w-full"
            >
              <Link href='/'>
                <Home />
                Return to Earth
              </Link>
            </Button>
            
            <Button
              onClick={() => router.back()}
              variant="outline"
              size="lg"
              className="justify-center w-full"
            >
                <ArrowLeft />
                Go Back
            </Button>

            <div className="pt-4 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">
                Still can't find what you're looking for?
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="justify-center flex-1"
                >
                  {/* TODO: Check if admin and change route */}
                  <Link href='/user/dashboard'>
                    Dashboard
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="justify-center flex-1"
                >
                  <Link href='/sign-in'>
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: 404 - Page Not Found
          </p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <div className="w-2 h-2 bg-cosmic-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-nebula-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-stardust-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}