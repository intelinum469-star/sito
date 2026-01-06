import { Play, Clock, Heart, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  oldPrice?: number;
  gradient: string;
  badge?: string;
  likes: number;
  trend?: string;
}

export function Lessons() {
  const { addItem, items } = useCart();
  const navigate = useNavigate();
  
  const [likedLessons, setLikedLessons] = useState<Record<string, { isLiked: boolean; count: number }>>({
    'lesson-reels-viral': { isLiked: false, count: 87 },
    'lesson-gpt-assistant': { isLiked: false, count: 124 },
    'lesson-midjourney-tarot': { isLiked: false, count: 156 },
    'lesson-chatgpt-posts': { isLiked: false, count: 93 },
    'lesson-canva-templates': { isLiked: false, count: 68 },
    'lesson-voice-meditation': { isLiked: false, count: 102 },
  });

  const handleLike = (lessonId: string) => {
    setLikedLessons(prev => ({
      ...prev,
      [lessonId]: {
        isLiked: !prev[lessonId].isLiked,
        count: prev[lessonId].isLiked ? prev[lessonId].count - 1 : prev[lessonId].count + 1
      }
    }));
  };

  const lessons: Lesson[] = [
    {
      id: 'lesson-reels-viral',
      title: "Вирусный Reels за 15 минут",
      description: "Создаём вирусный ролик с помощью ChatGPT и CapCut — пошаговый алгоритм",
      duration: "35 мин",
      price: 990,
      oldPrice: 1490,
      gradient: "from-[#D4AF37] to-[#C9A961]",
      badge: "Хит",
      likes: 87,
      trend: "🔥 +420% охватов"
    },
    {
      id: 'lesson-gpt-assistant',
      title: "Личный GPT-помощник нумеролога",
      description: "Настраиваем ассистента, который делает расчёты и даёт трактовки по нумерологии",
      duration: "28 мин",
      price: 1290,
      oldPrice: 1990,
      gradient: "from-[#8B5BB5] to-[#6B3A91]",
      badge: "Новинка",
      likes: 124,
      trend: "⚡ Экономия 3 часа в день"
    },
    {
      id: 'lesson-midjourney-tarot',
      title: "Своя колода Таро в Midjourney",
      description: "Создаём уникальные карты Таро с помощью ИИ — от промпта до готовой колоды",
      duration: "42 мин",
      price: 1490,
      oldPrice: 2490,
      gradient: "from-[#5DBEBD] to-[#4AA9A8]",
      badge: "Топ",
      likes: 156,
      trend: "✨ Твоя колода за день"
    },
    {
      id: 'lesson-chatgpt-posts',
      title: "30 постов за 30 минут",
      description: "Генерируем месячный контент-план для Instagram с помощью одного промпта",
      duration: "22 мин",
      price: 790,
      gradient: "from-[#4A1C6F] to-[#8B5BB5]",
      likes: 93,
      trend: "📈 Контент на месяц"
    },
    {
      id: 'lesson-canva-templates',
      title: "Магические шаблоны в Canva",
      description: "Создаём профессиональные шаблоны для эзотерического бренда за час",
      duration: "38 мин",
      price: 890,
      gradient: "from-[#D4AF37] to-[#8B5BB5]",
      likes: 68,
      trend: "🎨 Премиум дизайн"
    },
    {
      id: 'lesson-voice-meditation',
      title: "Голосовые медитации с ИИ",
      description: "Генерируем тексты и озвучиваем медитации с помощью нейросетей",
      duration: "31 мин",
      price: 1190,
      gradient: "from-[#5DBEBD] to-[#8B5BB5]",
      likes: 102,
      trend: "🎧 Пассивный доход"
    },
  ];

  const isInCart = (lessonId: string) => {
    return items.some(item => item.id === lessonId);
  };

  const handleAddToCart = (lesson: Lesson) => {
    addItem({
      id: lesson.id,
      title: lesson.title,
      price: lesson.price,
      type: 'lesson',
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] rounded-2xl p-8 shadow-2xl border border-[#D4AF37]/20">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Мини-уроки
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Быстрые практические уроки по конкретным задачам. Купи только то, что нужно прямо сейчас!
          </p>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="relative overflow-hidden bg-white rounded-2xl border border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 group flex flex-col"
          >
            {/* Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${lesson.gradient} opacity-5 group-hover:opacity-10 transition-opacity`} />
            
            {/* Badge */}
            {lesson.badge && (
              <div className="absolute top-4 left-4 z-10">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${lesson.gradient} text-white shadow-lg`}>
                  {lesson.badge}
                </span>
              </div>
            )}

            {/* Like Button */}
            <button
              onClick={() => handleLike(lesson.id)}
              className="absolute top-4 right-4 z-10 flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-all border border-gray-300"
            >
              <Heart
                className={`w-4 h-4 transition-all ${
                  likedLessons[lesson.id]?.isLiked ? "fill-red-500 text-red-500 scale-110" : "text-red-500"
                }`}
              />
              <span className="text-gray-700 font-semibold text-sm">{likedLessons[lesson.id]?.count}</span>
            </button>

            {/* Content */}
            <div className="relative z-10 p-6 pt-16 flex-1 flex flex-col">
              {/* Duration */}
              <div className="flex items-center gap-2 text-gray-600 mb-3">
                <Clock className="w-4 h-4" />
                <span className="text-sm">{lesson.duration}</span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#8B5BB5] transition-colors">
                {lesson.title}
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 flex-1">
                {lesson.description}
              </p>

              {/* Trend */}
              {lesson.trend && (
                <div className="mb-4 px-3 py-2 bg-gradient-to-r from-[#D4AF37]/10 to-[#8B5BB5]/10 rounded-lg border border-[#D4AF37]/30">
                  <p className="text-sm text-[#4A1C6F] font-medium">{lesson.trend}</p>
                </div>
              )}

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-2xl font-bold text-gray-900">{lesson.price} ₽</span>
                {lesson.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">{lesson.oldPrice} ₽</span>
                )}
              </div>

              {/* Button */}
              <Button
                onClick={() => navigate(`/lesson/${lesson.id}`)}
                className={`w-full bg-gradient-to-r ${lesson.gradient} text-white hover:opacity-90 font-semibold py-3 rounded-xl shadow-lg border border-white/20 mt-auto`}
              >
                <Play className="w-4 h-4 mr-2" />
                Подробнее
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}