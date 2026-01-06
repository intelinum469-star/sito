import { WandSparkles, CheckCircle, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function BaseCourse() {
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);
  const { addItem, items } = useCart();
  const navigate = useNavigate();

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
      setIsLiked(false);
    } else {
      setLikes(likes + 1);
      setIsLiked(true);
    }
  };

  const handleEnroll = () => {
    addItem({
      id: 'base-course',
      title: 'Базовый курс "Нейросети: Твой старт"',
      price: 12000,
      type: 'course',
    });
  };

  const isInCart = items.some(item => item.id === 'base-course');

  const features = [
    "Регистрация и настройка (обходим блокировки, включаем VPN)",
    "Основы общения с ChatGPT: как задавать вопросы",
    "Твой первый Ассистент: настраиваем помощника под твой стиль",
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] rounded-2xl p-6 md:p-8 shadow-2xl mb-6 border border-[#D4AF37]/20">
      {/* Cosmic Background Effects */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#5DBEBD]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/20 rounded-full blur-3xl" />
      
      {/* Like Button */}
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-[#D4AF37]/30"
      >
        <Heart
          className={`w-4 h-4 transition-all ${
            isLiked ? "fill-red-500 text-red-500 scale-110" : "text-red-500"
          }`}
        />
        <span className="text-white font-semibold text-sm">{likes}</span>
      </button>
      
      <div className="relative z-10 flex flex-col items-start justify-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 border border-[#D4AF37]/40">
          <WandSparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-sm text-white font-medium">Базовый курс — фундамент твоего пути</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
          Нейросети: Твой старт
        </h2>
        <p className="text-base md:text-lg text-white/90 mb-6">
          Самое необходимое, чтобы перестать бояться и начать делать
        </p>

        {/* Features */}
        <div className="space-y-3 mb-6">
          {[
            "Регистрация и настройка (обходим блокировки, включаем VPN)",
            "Основы общения с ChatGPT: как задавать вопросы",
            "Твой первый Ассистент: настраиваем помощника под твой стиль",
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#5DBEBD] flex-shrink-0 mt-0.5" />
              <span className="text-sm md:text-base text-white/90">{feature}</span>
            </div>
          ))}
        </div>

        <Button 
          size="lg"
          onClick={() => navigate('/course/base-course')}
          className="w-full sm:w-auto bg-gradient-to-r from-[#5DBEBD] to-[#4AA9A8] text-white hover:from-[#4AA9A8] hover:to-[#5DBEBD] font-semibold px-8 py-5 text-base rounded-xl shadow-xl border border-white/20"
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
}