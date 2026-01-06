import { useNavigate } from "react-router-dom";
import { WandSparkles, CheckCircle, Heart, ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";

export function CourseDetail() {
  const navigate = useNavigate();
  const { addItem, items } = useCart();
  const [likes, setLikes] = useState(142);
  const [isLiked, setIsLiked] = useState(false);

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
    "Создание промптов для генерации текстов",
    "Использование ChatGPT для планирования и организации",
    "Практические задания с проверкой"
  ];

  const modules = [
    {
      title: "Модуль 1: Знакомство с ИИ",
      lessons: [
        "Что такое нейросети и как они работают",
        "Регистрация в ChatGPT и обход блокировок",
        "Первый диалог с ИИ"
      ]
    },
    {
      title: "Модуль 2: Основы работы",
      lessons: [
        "Как правильно задавать вопросы",
        "Структура эффективного промпта",
        "Типичные ошибки и как их избежать"
      ]
    },
    {
      title: "Модуль 3: Твой первый ассистент",
      lessons: [
        "Создание персонализированного GPT",
        "Настройка под свою нишу",
        "Примеры готовых ассистентов"
      ]
    },
    {
      title: "Модуль 4: Практическое применение",
      lessons: [
        "Генерация контента для соцсетей",
        "Создание писем и сообщений",
        "Планирование с помощью ИИ"
      ]
    }
  ];

  const results = [
    "Уверенное владение ChatGPT и другими нейросетями",
    "Свой настроенный ассистент для работы",
    "Навык создания качественных промптов",
    "Экономия времени на рутинных задачах до 5 часов в неделю"
  ];

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
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] rounded-3xl p-8 md:p-12 shadow-2xl mb-8 border border-[#D4AF37]/20">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5DBEBD]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl" />
        
        {/* Sparkles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
        </div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg">
            <WandSparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white font-medium">Базовый курс</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Нейросети: Твой старт
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
            Самое необходимое, чтобы перестать бояться и начать делать
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">💰 12 000 ₽</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">⏱ 3 недели</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white text-sm">📚 4 модуля</span>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">О курсе</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Базовый курс "Нейросети: Твой старт" - это фундамент для всех, кто хочет освоить работу с искусственным интеллектом. Вы пройдете путь от полного нуля до уверенного пользователя ChatGPT и других нейросетей.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Курс создан специально для эзотериков, коучей, психологов и всех, кто хочет использовать ИИ в своей практике. Никакой технической терминологии - только простые и понятные объяснения.
            </p>
          </div>

          {/* What's Inside */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что внутри:</h2>
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5DBEBD] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Program */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Программа курса:</h2>
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-4 hover:border-[#8B5BB5]/50 transition-colors">
                  <h3 className="font-bold text-gray-900 mb-3">{module.title}</h3>
                  <ul className="space-y-2">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <li key={lessonIndex} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-[#8B5BB5] mt-1">•</span>
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Результаты обучения:</h2>
            <ul className="space-y-3">
              {results.map((result, index) => (
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
              <p className="text-gray-600 mb-2">Стоимость курса</p>
              <p className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">
                12 000 ₽
              </p>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isInCart}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C9A961] hover:from-[#C9A961] hover:to-[#D4AF37] text-white py-6 text-lg rounded-xl mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isInCart ? '✓ В корзине' : 'Хочу на Базу'}
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
                  <span>Пожизненный доступ</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Проверка заданий</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Сертификат</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-br from-[#D4AF37]/20 to-[#8B5BB5]/20 rounded-2xl p-6 border border-[#D4AF37]/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#D4AF37]" />
              <h3 className="font-bold text-[#4A1C6F]">Специальное предложение!</h3>
            </div>
            <p className="text-sm text-gray-700">
              Купите Базовый курс + любой дополнительный модуль и получите скидку 15% на весь заказ!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}