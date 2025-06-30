'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LogIn, ArrowLeft, Home, User, Lock, AlertCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function UnauthorizedPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-lg w-full">
        <Card className="card p-8 text-center">
          {/* Animated 401 */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cosmic-400 bg-clip-text text-transparent animate-pulse">
                401
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>

          {/* Animated User Icon */}
          <div className="mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <User className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Lock className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Authentication Required
            </h2>
            <p className="text-gray-300 mb-2">
              You need to sign in to access this cosmic destination.
            </p>
            <p className="text-gray-400 text-sm">
              Please authenticate yourself to continue your journey through the stars.
            </p>
          </div>

          {/* Authentication Notice */}
          <div className="mb-8">
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <AlertCircle className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-blue-400 font-medium text-sm">Authentication Required</span>
              </div>
              <p className="text-blue-300 text-xs">
                This area requires you to be signed in to your cosmic account.
              </p>
            </div>
          </div>

          {/* Primary Actions */}
          <div className="space-y-4 mb-6">
            <Button
              asChild
              size="lg"
              className="justify-center w-full primary-btn py-6"
            >
              <Link href='/sign-in'>
              <LogIn />
                Sign In to Continue
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center w-full outline-btn py-6"
            >
              <Link href='/sign-up'>
                <User />
                Create New Account
              </Link>
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="justify-center flex-1 ghost-btn py-6"
              >
                <Link href='/'>
                  <Home />
                  Return Home
                </Link>
              </Button>
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="sm"
                className="justify-center flex-1 ghost-btn py-6"
              >
                <ArrowLeft />
                Go Back
              </Button>
            </div>
            
            <p className="text-gray-500 text-xs">
              Don't have an account? <Link href="/sign-up" className="text-cosmic-400 hover:text-cosmic-300">Sign up here</Link>
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: 401 - Authentication Required
          </p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-cosmic-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}