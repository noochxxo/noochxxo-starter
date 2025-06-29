import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Shield, ArrowLeft, Home, User, AlertTriangle, Lock } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User as CurrentUser } from '@/lib/db/schemas';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function ForbiddenPage() {
  const { data: user } = useSWR<CurrentUser>('/api/user', fetcher);
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-lg w-full">
        <Card className="p-8 text-center">
          {/* Animated 403 */}
          <div className="mb-8">
            <div className="relative">
              <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                403
              </h1>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>

          {/* Animated Shield Icon */}
          <div className="mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-red-600 to-orange-600 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="absolute -top-2 -right-2">
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full flex items-center justify-center animate-bounce">
                  <Lock className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Access Forbidden
            </h2>
            <p className="text-gray-300 mb-2">
              You don't have permission to access this cosmic sector.
            </p>
            <p className="text-gray-400 text-sm">
              Your current clearance level doesn't grant access to this restricted area.
            </p>
          </div>

          {/* User Info */}
          {user && (
            <div className="mb-6">
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <div className="flex items-center justify-center mb-2">
                  <User className="h-5 w-5 text-cosmic-400 mr-2" />
                  <span className="text-white font-medium">{user.email}</span>
                </div>
                <div className="flex items-center justify-center">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    user.role === 'admin' 
                      ? 'bg-purple-500/20 text-purple-400'
                      : 'bg-blue-500/20 text-blue-400'
                  }`}>
                    {user.role.charAt(0).toUpperCase() + user.role.slice(1)} Access
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Permission Notice */}
          <div className="mb-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div className="flex items-center justify-center mb-2">
                <AlertTriangle className="h-5 w-5 text-red-400 mr-2" />
                <span className="text-red-400 font-medium text-sm">Insufficient Permissions</span>
              </div>
              <p className="text-red-300 text-xs">
                This resource requires elevated access privileges that your account doesn't currently have.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4 mb-6">
            <Button
              asChild
              size="lg"
              className="justify-center w-full"
            >
              <Link href={user?.role === 'admin' ? '/admin/dashboard' : '/user/dashboard'}>
                <User />
                Return to Dashboard
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="justify-center w-full"
            >
              <Link href='/'>
                <Home />
                Go to Homepage
              </Link>
              
            </Button>
          </div>

          {/* Secondary Actions */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <Button
                onClick={() => router.back()}
                variant="ghost"
                size="sm"
                className="justify-center flex-1"
              >
                <ArrowLeft />
                Go Back
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="justify-center flex-1"
              >
                {/* TODO: change email contact to group admin or something */}
                <Link href="mailto:support@cosmicapp.com">
                  Contact Support
                </Link>
              </Button>
            </div>
            
            <p className="text-gray-500 text-xs">
              Need higher access? <a href="mailto:admin@cosmicapp.com" className="text-cosmic-400 hover:text-cosmic-300">Request permissions</a>
            </p>
          </div>
        </Card>

        {/* Additional Info */}
        <div className="mt-6 text-center">
          <p className="text-gray-500 text-sm">
            Error Code: 403 - Forbidden Access
          </p>
          <div className="flex items-center justify-center mt-2 space-x-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}