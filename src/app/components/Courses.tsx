import { BaseCourse } from "./BaseCourse";
import { Modules } from "./Modules";
import { Sparkles } from "lucide-react";

export function Courses() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Discount Info Banner */}
      <div className="bg-gradient-to-r from-[#8B5BB5]/10 via-[#D4AF37]/10 to-[#5DBEBD]/10 rounded-2xl p-6 mb-8 border border-[#D4AF37]/30">
        <div className="flex items-center justify-center gap-3">
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
          <p className="text-lg md:text-xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">
            Скидки до 25% при покупке базового курса с модулями
          </p>
          <Sparkles className="w-6 h-6 text-[#D4AF37]" />
        </div>
      </div>

      <BaseCourse />
      <Modules />
    </div>
  );
}