import { Star, MessageCircle, Quote, Heart } from "lucide-react";
import { useState } from "react";

export function Reviews() {
  const [reviewLikes, setReviewLikes] = useState<Record<number, { count: number; isLiked: boolean }>>({
    1: { count: 45, isLiked: false },
    2: { count: 38, isLiked: false },
    3: { count: 52, isLiked: false },
    4: { count: 41, isLiked: false },
    5: { count: 36, isLiked: false },
    6: { count: 49, isLiked: false },
  });

  const handleReviewLike = (id: number) => {
    setReviewLikes(prev => ({
      ...prev,
      [id]: {
        count: prev[id].isLiked ? prev[id].count - 1 : prev[id].count + 1,
        isLiked: !prev[id].isLiked
      }
    }));
  };

  const handleStartLearning = () => {
    alert("Отлично! Начинаем обучение! 🎓");
  };

  const reviews = [
    {
      id: 1,
      name: "Анастасия Светлова",
      role: "Таролог",
      avatar: "bg-gradient-to-br from-purple-400 to-pink-400",
      rating: 5,
      text: "Базовый курс полностью изменил мой подход к работе! Теперь я создаю уникальные расклады для клиентов за минуты, а не часы. ChatGPT стал моим незаменимым помощником в написании текстов для соцсетей.",
      date: "15 января 2026",
    },
    {
      id: 2,
      name: "Марина Лунная",
      role: "Астролог",
      avatar: "bg-gradient-to-br from-blue-400 to-cyan-400",
      rating: 5,
      text: "Модуль по визуальной упаковке - это просто магия! Я создала целую серию метафорических карт для своих консультаций. Клиенты в восторге от эстетики моего блога.",
      date: "10 января 2026",
    },
    {
      id: 3,
      name: "Ольга Кристалл",
      role: "Нумеролог",
      avatar: "bg-gradient-to-br from-emerald-400 to-teal-400",
      rating: 5,
      text: "Боялась технологий, но Милена объясняет так, что понятно даже мне. Теперь у меня есть свой сайт, который я сделала сама за один вечер! Спасибо за простоту и поддержку.",
      date: "5 января 2026",
    },
    {
      id: 4,
      name: "Виктория Звездная",
      role: "Коуч по женским практикам",
      avatar: "bg-gradient-to-br from-rose-400 to-pink-400",
      rating: 5,
      text: "Модуль по видео-контенту помог мне преодолеть страх камеры. Теперь я снимаю Reels каждый день, и подписчики растут! ИИ пишет за меня сценарии, и это экономит часы времени.",
      date: "28 декабря 2025",
    },
    {
      id: 5,
      name: "Елена Луч",
      role: "Регрессолог",
      avatar: "bg-gradient-to-br from-indigo-400 to-purple-400",
      rating: 5,
      text: "Продвинутые ассистенты - это следующий уровень! Создала себе методолога, который помогает структурировать мои курсы. Теперь могу создавать обучающие программы в 10 раз быстрее.",
      date: "20 декабря 2025",
    },
    {
      id: 6,
      name: "Дарья Солнечная",
      role: "Ведущая медитаций",
      avatar: "bg-gradient-to-br from-orange-400 to-amber-400",
      rating: 5,
      text: "Не ожидала, что ИИ может быть таким помощником в духовной работе. Генерирую визуализации для медитаций, создаю аудио-описания. Это не заменяет душу, но освобождает время для главного.",
      date: "12 декабря 2025",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900">Отзывы</h1>
          <p className="text-gray-600">Что говорят наши ученики</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-8 md:mb-12">
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-purple-100">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            500+
          </div>
          <div className="text-sm md:text-base text-gray-600">Учеников прошли курсы</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-purple-100">
          <div className="flex items-center gap-2 mb-2">
            <Star className="w-6 h-6 md:w-8 md:h-8 fill-yellow-400 text-yellow-400" />
            <span className="text-3xl md:text-4xl font-bold text-gray-900">4.9</span>
          </div>
          <div className="text-sm md:text-base text-gray-600">Средняя оценка курсов</div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-5 md:p-6 border border-purple-100">
          <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
            98%
          </div>
          <div className="text-sm md:text-base text-gray-600">Рекомендуют друзьям</div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
          >
            {/* Quote Icon */}
            <div className="absolute -bottom-4 -right-4 opacity-5">
              <Quote className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-purple-500" />
            </div>

            {/* Header */}
            <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4 relative z-10">
              <div
                className={`w-12 h-12 md:w-14 md:h-14 ${review.avatar} rounded-full flex items-center justify-center`}
              >
                <span className="text-white text-lg md:text-xl font-bold">
                  {review.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm md:text-base">{review.name}</h3>
                <p className="text-xs md:text-sm text-gray-500">{review.role}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex gap-1 mb-3 md:mb-4 relative z-10">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Review Text */}
            <p className="text-gray-700 leading-relaxed mb-3 md:mb-4 relative z-10 text-sm md:text-base">{review.text}</p>

            {/* Footer */}
            <div className="flex items-center justify-between relative z-10">
              <p className="text-xs md:text-sm text-gray-400">{review.date}</p>
              
              {/* Like Button */}
              <button
                onClick={() => handleReviewLike(review.id)}
                className="flex items-center gap-1.5 hover:text-red-500 transition-colors"
              >
                <Heart
                  className={`w-4 h-4 md:w-5 md:h-5 transition-all ${
                    reviewLikes[review.id]?.isLiked ? "fill-red-500 text-red-500" : "text-red-500"
                  }`}
                />
                <span className="text-sm text-gray-500">{reviewLikes[review.id]?.count || 0}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 md:mt-12 bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Готовы присоединиться?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-2xl mx-auto px-4">
            Станьте частью сообщества эзотериков, которые используют силу ИИ для развития своего дела
          </p>
          <button className="w-full sm:w-auto bg-white text-purple-600 hover:bg-white/90 font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl shadow-xl transition-all text-sm md:text-base" onClick={handleStartLearning}>
            Начать обучение
          </button>
        </div>
      </div>
    </div>
  );
}