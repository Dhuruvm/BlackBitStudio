import { MessageCircle } from "lucide-react";

export default function BlackBITNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl md:text-2xl font-bold text-white">
            BlackBIT
          </h1>
        </div>
        
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#E8E4D9] text-black font-medium rounded-full hover:bg-[#D8D4C9] transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span>LET'S CHAT</span>
        </button>
      </div>
    </nav>
  );
}
