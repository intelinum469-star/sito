import { useParams, useNavigate } from "react-router-dom";
import { Video, Image, Globe, Users, Heart, CheckCircle, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

interface ModuleData {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  gradient: string;
  icon: any;
  price: number;
  fullDescription: string;
  features: string[];
  results: string[];
  duration: string;
  format: string;
}

const modulesData: Record<string, ModuleData> = {
  'module-video': {
    id: 'module-video',
    title: "Магия Видео: Reels и ролики без стеснения",
    description: "Как снимать себя, если страшно. Как ИИ пишет сценарии за минуту. Как наложить субтитры и сделать красиво.",
    forWhom: "Для тех, кто хочет в TikTok/Reels, но не знает, о чем говорить и как монтировать.",
    gradient: "from-[#5DBEBD] to-[#4AA9A8]",
    icon: Video,
    price: 5000,
    fullDescription: "Этот модуль научит вас создавать вирусные видео для социальных сетей без страха и стеснения. Вы освоите создание сценариев с помощью ИИ, научитесь монтировать и оформлять контент профессионально.",
    features: [
      "Преодоление страха камеры и создание естественного контента",
      "Генерация сценариев для Reels с помощью ChatGPT и других ИИ",
      "Автоматическое создание субтитров и их стилизация",
      "Монтаж видео в CapCut и других простых редакторах",
      "Подбор трендовых звуков и музыки",
      "Создание привлекательных обложек для видео",
      "Анализ статистики и улучшение контента"
    ],
    results: [
      "Умение создавать видео для TikTok, Reels и YouTube Shorts",
      "Навык писать цепляющие сценарии за 5 минут",
      "Уверенность перед камерой",
      "Готовые шаблоны для быстрого создания контента"
    ],
    duration: "2 недели",
    format: "Видеоуроки + практические задания + проверка работ"
  },
  'module-visual': {
    id: 'module-visual',
    title: "Визуальная упаковка: Твой стиль без фотографа",
    description: "Создание метафорических карт, оформление постов, генерация уникальных изображений.",
    forWhom: "Для тех, кто стесняется своих фото или не хочет тратить деньги на фотосессии.",
    gradient: "from-[#8B5BB5] to-[#6B3A91]",
    icon: Image,
    price: 5000,
    fullDescription: "Научитесь создавать уникальный визуальный контент для вашего блога и бизнеса с помощью нейросетей. Больше не нужны дорогие фотосессии - создавайте магический контент сами!",
    features: [
      "Генерация изображений в Midjourney, DALL-E и Stable Diffusion",
      "Создание метафорических и таро-карт для эзотериков",
      "Оформление постов в Canva с элементами ИИ",
      "Создание аватаров и портретов в своем стиле",
      "Генерация фонов, паттернов и текстур",
      "Обработка и улучшение фотографий с помощью ИИ",
      "Создание единого визуального стиля для соцсетей"
    ],
    results: [
      "Портфолио из 20+ уникальных изображений",
      "Свой фирменный визуальный стиль",
      "Навык создания изображений для любых целей",
      "Экономия на фотографах и дизайнерах"
    ],
    duration: "2 недели",
    format: "Видеоуроки + шаблоны + индивидуальная обратная связь"
  },
  'module-website': {
    id: 'module-website',
    title: "Сайт и упаковка: личный бренд за выходные",
    description: "Как собрать одностраничник на Tilda за час. Где брать тексты и графику. Как презентовать свои услуги.",
    forWhom: "Для тех, кто хочет красиво выглядеть в интернете, но не хочет платить дизайнерам.",
    gradient: "from-[#D4AF37] to-[#C9A961]",
    icon: Globe,
    price: 5000,
    fullDescription: "За один уикенд вы создадите профессиональный сайт для своих услуг. ИИ поможет с текстами, изображениями и структурой. Без навыков программирования!",
    features: [
      "Создание сайта на Tilda с нуля",
      "Генерация продающих текстов через ChatGPT",
      "Подбор структуры и блоков для разных ниш",
      "Создание графики и иллюстраций для сайта",
      "Настройка форм обратной связи и приема платежей",
      "SEO-оптимизация с помощью ИИ",
      "Интеграция с соцсетями и мессенджерами"
    ],
    results: [
      "Готовый работающий сайт-визитка",
      "Продающие тексты для всех разделов",
      "Уникальный дизайн без дизайнера",
      "Настроенная система приема заявок"
    ],
    duration: "1 неделя",
    format: "Пошаговые видео + чек-листы + поддержка в чате"
  },
  'module-assistants': {
    id: 'module-assistants',
    title: "Продвинутые ассистенты: делегируй все",
    description: "Создание ассистентов для консультаций, расчета натальной карты, подбора практик.",
    forWhom: "Для тех, кто готов автоматизировать рутину и освободить время для творчества.",
    gradient: "from-[#4A1C6F] to-[#8B5BB5]",
    icon: Users,
    price: 5000,
    fullDescription: "Самый продвинутый модуль для тех, кто хочет делегировать рутинные задачи искусственному интеллекту. Создайте своих личных ассистентов для бизнеса и жизни.",
    features: [
      "Создание GPT-ассистентов под свою нишу",
      "Настройка ботов для консультаций клиентов",
      "Автоматизация расчета натальных карт и нумерологии",
      "Создание ассистента для подбора практик и медитаций",
      "Интеграция ассистентов в Telegram и WhatsApp",
      "Обучение ассистента на своих материалах",
      "Монетизация через подписки и разовые консультации"
    ],
    results: [
      "3-5 настроенных ассистентов для вашего бизнеса",
      "Автоматизация 70% рутинных задач",
      "Пассивный доход от ботов-консультантов",
      "Больше времени на творчество и развитие"
    ],
    duration: "3 недели",
    format: "Видеоуроки + практика + менторство + закрытый чат"
  }
};

export function ModuleDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [likes, setLikes] = useState(Math.floor(Math.random() * 80) + 40);
  const [isLiked, setIsLiked] = useState(false);

  const module = id ? modulesData[id] : null;

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Модуль не найден</h1>
        <Button onClick={() => navigate('/courses')}>Вернуться к курсам</Button>
      </div>
    );
  }

  const Icon = module.icon;
  const isInCart = items.some(item => item.id === module.id);

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
      id: module.id,
      title: module.title,
      price: module.price,
      type: 'module',
    });
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/courses')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Вернуться к курсам</span>
      </button>

      {/* Hero Section */}
      <div className={`relative overflow-hidden bg-gradient-to-br ${module.gradient} rounded-3xl p-8 md:p-12 shadow-2xl mb-8 border border-white/20`}>
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

        {/* Like Button */}
        <button
          onClick={handleLike}
          className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 px-4 py-2 rounded-full transition-all border border-white/30"
        >
          <Heart
            className={`w-5 h-5 transition-all ${
              isLiked ? "fill-white text-white scale-110" : "text-white"
            }`}
          />
          <span className="text-white font-semibold text-sm">{likes}</span>
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full mb-2">
                <Sparkles className="w-3 h-3 text-white" />
                <span className="text-xs text-white font-medium">Дополнительный модуль</span>
              </div>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {module.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
            {module.description}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">💰 {formatPrice(module.price)} ₽</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">⏱ {module.duration}</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">📚 {module.format}</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">О модуле</h2>
            <p className="text-gray-600 leading-relaxed mb-4">{module.fullDescription}</p>
            <div className="bg-gradient-to-r from-[#8B5BB5]/10 to-[#D4AF37]/10 rounded-xl p-4 border border-[#8B5BB5]/20">
              <p className="text-sm font-semibold text-[#4A1C6F] mb-1">Для кого:</p>
              <p className="text-gray-700">{module.forWhom}</p>
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что вы изучите:</h2>
            <ul className="space-y-3">
              {module.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5DBEBD] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Результаты обучения:</h2>
            <ul className="space-y-3">
              {module.results.map((result, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">Стоимость модуля</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">
                {formatPrice(module.price)} ₽
              </p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isInCart}
              className="w-full bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] hover:from-[#8B5BB5] hover:to-[#4A1C6F] text-white py-6 text-lg rounded-xl mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isInCart ? '✓ В корзине' : 'Добавить в корзину'}
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
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#8B5BB5]/20 rounded-2xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#4A1C6F]">Бонус!</h3>
            </div>
            <p className="text-sm text-gray-700">
              При покупке Базового курса + этого модуля получите скидку 15%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
