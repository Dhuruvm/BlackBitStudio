import { useState, useEffect } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import albumCover from "@assets/stock_images/talwinder_singer_has_0335c7db.jpg";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(45);
  const [volume, setVolume] = useState(70);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 0.5;
      });
    }, 500);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentTime = Math.floor((progress / 100) * 210);
  const totalTime = 210;

  return (
    <div 
      className="relative w-full max-w-md mx-auto backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl p-6 shadow-2xl animate-fade-up"
      data-testid="music-player"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-chart-2/10 rounded-2xl" />
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center gap-4">
          <div className="relative group">
            <img
              src={albumCover}
              alt="Haseen - Talwinder"
              className="w-20 h-20 rounded-lg object-cover shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              {isPlaying ? (
                <div className="flex gap-1">
                  <div className="w-1 h-4 bg-primary animate-pulse" style={{ animationDelay: '0ms' }} />
                  <div className="w-1 h-6 bg-primary animate-pulse" style={{ animationDelay: '150ms' }} />
                  <div className="w-1 h-4 bg-primary animate-pulse" style={{ animationDelay: '300ms' }} />
                </div>
              ) : null}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-display font-bold text-lg text-foreground truncate">Haseen</h3>
            <p className="text-sm text-muted-foreground">Talwinder</p>
            <div className="flex items-center gap-2 mt-1">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1 h-3 rounded-full ${
                      isPlaying ? 'bg-chart-3 animate-pulse' : 'bg-muted'
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">
                {isPlaying ? 'Now Playing' : 'Paused'}
              </span>
            </div>
          </div>

          <Button
            size="icon"
            variant="ghost"
            onClick={() => setIsLiked(!isLiked)}
            className="flex-shrink-0"
            data-testid="button-like"
          >
            <Heart className={`w-5 h-5 ${isLiked ? 'fill-primary text-primary' : ''}`} />
          </Button>
        </div>

        <div className="space-y-2">
          <Slider
            value={[progress]}
            onValueChange={(value) => setProgress(value[0])}
            max={100}
            step={1}
            className="cursor-pointer"
            data-testid="slider-progress"
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(totalTime)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate active-elevate-2"
            data-testid="button-previous"
          >
            <SkipBack className="w-5 h-5" />
          </Button>

          <Button
            size="icon"
            variant="default"
            className="w-12 h-12"
            onClick={() => setIsPlaying(!isPlaying)}
            data-testid="button-play-pause"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-0.5" />
            )}
          </Button>

          <Button
            size="icon"
            variant="ghost"
            className="hover-elevate active-elevate-2"
            data-testid="button-next"
          >
            <SkipForward className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center gap-3">
          <Volume2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="flex-1"
            data-testid="slider-volume"
          />
          <span className="text-xs text-muted-foreground w-8 text-right">{volume}%</span>
        </div>
      </div>

      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-chart-2/20 rounded-full blur-3xl" />
    </div>
  );
}
