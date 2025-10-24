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
    <div className="inline-flex items-center gap-3 px-4 h-9 bg-[#111111]/80 border border-[#E8E4D9]/20 rounded-full backdrop-blur-sm">
      <div className="w-2 h-2 bg-[#5BFF8F] rounded-full animate-pulse" />
      <span className="text-sm font-medium text-white/90 tracking-[0.14em] uppercase">
        {spotsLeft}/{totalSpots} SPOTS LEFT FOR {month}
      </span>
    </div>
  );
}
