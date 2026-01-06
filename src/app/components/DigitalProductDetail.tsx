import { useParams, useNavigate } from "react-router-dom";
import { FileText, Zap, Palette, MessageSquare, Download, Heart, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

interface DigitalProductData {
  id: string;
  title: string;
  description: string;
  icon: any;
  gradient: string;
  price: number;
  oldPrice: number;
  badge?: string;
  features: string[];
  fullDescription: string;
  includes: string[];
  bonuses?: string[];
  format: string;
}

const productsData: Record<string, DigitalProductData> = {
  'digital-prompts-base': {
    id: 'digital-prompts-base',
    title: "База промптов для эзотериков",
    description: "500+ готовых промптов для создания контента, консультаций и ведения соцсетей",
    icon: FileText,
    gradient: "from-[#8B5BB5] to-[#6B3A91]",
    price: 4990,
    oldPrice: 7990,
    badge: "Хит продаж",
    features: [
      "Промпты для постов в Instagram и Telegram",
      "Сценарии для Reels и видео",
      "Шаблоны для консультаций",
      "Промпты для расшифровки натальных карт",
      "Тексты для лендингов и рассылок",
      "Генерация аффирмаций и практик",
      "Создание описаний услуг"
    ],
    fullDescription: "Готовая база из 500+ профессиональных промптов, специально адаптированных для эзотериков, нумерологов, астрологов и таро-практиков. Просто копируй, вставляй в ChatGPT и получай готовый контент за секунды!",
    includes: [
      "PDF-файл с 500+ готовыми промптами",
      "Разделы по темам: посты, рилс, консультации, тексты",
      "Инструкция по использованию",
      "Примеры готового контента",
      "Шаблоны для персонализации под свою нишу"
    ],
    bonuses: [
      "Бонус: 50 промптов для создания уникальных изображений",
      "Бонус: Чек-лист эффективного промпта"
    ],
    format: "PDF, 120 страниц"
  },
  'digital-gpt-assistants': {
    id: 'digital-gpt-assistants',
    title: "Готовые GPT-ассистенты",
    description: "5 настроенных ассистентов для автоматизации работы эзотерика",
    icon: Zap,
    gradient: "from-[#4A1C6F] to-[#8B5BB5]",
    price: 9990,
    oldPrice: 14990,
    badge: "Новинка",
    features: [
      "Ассистент для натальных карт",
      "Бот-нумеролог",
      "Подбор практик и медитаций",
      "Генератор аффирмаций",
      "Помощник по Таро",
      "Консультант для клиентов",
      "Создатель контента"
    ],
    fullDescription: "5 полностью настроенных GPT-ассистентов, готовых к использованию. Просто импортируй в свой ChatGPT и начинай пользоваться! Каждый ассистент обучен на специфике эзотерической ниши.",
    includes: [
      "JSON-файлы для импорта ассистентов",
      "Пошаговая инструкция по установке",
      "Примеры диалогов с каждым ассистентом",
      "Промпты для донастройки под себя",
      "Видеоурок по работе с ассистентами"
    ],
    bonuses: [
      "Бонус: Ассистент для анализа конкурентов",
      "Бонус: Доступ в чат поддержки на 30 дней"
    ],
    format: "JSON-файлы + видеоинструкция"
  },
  'digital-visual-templates': {
    id: 'digital-visual-templates',
    title: "Шаблоны для визуала",
    description: "200+ готовых шаблонов Canva + промпты для Midjourney",
    icon: Palette,
    gradient: "from-[#5DBEBD] to-[#4AA9A8]",
    price: 3990,
    oldPrice: 5990,
    features: [
      "Шаблоны постов для Instagram",
      "Обложки для Reels",
      "Промпты для создания карт Таро",
      "Шаблоны для Stories",
      "Дизайн лид-магнитов",
      "Обложки для курсов",
      "Баннеры для сайта"
    ],
    fullDescription: "Готовые шаблоны в Canva, которые можно редактировать одним кликом + промпты для создания уникальных изображений в Midjourney. Никаких навыков дизайна не требуется!",
    includes: [
      "200+ шаблонов Canva (доступ по ссылке)",
      "100 промптов для Midjourney",
      "Цветовые палитры для эзотерической ниши",
      "Шрифтовые пары",
      "Видео по кастомизации шаблонов"
    ],
    bonuses: [
      "Бонус: 50 готовых Stories",
      "Бонус: Промпты для создания аватаров"
    ],
    format: "Canva шаблоны + PDF с промптами"
  },
  'digital-scripts-reels': {
    id: 'digital-scripts-reels',
    title: "Сценарии для Reels",
    description: "100 готовых сценариев для вирусных роликов в эзотерической нише",
    icon: MessageSquare,
    gradient: "from-[#D4AF37] to-[#C9A961]",
    price: 2990,
    oldPrice: 4490,
    features: [
      "Сценарии на трендовые звуки",
      "Хуки для первых 3 секунд",
      "Идеи для серий контента",
      "Промпты для субтитров",
      "Чек-лист по вирусности",
      "Шаблоны описаний",
      "Стратегия публикаций"
    ],
    fullDescription: "100 проверенных сценариев, которые уже набрали миллионы просмотров. Адаптированы специально для эзотериков — просто подставь свои данные и снимай!",
    includes: [
      "100 готовых сценариев в формате PDF",
      "Таблица с трендовыми звуками",
      "Примеры успешных видео",
      "Шаблоны для субтитров",
      "Чек-лист вирусного контента"
    ],
    bonuses: [
      "Бонус: 20 хуков для любого видео",
      "Бонус: Календарь контента на месяц"
    ],
    format: "PDF + таблица Google Sheets"
  },
  'digital-mega-bundle': {
    id: 'digital-mega-bundle',
    title: "МЕГА НАБОР: Всё и сразу",
    description: "Все 4 продукта по супер цене + бонусы",
    icon: Download,
    gradient: "from-[#D4AF37] via-[#8B5BB5] to-[#4A1C6F]",
    price: 15990,
    oldPrice: 33460,
    badge: "Выгода 52%",
    features: [
      "Все 500+ промптов",
      "Все 5 GPT-ассистентов",
      "Все 200+ шаблонов",
      "Все 100 сценариев",
      "БОНУС: Чек-листы по продвижению",
      "БОНУС: Доступ в закрытый чат",
      "БОНУС: Курс по продажам через ИИ"
    ],
    fullDescription: "Полный набор всех цифровых продуктов со скидкой 52%! Получи все инструменты для работы с ИИ и начни зарабатывать уже сегодня. Это максимальная выгода!",
    includes: [
      "База из 500+ промптов",
      "5 готовых GPT-ассистентов",
      "200+ шаблонов Canva",
      "100 сценариев для Reels",
      "Все бонусы из отдельных продуктов"
    ],
    bonuses: [
      "ЭКСКЛЮЗИВ: Мини-курс 'Продажи через ИИ' (стоимость 9 990₽)",
      "ЭКСКЛЮЗИВ: Пожизненный доступ в закрытый чат",
      "ЭКСКЛЮЗИВ: Ежемесячные обновления базы промптов",
      "ЭКСКЛЮЗИВ: Личная консультация на 30 минут"
    ],
    format: "Весь пакет файлов + доступы"
  }
};

export function DigitalProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [likes, setLikes] = useState(Math.floor(Math.random() * 100) + 50);
  const [isLiked, setIsLiked] = useState(false);

  const product = id ? productsData[id] : null;

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Продукт не найден</h1>
        <Button onClick={() => navigate('/digital-products')}>Вернуться к продуктам</Button>
      </div>
    );
  }

  const Icon = product.icon;
  const isInCart = items.some(item => item.id === product.id);
  const discountPercent = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

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
      id: product.id,
      title: product.title,
      price: product.price,
      type: 'digital',
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/digital-products')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Вернуться к продуктам</span>
      </button>

      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${product.gradient} rounded-3xl p-8 md:p-12 shadow-2xl mb-8 border border-white/20`}>
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        
        {/* Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div className="flex flex-col gap-2">
              {product.badge && (
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full self-start">
                  <span className="text-sm font-bold text-white">{product.badge}</span>
                </div>
              )}
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {product.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
            {product.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">📦 {product.format}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">⚡️ Мгновенный доступ</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{product.fullDescription}</p>
          </div>

          {/* What's Included */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что входит:</h2>
            <ul className="space-y-3">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5DBEBD] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Возможности:</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#8B5BB5] mt-1">✓</span>
                  <span className="text-gray-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bonuses */}
          {product.bonuses && (
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#8B5BB5]/20 rounded-2xl p-6 md:p-8 shadow-lg border border-[#D4AF37]/30">
              <h2 className="text-2xl font-bold text-[#4A1C6F] mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-[#D4AF37]" />
                Бонусы
              </h2>
              <ul className="space-y-3">
                {product.bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] text-xl">🎁</span>
                    <span className="text-gray-700">{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl text-gray-400 line-through">
                  {formatPrice(product.oldPrice)} ₽
                </span>
                <span className="bg-red-100 text-red-600 text-sm font-bold px-2 py-1 rounded">
                  -{discountPercent}%
                </span>
              </div>
              <p className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">
                {formatPrice(product.price)} ₽
              </p>
              <p className="text-sm text-green-600 font-semibold mt-2">
                Экономия {formatPrice(product.oldPrice - product.price)} ₽
              </p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isInCart}
              className="w-full bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] hover:from-[#8B5BB5] hover:to-[#4A1C6F] text-white py-6 text-lg rounded-xl mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isInCart ? '✓ В корзине' : 'Купить сейчас'}
            </Button>

            {isInCart && (
              <Button
                onClick={() => navigate('/cart')}
                variant="outline"
                className="w-full border-[#8B5BB5] text-[#4A1C6F] hover:bg-[#8B5BB5]/10"
              >
                Перейти в корзину
              </Button>
            )}

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Мгновенный доступ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Пожизненное использование</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Все обновления бесплатно</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}