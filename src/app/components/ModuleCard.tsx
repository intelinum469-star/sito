import { LucideIcon, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface ModuleCardProps {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  icon: LucideIcon;
  gradient: string;
  isRecommended?: boolean;
  price: number;
  badge?: string;
}

export function ModuleCard({
  id,
  title,
  description,
  forWhom,
  icon: Icon,
  gradient,
  isRecommended = false,
  price,
  badge,
}: ModuleCardProps) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 50) + 20);
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

  const handleAddToCart = () => {
    addItem({
      id,
      title,
      price,
      type: 'module',
    });
  };

  const isInCart = items.some(item => item.id === id);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  return (
    <div className="group relative bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <div className="absolute top-3 md:top-4 left-3 md:left-4 z-10">
          <div className={`bg-gradient-to-r ${gradient} px-2 md:px-3 py-1 md:py-1.5 rounded-full shadow-lg`}>
            <span className="text-xs font-bold text-white">{badge}</span>
          </div>
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={handleLike}
        className="absolute top-3 md:top-4 right-3 md:right-4 z-10 flex items-center gap-1 md:gap-1.5 bg-white/90 backdrop-blur-sm hover:bg-white px-2 md:px-3 py-1 md:py-1.5 rounded-full transition-all shadow-md"
      >
        <Heart
          className={`w-3 md:w-4 h-3 md:h-4 transition-all ${
            isLiked ? "fill-red-500 text-red-500 scale-110" : "text-red-500"
          }`}
        />
        <span className="text-xs font-semibold text-gray-700">{likes}</span>
      </button>

      <div className="p-4 md:p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className={`w-12 md:w-16 h-12 md:h-16 bg-gradient-to-br ${gradient} rounded-xl md:rounded-2xl flex items-center justify-center mb-3 md:mb-4 shadow-lg`}>
          <Icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-600 mb-3 md:mb-4 leading-relaxed">
          {description}
        </p>

        <div className="mb-4 md:mb-6">
          <p className="text-xs sm:text-sm font-semibold text-[#8B5BB5] mb-2">Для кого:</p>
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{forWhom}</p>
        </div>

        <div className="mt-auto">
          <Button 
            onClick={() => navigate(`/module/${id}`)}
            className="w-full bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] hover:from-[#8B5BB5] hover:to-[#4A1C6F] text-white rounded-lg md:rounded-xl text-sm md:text-base py-5 md:py-6 border border-[#D4AF37]/20"
          >
            Подробнее
          </Button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}