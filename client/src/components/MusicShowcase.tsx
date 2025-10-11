import MusicPlayer from "./MusicPlayer";

export default function MusicShowcase() {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-chart-3/10 border border-chart-3/20">
            <span className="text-sm font-medium text-chart-3">Music Feature</span>
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Premium Music Playback
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Enjoy crystal-clear audio with our advanced music player. Play your favorite tracks with high-quality streaming.
          </p>
        </div>

        <div className="flex justify-center">
          <MusicPlayer />
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center space-y-2 animate-fade-up" style={{ animationDelay: '100ms' }}>
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-2xl">🎵</span>
            </div>
            <h3 className="font-display font-semibold">High Quality Audio</h3>
            <p className="text-sm text-muted-foreground">Stream music in crystal-clear quality</p>
          </div>
          
          <div className="text-center space-y-2 animate-fade-up" style={{ animationDelay: '200ms' }}>
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-2xl">⏯️</span>
            </div>
            <h3 className="font-display font-semibold">Easy Controls</h3>
            <p className="text-sm text-muted-foreground">Simple commands to control playback</p>
          </div>
          
          <div className="text-center space-y-2 animate-fade-up" style={{ animationDelay: '300ms' }}>
            <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="font-display font-semibold">Queue Management</h3>
            <p className="text-sm text-muted-foreground">Build and manage your playlists</p>
          </div>
        </div>
      </div>
    </section>
  );
}
