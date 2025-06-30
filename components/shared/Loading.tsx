
import { Rocket, Sparkles } from 'lucide-react';

export function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cosmic-950 via-nebula-950 to-stardust-950 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        {/* Main Loading Animation */}
        <div className="relative mb-8">
          {/* Outer Ring */}
          <div className="w-32 h-32 border-4 border-cosmic-600/20 rounded-full animate-spin mx-auto">
            <div className="w-full h-full border-4 border-transparent border-t-cosmic-500 rounded-full animate-spin" style={{ animationDuration: '1s' }}></div>
          </div>
          
          {/* Inner Ring */}
          <div className="absolute inset-4 w-24 h-24 border-4 border-nebula-600/20 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}>
            <div className="w-full h-full border-4 border-transparent border-t-nebula-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          </div>
          
          {/* Center Rocket */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cosmic-600 to-nebula-600 rounded-full flex items-center justify-center animate-pulse">
              <Rocket className="h-8 w-8 text-white animate-bounce" />
            </div>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cosmic-600/30 to-nebula-600/30 rounded-full blur-xl animate-pulse-slow"></div>
        </div>

        {/* Loading Text */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cosmic-400 via-nebula-400 to-stardust-400 bg-clip-text text-transparent mb-4 animate-pulse">
            Launching CosmicApp
          </h1>
          <p className="text-gray-300 text-lg mb-2 animate-fade-in">
            Preparing your cosmic journey...
          </p>
          
          {/* Loading Dots */}
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-cosmic-500 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-nebula-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-stardust-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full max-w-md mx-auto mb-8">
          <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-cosmic-500 via-nebula-500 to-stardust-500 rounded-full animate-loading-bar"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="relative">
          {/* Floating Stars */}
          <div className="absolute -top-20 left-10 animate-float">
            <Sparkles className="h-4 w-4 text-cosmic-400 opacity-60" />
          </div>
          <div className="absolute -top-16 right-8 animate-float" style={{ animationDelay: '1s' }}>
            <Sparkles className="h-3 w-3 text-nebula-400 opacity-40" />
          </div>
          <div className="absolute -top-24 left-1/2 animate-float" style={{ animationDelay: '2s' }}>
            <Sparkles className="h-5 w-5 text-stardust-400 opacity-50" />
          </div>
          
          {/* Status Text */}
          <div className="space-y-2">
            <p className="text-gray-400 text-sm animate-pulse">
              Initializing cosmic systems...
            </p>
            <p className="text-gray-500 text-xs">
              This may take a few moments
            </p>
          </div>
        </div>

        {/* Orbital Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Orbit 1 */}
          <div className="absolute top-1/2 left-1/2 w-96 h-96 border border-cosmic-600/10 rounded-full animate-spin" style={{ marginLeft: '-12rem', marginTop: '-12rem', animationDuration: '20s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-cosmic-500/60 rounded-full" style={{ marginLeft: '-0.25rem', marginTop: '-0.25rem' }}></div>
          </div>
          
          {/* Orbit 2 */}
          <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-nebula-600/10 rounded-full animate-spin" style={{ marginLeft: '-10rem', marginTop: '-10rem', animationDuration: '15s', animationDirection: 'reverse' }}>
            <div className="absolute top-0 left-1/2 w-1.5 h-1.5 bg-nebula-500/60 rounded-full" style={{ marginLeft: '-0.1875rem', marginTop: '-0.1875rem' }}></div>
          </div>
          
          {/* Orbit 3 */}
          <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-stardust-600/10 rounded-full animate-spin" style={{ marginLeft: '-8rem', marginTop: '-8rem', animationDuration: '12s' }}>
            <div className="absolute top-0 left-1/2 w-1 h-1 bg-stardust-500/60 rounded-full" style={{ marginLeft: '-0.125rem', marginTop: '-0.125rem' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}