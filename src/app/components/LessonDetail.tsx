import { useNavigate, useParams } from "react-router-dom";
import { Play, CheckCircle, ArrowLeft, Clock, Sparkles, Video, FileText, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/CartContext";

export function LessonDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { addItem, items } = useCart();

  const lessonsData: Record<string, any> = {
    'lesson-reels-viral': {
      title: "Вирусный Reels за 15 минут",
      description: "Создаём вирусный ролик с помощью ChatGPT и CapCut — пошаговый алгоритм",
      duration: "35 мин",
      price: 990,
      oldPrice: 1490,
      gradient: "from-[#D4AF37] to-[#C9A961]",
      badge: "Хит",
      trend: "🔥 +420% охватов",
      fullDescription: "В этом уроке я покажу вам, как я создала вирусный Reels, который собрал 47 000 просмотров. Вы увидите весь процесс от идеи до публикации и получите все промпты, которые я использовала.",
      whatYouGet: [
        "Запись экрана с процессом создания реального вирусного ролика",
        "Готовые промпты для ChatGPT, которые я использовала",
        "Файл проекта CapCut для разбора монтажа",
        "Чек-лист публикации для максимальных охватов"
      ],
      caseExample: {
        title: "Реальный кейс:",
        stats: "47 000 просмотров • 2 300 лайков • 89 сохранений",
        description: "Ролик про использование ChatGPT для создания гороскопа"
      }
    },
    'lesson-gpt-assistant': {
      title: "Личный GPT-помощник нумеролога",
      description: "Настраиваем ассистента, который делает расчёты и даёт трактовки по нумерологии",
      duration: "28 мин",
      price: 1290,
      oldPrice: 1990,
      gradient: "from-[#8B5BB5] to-[#6B3A91]",
      badge: "Новинка",
      trend: "⚡ Экономия 3 часа в день",
      fullDescription: "Я покажу свой личный GPT-ассистент, который делает за меня все нумерологические расчёты. Вы получите полную копию моих настроек и сможете создать такого же помощника за 30 минут.",
      whatYouGet: [
        "Запись процесса настройки моего GPT-ассистента",
        "Готовый файл с инструкциями для GPT (копировать и использовать)",
        "База нумерологических значений для загрузки в ассистента",
        "Примеры запросов, которые я использую каждый день"
      ],
      caseExample: {
        title: "Что он умеет:",
        stats: "Расчёт матрицы судьбы • Совместимость • Персональный год",
        description: "Мой ассистент обрабатывает 15-20 запросов в день и экономит мне 3 часа работы"
      }
    },
    'lesson-midjourney-tarot': {
      title: "Своя колода Таро в Midjourney",
      description: "Создаём уникальные карты Таро с помощью ИИ — от промпта до готовой колоды",
      duration: "42 мин",
      price: 1490,
      oldPrice: 2490,
      gradient: "from-[#5DBEBD] to-[#4AA9A8]",
      badge: "Топ",
      trend: "✨ Твоя колода за день",
      fullDescription: "Я покажу, как создала свою авторскую колоду Таро в Midjourney, которую потом напечатала и продаю. Вы увидите процесс создания нескольких карт и получите все мои промпты.",
      whatYouGet: [
        "Видео создания 5 карт Таро с объяснением промптов",
        "Готовые промпты для всех 78 карт (Старшие и Младшие арканы)",
        "Мои настройки для единого стиля колоды",
        "Гайд по печати колоды (где печатать, какие параметры)"
      ],
      caseExample: {
        title: "Моя колода:",
        stats: "78 карт • Напечатана в типографии • Продано 23 колоды",
        description: "Я создала колоду за 2 дня и продаю её по 3 500₽"
      }
    },
    'lesson-chatgpt-posts': {
      title: "30 постов за 30 минут",
      description: "Генерируем месячный контент-план для Instagram с помощью одного промпта",
      duration: "22 мин",
      price: 790,
      gradient: "from-[#4A1C6F] to-[#8B5BB5]",
      trend: "📈 Контент на месяц",
      fullDescription: "Я покажу свой рабочий промпт, которым создаю контент-план на месяц за один запрос. Вы увидите живой процесс и получите готовый промпт для своей ниши.",
      whatYouGet: [
        "Запись экрана с созданием контент-плана в реальном времени",
        "Мой универсальный промпт для ChatGPT",
        "Пример готового контент-плана на 30 дней",
        "Инструкция по адаптации под любую эзотерическую нишу"
      ],
      caseExample: {
        title: "Реальный результат:",
        stats: "30 идей постов • 30 заголовков • Готовые хэштеги",
        description: "Этим промптом я делаю контент-планы для 4 своих аккаунтов"
      }
    },
    'lesson-canva-templates': {
      title: "Магические шаблоны в Canva",
      description: "Создаём профессиональные шаблоны для эзотерического бренда за час",
      duration: "38 мин",
      price: 890,
      gradient: "from-[#D4AF37] to-[#8B5BB5]",
      trend: "🎨 Премиум дизайн",
      fullDescription: "Я покажу, как создаю свои шаблоны для Instagram в Canva. Вы увидите процесс создания 3 шаблонов и получите доступ к копированию моих готовых дизайнов.",
      whatYouGet: [
        "Видео создания 3 шаблонов от начала до конца",
        "Ссылки на мои готовые шаблоны в Canva (можно копировать)",
        "Моя цветовая палитра и подборка шрифтов",
        "Подборка магических элементов для дизайна"
      ],
      caseExample: {
        title: "Что создадим:",
        stats: "Пост для цитат • Анонс консультации • Карусель для обучения",
        description: "Эти шаблоны я использую в 3 своих аккаунтах каждую неделю"
      }
    },
    'lesson-voice-meditation': {
      title: "Голосовые медитации с ИИ",
      description: "Генерируем тексты и озвучиваем медитации с помощью нейросетей",
      duration: "31 мин",
      price: 1190,
      gradient: "from-[#5DBEBD] to-[#8B5BB5]",
      trend: "🎧 Пассивный доход",
      fullDescription: "Я покажу, как создаю аудио-медитации для продажи. Вы увидите весь процесс: от создания текста в ChatGPT до озвучки и добавления музыки.",
      whatYouGet: [
        "Запись создания медитации от начала до готового аудио",
        "Промпт для генерации текстов медитаций",
        "Настройки ElevenLabs для создания приятного голоса",
        "Подборка фоновой музыки (ссылки на бесплатные источники)"
      ],
      caseExample: {
        title: "Моя медитация:",
        stats: "8 минут • Голос нейросети • С музыкой",
        description: "Я создала пак из 10 медитаций и продаю его по 1 990₽"
      }
    }
  };

  const lesson = lessonsData[id || ''];

  if (!lesson) {
    return (
      <div className="max-w-5xl mx-auto text-center py-20">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Урок не найден</h2>
        <Button onClick={() => navigate('/lessons')}>
          Вернуться к урокам
        </Button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: id || '',
      title: lesson.title,
      price: lesson.price,
      type: 'lesson',
    });
  };

  const isInCart = items.some(item => item.id === id);

  return (
    <div className="max-w-5xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => navigate('/lessons')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Вернуться к урокам</span>
      </button>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] rounded-3xl p-8 md:p-12 shadow-2xl mb-8 border border-[#D4AF37]/20">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5DBEBD]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/20 rounded-full blur-3xl" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {lesson.badge && (
              <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${lesson.gradient} text-white shadow-lg`}>
                {lesson.badge}
              </span>
            )}
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4 text-white" />
              <span className="text-sm text-white">{lesson.duration}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
            {lesson.title}
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-6 max-w-3xl">
            {lesson.description}
          </p>

          {lesson.trend && (
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 backdrop-blur-md px-4 py-2 rounded-xl border border-[#D4AF37]/50">
              <span className="text-white font-semibold">{lesson.trend}</span>
            </div>
          )}
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-6">
          {/* About */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Описание урока</h2>
            <p className="text-gray-600 leading-relaxed">
              {lesson.fullDescription}
            </p>
          </div>

          {/* What You Get */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Что вы получите:</h2>
            <ul className="space-y-3">
              {lesson.whatYouGet.map((item: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#5DBEBD] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Case Example */}
          {lesson.caseExample && (
            <div className="bg-gradient-to-br from-[#D4AF37]/10 to-[#8B5BB5]/10 rounded-2xl p-6 md:p-8 border border-[#D4AF37]/30 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{lesson.caseExample.title}</h2>
              <p className="text-[#8B5BB5] font-semibold mb-3">{lesson.caseExample.stats}</p>
              <p className="text-gray-700">{lesson.caseExample.description}</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Price Card */}
          <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-6">
            <div className="text-center mb-6">
              <p className="text-gray-600 mb-2">Стоимость урока</p>
              <div className="flex items-baseline justify-center gap-2">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">
                  {lesson.price} ₽
                </p>
                {lesson.oldPrice && (
                  <p className="text-lg text-gray-400 line-through">
                    {lesson.oldPrice} ₽
                  </p>
                )}
              </div>
              {lesson.oldPrice && (
                <p className="text-sm text-[#D4AF37] mt-2">
                  Скидка {Math.round((1 - lesson.price / lesson.oldPrice) * 100)}%
                </p>
              )}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={isInCart}
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C9A961] hover:from-[#C9A961] hover:to-[#D4AF37] text-white py-6 text-lg rounded-xl mb-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isInCart ? '✓ В корзине' : 'Купить урок'}
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
                  <Video className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Видео в HD качестве</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Конспект урока</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Все материалы для скачивания</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-[#5DBEBD]" />
                  <span>Пожизненный доступ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="bg-gradient-to-br from-[#5DBEBD]/20 to-[#8B5BB5]/20 rounded-2xl p-6 border border-[#5DBEBD]/30">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[#5DBEBD]" />
              <h3 className="font-bold text-[#4A1C6F]">Доступ сразу после оплаты!</h3>
            </div>
            <p className="text-sm text-gray-700">
              Все материалы будут доступны в личном кабинете сразу после покупки.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}