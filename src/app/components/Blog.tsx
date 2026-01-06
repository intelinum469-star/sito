import { BookOpen, Heart, ArrowRight, Calendar } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Blog() {
  const navigate = useNavigate();
  const [blogLikes, setBlogLikes] = useState<Record<number, { count: number; isLiked: boolean }>>({
    1: { count: 124, isLiked: false },
    2: { count: 98, isLiked: false },
    3: { count: 76, isLiked: false },
    4: { count: 112, isLiked: false },
  });

  const handleBlogLike = (id: number) => {
    setBlogLikes(prev => ({
      ...prev,
      [id]: {
        count: prev[id].isLiked ? prev[id].count - 1 : prev[id].count + 1,
        isLiked: !prev[id].isLiked
      }
    }));
  };

  const handleReadFull = (id: number) => {
    navigate(`/blog/${id}`);
  };

  const handleReadMore = (id: number) => {
    navigate(`/blog/${id}`);
  };

  const blogPosts = [
    {
      id: 1,
      title: "Как ChatGPT может стать твоим духовным наставником",
      excerpt: "Исследуем, как искусственный интеллект помогает эзотерикам глубже понимать энергии клиентов и создавать персонализированные практики.",
      date: "28 декабря 2025",
      category: "Практики",
      image: "https://images.unsplash.com/photo-1603983616619-faf118d6c374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3Bpcml0dWFsJTIwd29tYW58ZW58MXx8fHwxNzY3NzI0ODIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 2,
      title: "5 способов использовать ИИ для создания метафорических карт",
      excerpt: "Пошаговое руководство по генерации уникальных изображений для таро, оракулов и авторских колод без нарушения авторских прав.",
      date: "15 декабря 2025",
      category: "Визуал",
      image: "https://images.unsplash.com/photo-1671013033034-5ea58e9c5008?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwbXlzdGljYWx8ZW58MXx8fHwxNzY3NjU5OTM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 3,
      title: "Автоматизация консультаций: этика и возможности",
      excerpt: "Можно ли доверить ИИ часть работы с клиентами? Разбираемся, где проходит граница между пмощью �� замещением человеческой интуиции.",
      date: "5 декабря 2025",
      category: "Этика",
      image: "https://images.unsplash.com/photo-1628860948883-05389e02adf6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwaGVhbGluZyUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3Njc2OTkzODd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      id: 4,
      title: "Как написать курс за выходные с помощью нейросетей",
      excerpt: "Личный опыт создания обучающих программ: от структуры до упаковки. Инструменты, которые экономят месяцы работы.",
      date: "22 ноября 2025",
      category: "Обучение",
      image: "https://images.unsplash.com/photo-1588912914078-2fe5224fd8b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBjb3Vyc2UlMjBsYXB0b3B8ZW58MXx8fHwxNzY3NzA0MTQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] rounded-2xl flex items-center justify-center shadow-lg">
          <BookOpen className="w-6 h-6 text-[#D4AF37]" />
        </div>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-[#4A1C6F] to-[#8B5BB5] bg-clip-text text-transparent">Блог</h1>
          <p className="text-gray-600">Полезные статьи о работе с ИИ в эзотерике</p>
        </div>
      </div>

      {/* Featured Post */}
      <div className="bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-12 mb-8 md:mb-12 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-3 md:mb-4">
            <span className="text-xs md:text-sm text-white font-medium">Новое</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {blogPosts[0].title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="flex items-center gap-2 text-white/80">
              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
              <span className="text-xs md:text-sm">{blogPosts[0].date}</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-2.5 py-1 md:px-3 md:py-1 rounded-full">
              <span className="text-xs md:text-sm text-white">{blogPosts[0].category}</span>
            </div>
          </div>
          <Button className="w-full sm:w-auto bg-white text-purple-600 hover:bg-white/90 font-semibold px-5 md:px-6 py-5 md:py-6 rounded-xl text-sm md:text-base" onClick={() => handleReadFull(blogPosts[0].id)}>
            Читать полностью
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {blogPosts.slice(1).map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col"
          >
            <div className="h-36 sm:h-40 md:h-48 relative overflow-hidden flex-shrink-0">
              <ImageWithFallback
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
              <div className="flex items-center justify-between gap-2 md:gap-3 mb-2 md:mb-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="bg-purple-100 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full">
                    <span className="text-[10px] sm:text-xs font-semibold text-purple-700">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Calendar className="w-3 h-3" />
                    <span className="text-[10px] sm:text-xs">{post.date}</span>
                  </div>
                </div>
                <button
                  onClick={() => handleBlogLike(post.id)}
                  className="flex items-center gap-1 hover:text-red-500 transition-colors"
                >
                  <Heart
                    className={`w-4 h-4 transition-all ${
                      blogLikes[post.id]?.isLiked ? "fill-red-500 text-red-500" : "text-red-500"
                    }`}
                  />
                  <span className="text-sm text-gray-500">{blogLikes[post.id]?.count || 0}</span>
                </button>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-3 md:mb-4 line-clamp-3 flex-1">
                {post.excerpt}
              </p>
              <Button
                variant="ghost"
                className="text-purple-600 hover:text-purple-700 p-0 h-auto font-semibold text-xs sm:text-sm w-fit mt-auto"
                onClick={() => handleReadMore(post.id)}
              >
                Читать далее
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-1" />
              </Button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}