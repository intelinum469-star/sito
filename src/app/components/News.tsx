import { Radio, Clock, ArrowRight, Zap, Heart, Calendar, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function News() {
  const navigate = useNavigate();
  const [newsLikes, setNewsLikes] = useState<Record<number, { count: number; isLiked: boolean }>>({
    1: { count: 89, isLiked: false },
    2: { count: 65, isLiked: false },
    3: { count: 43, isLiked: false },
    4: { count: 72, isLiked: false },
    5: { count: 38, isLiked: false },
    6: { count: 56, isLiked: false },
  });

  const [showCalendar, setShowCalendar] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0)); // January 2026

  const handleNewsLike = (id: number) => {
    setNewsLikes(prev => ({
      ...prev,
      [id]: {
        count: prev[id].isLiked ? prev[id].count - 1 : prev[id].count + 1,
        isLiked: !prev[id].isLiked
      }
    }));
  };

  const handleReadDetails = (id: number) => {
    navigate(`/news/${id}`);
  };

  const handleReadMore = (id: number) => {
    navigate(`/news/${id}`);
  };

  const handleSubscribe = () => {
    alert("Спасибо за подписку! Вы будете получать все новости первыми! 📧");
  };

  const news = [
    {
      id: 1,
      title: "Запуск нового модуля: ИИ для создания медитаций",
      excerpt: "Представляем революционный инструмент для генерации персонализированных медитативных практик с помощью нейросетей.",
      date: "6 января 2026",
      dateObj: new Date(2026, 0, 6),
      time: "14:30",
      category: "Новый курс",
      isHot: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 2,
      title: "Обновление ChatGPT 5.0: что нового для эзотериков",
      excerpt: "Разбираем главные нововведения и как они помогут в астрологических расчетах и составлении прогнозов.",
      date: "4 января 2026",
      dateObj: new Date(2026, 0, 4),
      time: "10:15",
      category: "Обновление",
      isHot: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Вебинар: Создание колод Таро с помощью Midjourney",
      excerpt: "Бесплатный мастер-класс 15 января в 19:00 МСК. Покажем, как создать полную колоду за 3 часа.",
      date: "3 января 2026",
      dateObj: new Date(2026, 0, 15),
      time: "18:00",
      category: "Событие",
      isHot: false,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      id: 4,
      title: "Скидка 40% на набор модулей до конца недели",
      excerpt: "Специальное предложение для новых учеников: получите доступ ко всем 4 модулям со скидкой.",
      date: "2 января 2026",
      dateObj: new Date(2026, 0, 10),
      time: "09:00",
      category: "Акция",
      isHot: false,
      gradient: "from-orange-500 to-rose-500",
    },
    {
      id: 5,
      title: "Новые возможности в модуле Продвинутые ассистенты",
      excerpt: "Добавили уроки по созданию ассистентов для автоматизации консультаций и работы с клиентами.",
      date: "28 декабря 2025",
      dateObj: new Date(2025, 11, 28),
      time: "16:45",
      category: "Обновление",
      isHot: false,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Интервью: как Анастасия увеличила доход в 5 раз",
      excerpt: "История ученицы, которая внедрила ИИ в свою практику и вышла на новый уровень за 2 месяца.",
      date: "25 декабря 2025",
      dateObj: new Date(2025, 11, 25),
      time: "12:00",
      category: "История успеха",
      isHot: false,
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    return { daysInMonth, startingDayOfWeek };
  };

  const getNewsForDate = (day: number) => {
    return news.filter(item => {
      const newsDate = item.dateObj;
      return newsDate.getDate() === day && 
             newsDate.getMonth() === currentMonth.getMonth() && 
             newsDate.getFullYear() === currentMonth.getFullYear();
    });
  };

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
    "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
  const dayNames = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);
  const emptyDays = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
  
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-8 flex-wrap">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] rounded-2xl flex items-center justify-center shadow-lg">
            <Radio className="w-6 h-6 text-[#D4AF37]" />
          </div>
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">Новости</h1>
            <p className="text-gray-600">Последние обновления и анонсы</p>
          </div>
        </div>
        <button
          onClick={() => setShowCalendar(!showCalendar)}
          className="flex items-center gap-2 bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] text-white px-5 py-3 rounded-xl hover:shadow-lg transition-all"
        >
          <Calendar className="w-5 h-5" />
          <span className="font-semibold">Календарь событий</span>
        </button>
      </div>

      {/* Calendar Modal */}
      {showCalendar && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-3 md:p-4">
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl w-full max-w-[90vw] sm:max-w-xl md:max-w-2xl lg:max-w-3xl h-auto max-h-[90vh] flex flex-col">
            {/* Calendar Header */}
            <div className="bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] p-2.5 sm:p-3 md:p-4 rounded-t-2xl md:rounded-t-3xl flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#D4AF37]" />
                <h2 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-white">Календарь событий ИНТЕЛИНУМ</h2>
              </div>
              <button
                onClick={() => setShowCalendar(false)}
                className="w-7 h-7 sm:w-8 sm:h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </button>
            </div>

            {/* Calendar Content */}
            <div className="p-2 sm:p-2.5 md:p-3 lg:p-4 flex-1 min-h-0 flex flex-col">
              {/* Month Navigation */}
              <div className="flex items-center justify-between mb-1.5 sm:mb-2 md:mb-3">
                <button
                  onClick={previousMonth}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700" />
                </button>
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">
                  {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                </h3>
                <button
                  onClick={nextMonth}
                  className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors flex-shrink-0"
                >
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gray-700" />
                </button>
              </div>

              {/* Day names */}
              <div className="grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-1.5 mb-0.5 sm:mb-1">
                {dayNames.map((day) => (
                  <div key={day} className="text-center text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-500 py-0.5">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid - уменьшенные квадратики */}
              <div className="grid grid-cols-7 gap-0.5 sm:gap-1 md:gap-1.5">
                {Array.from({ length: emptyDays }).map((_, i) => (
                  <div key={`empty-${i}`} className="w-full h-8 sm:h-10 md:h-12 lg:h-14" />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const dayNews = getNewsForDate(day);
                  const hasEvents = dayNews.length > 0;
                  const isToday = new Date().getDate() === day && 
                                  new Date().getMonth() === currentMonth.getMonth() && 
                                  new Date().getFullYear() === currentMonth.getFullYear();

                  // Определяем цвет квадратика по категории первого события
                  let eventColor = '';
                  if (hasEvents) {
                    const firstEvent = dayNews[0];
                    if (firstEvent.category === 'Новый курс') {
                      eventColor = 'bg-purple-500 text-white font-bold hover:bg-purple-600';
                    } else if (firstEvent.category === 'Обновление') {
                      eventColor = 'bg-blue-500 text-white font-bold hover:bg-blue-600';
                    } else if (firstEvent.category === 'Событие') {
                      eventColor = 'bg-emerald-500 text-white font-bold hover:bg-emerald-600';
                    } else if (firstEvent.category === 'Акция') {
                      eventColor = 'bg-orange-500 text-white font-bold hover:bg-orange-600';
                    } else if (firstEvent.category === 'История успеха') {
                      eventColor = 'bg-pink-500 text-white font-bold hover:bg-pink-600';
                    }
                  }

                  return (
                    <div
                      key={day}
                      className="w-full h-8 sm:h-10 md:h-12 lg:h-14"
                    >
                      <div
                        className={`w-full h-full rounded-md flex items-center justify-center text-[9px] sm:text-[10px] md:text-xs lg:text-sm transition-all group cursor-pointer relative
                          ${isToday ? 'bg-gradient-to-br from-[#D4AF37] to-[#B8941F] text-white font-bold shadow-lg' : 
                          hasEvents ? eventColor : 
                          'bg-gray-50 hover:bg-gray-100 text-gray-700'}`}
                      >
                        <span>
                          {day}
                        </span>
                        
                        {/* Tooltip with events */}
                        {hasEvents && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 sm:w-48 md:w-56 bg-white rounded-xl shadow-2xl p-2 sm:p-2.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-10 border border-gray-200 pointer-events-none group-hover:pointer-events-auto">
                            <div className="space-y-1.5">
                              {dayNews.map((item) => (
                                <div
                                  key={item.id}
                                  className="text-left p-1.5 sm:p-2 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
                                  onClick={() => {
                                    setShowCalendar(false);
                                    handleReadMore(item.id);
                                  }}
                                >
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <div className={`w-1.5 h-1.5 rounded-full ${
                                      item.category === 'Новый курс' ? 'bg-purple-600' :
                                      item.category === 'Обновление' ? 'bg-blue-600' :
                                      item.category === 'Событие' ? 'bg-emerald-600' :
                                      item.category === 'Акция' ? 'bg-orange-600' :
                                      'bg-pink-600'
                                    }`} />
                                    <span className="text-[9px] sm:text-[10px] font-semibold text-gray-600">{item.category}</span>
                                  </div>
                                  <p className="text-[10px] sm:text-xs font-semibold text-gray-900 line-clamp-2">{item.title}</p>
                                  <p className="text-[9px] sm:text-[10px] text-gray-500 mt-0.5">{item.time}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Legend */}
            <div className="px-2.5 sm:px-3 md:px-4 lg:px-5 pb-2 sm:pb-2.5 md:pb-3 lg:pb-4 bg-gray-50 rounded-b-2xl md:rounded-b-3xl border-t border-gray-200 flex-shrink-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1.5 sm:gap-2 md:gap-2.5 pt-2 sm:pt-2.5 md:pt-3">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm bg-purple-500 flex-shrink-0" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-700 font-medium">Новый курс</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm bg-blue-500 flex-shrink-0" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-700 font-medium">Обновление</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm bg-emerald-500 flex-shrink-0" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-700 font-medium">Событие</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm bg-orange-500 flex-shrink-0" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-700 font-medium">Акция</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-1.5 col-span-2 sm:col-span-1">
                  <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-sm bg-pink-500 flex-shrink-0" />
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-gray-700 font-medium">История успеха</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hot News Banner */}
      {news.filter(n => n.isHot).slice(0, 1).map((hotNews) => (
        <div
          key={hotNews.id}
          className={`bg-gradient-to-br ${hotNews.gradient} rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-6 md:mb-8 shadow-2xl relative overflow-hidden`}
        >
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute top-4 right-4 md:top-6 md:right-6">
            <div className="flex items-center gap-1 md:gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full">
              <Zap className="w-3 h-3 md:w-4 md:h-4 text-white fill-white" />
              <span className="text-xs md:text-sm text-white font-bold">ГОРЯЧЕЕ</span>
            </div>
          </div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
              <span className="text-xs md:text-sm text-white font-medium">{hotNews.category}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              {hotNews.title}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl">
              {hotNews.excerpt}
            </p>
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <Clock className="w-4 h-4" />
                <span className="text-xs md:text-sm">{hotNews.date} • {hotNews.time}</span>
              </div>
            </div>
            <button className="w-full sm:w-auto bg-white text-purple-600 hover:bg-white/90 font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-xl inline-flex items-center justify-center gap-2 transition-all text-sm md:text-base" onClick={() => handleReadDetails(hotNews.id)}>
              Подробнее
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}

      {/* News List */}
      <div className="space-y-3 md:space-y-4">
        {news.map((item) => (
          <article
            key={item.id}
            className="group p-4 sm:p-5 md:p-6 bg-white rounded-xl md:rounded-2xl hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 md:gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-2 md:gap-3 flex-wrap">
                <div className="bg-purple-100 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full">
                  <span className="text-[10px] sm:text-xs font-semibold text-purple-700">
                    {item.category}
                  </span>
                </div>
                {item.isHot && (
                  <div className="flex items-center gap-1 bg-gradient-to-r from-orange-500 to-red-500 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full">
                    <Zap className="w-3 h-3 text-white fill-white" />
                    <span className="text-[10px] sm:text-xs font-bold text-white">HOT</span>
                  </div>
                )}
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="flex items-center gap-1.5 md:gap-2 text-gray-500 text-xs sm:text-sm whitespace-nowrap">
                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                  <span className="hidden sm:inline">{item.date}</span>
                  <span className="sm:hidden">{item.date.split(' ')[0]} {item.date.split(' ')[1]}</span>
                </div>
                <button
                  onClick={() => handleNewsLike(item.id)}
                  className="flex items-center gap-1.5 text-gray-500 hover:text-red-500 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 md:w-5 md:h-5 transition-all ${
                      newsLikes[item.id]?.isLiked ? "fill-red-500 text-red-500" : "text-red-500"
                    }`}
                    strokeWidth={2}
                  />
                  <span className="text-xs md:text-sm font-semibold text-gray-700">{newsLikes[item.id]?.count || 0}</span>
                </button>
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 flex-1">
                {item.excerpt}
              </p>

              <button className="text-purple-600 hover:text-purple-700 font-semibold inline-flex items-center gap-2 transition-colors text-sm md:text-base w-fit" onClick={() => handleReadMore(item.id)}>
                Читать далее
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <div className="mt-8 md:mt-12 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-pink-500/20 rounded-full blur-3xl" />
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2 md:mb-3">
              Подпишитесь на рассылку
            </h2>
            <p className="text-gray-300 text-base sm:text-lg">
              Получайте новости о курсах, акциях и полезные материалы первыми
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <input
              type="email"
              placeholder="Ваш email"
              className="px-4 md:px-6 py-3 md:py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 backdrop-blur-sm flex-1 sm:w-64 text-sm md:text-base"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:shadow-xl transition-all whitespace-nowrap text-sm md:text-base" onClick={handleSubscribe}>
              Подписаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}