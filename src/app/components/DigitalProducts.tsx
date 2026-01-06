import { FileText, Zap, Palette, MessageSquare, Heart, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface DigitalProduct {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  price: number;
  oldPrice?: number;
  badge?: string;
  format?: string;
  features: string[];
}

const digitalProducts: DigitalProduct[] = [
  {
    id: 'digital-prompts-base',
    title: "База промптов для эзотериков",
    description: "500+ готовых промптов для создания контента, консультаций и ведения соцсетей",
    icon: FileText,
    gradient: "from-[#8B5BB5] to-[#6B3A91]",
    price: 4990,
    oldPrice: 7990,
    badge: "Хит продаж",
    format: "PDF, 120 страниц",
    features: [
      "Промпты для постов в Instagram и Telegram",
      "Сценарии для Reels и видео",
      "Шаблоны для консультаций",
      "Промпты для расшифровки натальных карт",
      "Тексты для лендингов и рассылок",
      "Генерация аффирмаций и практик",
      "Создание описаний услуг"
    ]
  },
  {
    id: 'digital-gpt-assistants',
    title: "Готовые GPT-ассистенты",
    description: "5 настроенных ассистентов для автоматизации работы эзотерика",
    icon: Zap,
    gradient: "from-[#4A1C6F] to-[#8B5BB5]",
    price: 9990,
    oldPrice: 14990,
    badge: "Новинка",
    format: "JSON-файлы + видео",
    features: [
      "Ассистент для натальных карт",
      "Бот-нумеролог",
      "Подбор практик и медитаций",
      "Генератор аффирмаций",
      "Помощник по Таро",
      "Консультант для клиентов",
      "Создатель контента"
    ]
  },
  {
    id: 'digital-visual-templates',
    title: "Шаблоны для визуала",
    description: "200+ готовых шаблонов Canva + промпты для Midjourney",
    icon: Palette,
    gradient: "from-[#5DBEBD] to-[#4AA9A8]",
    price: 3990,
    oldPrice: 5990,
    format: "Canva + PDF",
    features: [
      "Шаблоны постов для Instagram",
      "Обложки для Reels",
      "Промпты для создания карт Таро",
      "Шаблоны для Stories",
      "Дизайн лид-магнитов",
      "Обложки для курсов",
      "Баннеры для сайта"
    ]
  },
  {
    id: 'digital-scripts-reels',
    title: "Сценарии для Reels",
    description: "100 готовых сценариев для вирусных роликов в эзотерической нише",
    icon: MessageSquare,
    gradient: "from-[#D4AF37] to-[#C9A961]",
    price: 2990,
    oldPrice: 4490,
    format: "PDF + таблица",
    features: [
      "Сценарии на трендовые звуки",
      "Хуки для первых 3 секунд",
      "Идеи для серий контента",
      "Промпты для субтитров",
      "Чек-лист по вирусности",
      "Шаблоны описаний",
      "Стратегия публикаций"
    ]
  },
  {
    id: 'digital-mega-bundle',
    title: "МЕГА НАБОР: Всё и сразу",
    description: "Все 4 продукта по супер цене + эксклюзивные бонусы",
    icon: Download,
    gradient: "from-[#D4AF37] via-[#8B5BB5] to-[#4A1C6F]",
    price: 15990,
    oldPrice: 33460,
    badge: "Выгода 52%",
    format: "Весь пакет",
    features: [
      "Все 500+ промптов",
      "Все 5 GPT-ассистентов",
      "Все 200+ шаблонов",
      "Все 100 сценариев",
      "БОНУС: Чек-листы по продвижению",
      "БОНУС: Доступ в закрытый чат",
      "БОНУС: Курс по продажам через ИИ"
    ]
  }
];

export function DigitalProducts() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Готовые инструменты
        </h1>
        <p className="text-lg text-gray-600">
          Скачай и используй прямо сейчас — промпты, шаблоны, ассистен
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {digitalProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

function ProductCard({
  id,
  title,
  description,
  icon: Icon,
  gradient,
  price,
  oldPrice,
  badge,
  format,
  features
}: DigitalProduct) {
  const [likes, setLikes] = useState(Math.floor(Math.random() * 60) + 30);
  const [isLiked, setIsLiked] = useState(false);
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

  return (
    <div className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10">
          <div className={`bg-gradient-to-r ${gradient} px-3 py-1.5 rounded-full shadow-lg`}>
            <span className="text-xs font-bold text-white">{badge}</span>
          </div>
        </div>
      )}

      {/* Like Button */}
      <button
        onClick={handleLike}
        className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm hover:bg-white px-3 py-1.5 rounded-full transition-all shadow-md"
      >
        <Heart
          className={`w-4 h-4 transition-all ${
            isLiked ? "fill-red-500 text-red-500 scale-110" : "text-red-500"
          }`}
        />
        <span className="text-xs font-semibold text-gray-700">{likes}</span>
      </button>

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          {description}
        </p>

        {/* Format */}
        {format && (
          <p className="text-sm text-gray-500 mb-4 leading-relaxed">
            Формат: {format}
          </p>
        )}

        {/* Features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-[#5DBEBD] mt-0.5">✓</span>
              <span>{feature}</span>
            </li>
          ))}
          {features.length > 4 && (
            <li className="text-sm text-gray-400 italic">
              + еще {features.length - 4} возможностей
            </li>
          )}
        </ul>

        {/* Button */}
        <div className="mt-auto">
          <Button
            onClick={() => navigate(`/product/${id}`)}
            className="w-full bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] hover:from-[#8B5BB5] hover:to-[#4A1C6F] text-white rounded-xl py-6 text-base"
          >
            Подробнее
          </Button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 border-2 border-[#D4AF37] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}