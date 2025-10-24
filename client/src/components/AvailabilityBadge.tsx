interface AvailabilityBadgeProps {
  spotsLeft: number;
  totalSpots: number;
  month?: string;
}

export default function AvailabilityBadge({ 
  spotsLeft, 
  totalSpots, 
  month = new Date().toLocaleString('default', { month: 'long' }).toUpperCase() 
}: AvailabilityBadgeProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
      <span className="text-sm font-medium text-white/90 tracking-wide">
        {spotsLeft}/{totalSpots} SPOTS LEFT FOR {month}
      </span>
    </div>
  );
}
