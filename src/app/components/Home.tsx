import { BaseCourse } from "./BaseCourse";
import { Modules } from "./Modules";
import { Sparkles, Wand2, Heart } from "lucide-react";

export function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="relative overflow-hidden p-8 md:p-12 mb-12 pt-2 md:pt-4">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent mb-6 leading-tight">
            Пространство цифровой силы мастера
          </h1>

          {/* Description */}
          <div className="space-y-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            <p>
              <span className="font-semibold text-[#8B5BB5]">Название Intelinum</span> — это слияние двух смыслов: <span className="italic">Intelligence</span> (Интеллект) и <span className="italic">Numerology</span> (Нумерология). Это образовательная экосистема для тех, кто готов объединить свою духовную глубину с мощью современных технологий. Здесь мы превращаем сложный Искусственный Интеллект в твоего понятного и заботливого союзника.
            </p>
          </div>

          {/* Mission */}
          <div className="mt-8 bg-gradient-to-br from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] rounded-2xl p-6 md:p-8 border border-[#D4AF37]/20 shadow-xl">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Heart className="w-6 h-6 text-[#D4AF37]" />
              <h2 className="text-2xl md:text-3xl font-bold text-white">Наша Миссия</h2>
            </div>
            <p className="text-white/90 text-lg leading-relaxed">
              Вернуть голос тем, кто долго молчал. Мы здесь, чтобы ты перестала бояться «кнопок» и обрела цифровые крылья. Чтобы рутина ушла нейросетям, а у тебя остались время, энергия и вдохновение для помощи людям.
            </p>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#8B5BB5]/30" />
            <Wand2 className="w-6 h-6 text-[#8B5BB5]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#8B5BB5]/30" />
          </div>
        </div>
      </div>
    </div>
  );
}