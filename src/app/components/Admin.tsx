import { useState } from "react";
import { Settings, Plus, Trash2, Edit, Save, X, Upload } from "lucide-react";
import { Button } from "./ui/button";
import { AdminModal } from "./AdminModal";

type TabType = "courses" | "modules" | "news" | "blog" | "reviews";

interface Course {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  result: string;
}

interface Module {
  id: number;
  title: string;
  description: string;
  forWhom: string;
  icon: string;
  gradient: string;
  isRecommended: boolean;
}

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  time: string;
  category: string;
  isHot: boolean;
  gradient: string;
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface Review {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export function Admin() {
  const [activeTab, setActiveTab] = useState<TabType>("courses");
  const [editingId, setEditingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"add" | "edit">("add");
  const [editingData, setEditingData] = useState<any>(null);

  // Sample data
  const [courses, setCourses] = useState<Course[]>([
    {
      id: 1,
      title: "Базовый курс \"Нейросети: Твой старт\"",
      subtitle: "Фундамент",
      description: "Самое необходимое, чтобы перестать бояться и начать делать",
      features: [
        "Регистрация и настройка (обходим блокировки, включаем VPN)",
        "Основы общения с ChatGPT: как задавать вопросы",
        "Твой первый Ассистент: настраиваем помощника под твой стиль",
      ],
      result: "Ты больше не боишься нажать \"не ту кнопку\". У тебя есть личный помощник, который пишет простые тексты.",
    },
  ]);

  const [modules, setModules] = useState<Module[]>([
    {
      id: 1,
      title: "Магия Видео: Reels и ролики без стеснения",
      description: "Как снимать себя, если страшно. Как ИИ пишет сценарии за минуту. Как наложить субтитры и сделать красиво.",
      forWhom: "Для тех, кто хочет в TikTok/Reels, но не знает, о чем говорить и как монтировать.",
      icon: "Video",
      gradient: "from-blue-500 to-cyan-500",
      isRecommended: false,
    },
    {
      id: 2,
      title: "Визуальная упаковка: Твой стиль без фотографа",
      description: "Создание метафорических карт, оформление постов, генерация уникальных изображений.",
      forWhom: "Для тех, кто стесняется своих фото или не хочет тратить деньги на фотосессии.",
      icon: "Image",
      gradient: "from-pink-500 to-rose-500",
      isRecommended: false,
    },
  ]);

  const [news, setNews] = useState<NewsItem[]>([
    {
      id: 1,
      title: "Запуск нового модуля: ИИ для создания медитаций",
      excerpt: "Представляем революционный инструмент для генерации персонализированных медитативных практик.",
      date: "6 января 2026",
      time: "14:30",
      category: "Новый курс",
      isHot: true,
      gradient: "from-purple-500 to-pink-500",
    },
  ]);

  const [blog, setBlog] = useState<BlogPost[]>([
    {
      id: 1,
      title: "5 способов использовать ChatGPT в работе таролога",
      excerpt: "Практические советы, как нейросети помогают в составлении раскладов и интерпретации карт.",
      date: "5 января 2026",
      category: "Практика",
      image: "bg-gradient-to-br from-purple-400 to-pink-400",
    },
  ]);

  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      name: "Анастасия Светлова",
      role: "Таролог",
      avatar: "from-purple-400 to-pink-400",
      rating: 5,
      text: "Базовый курс полностью изменил мой подход к работе!",
      date: "15 января 2026",
    },
  ]);

  const tabs = [
    { id: "courses" as TabType, label: "Курсы", count: courses.length },
    { id: "modules" as TabType, label: "Модули", count: modules.length },
    { id: "news" as TabType, label: "Новости", count: news.length },
    { id: "blog" as TabType, label: "Блог", count: blog.length },
    { id: "reviews" as TabType, label: "Отзывы", count: reviews.length },
  ];

  const handleDelete = (id: number) => {
    if (!confirm('Вы уверены, что хотите удалить этот элемент?')) return;
    
    if (activeTab === "courses") setCourses(courses.filter(c => c.id !== id));
    if (activeTab === "modules") setModules(modules.filter(m => m.id !== id));
    if (activeTab === "news") setNews(news.filter(n => n.id !== id));
    if (activeTab === "blog") setBlog(blog.filter(b => b.id !== id));
    if (activeTab === "reviews") setReviews(reviews.filter(r => r.id !== id));
  };

  const handleEdit = (item: any) => {
    setEditingData(item);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setEditingData(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 md:mb-8 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
            <Settings className="w-6 h-6 md:w-7 md:h-7 text-white" />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">Админ-панель</h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">Управление контентом ИНТЕЛИНУМ</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6 md:mb-8 overflow-x-auto pb-2 scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-xl font-semibold transition-all whitespace-nowrap text-sm md:text-base ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-purple-50 border border-gray-200"
            }`}
          >
            {tab.label}
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              activeTab === tab.id ? "bg-white/20" : "bg-purple-100 text-purple-600"
            }`}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Add Button */}
      <div className="mb-4 md:mb-6">
        <Button 
          onClick={handleAdd}
          className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-xl shadow-lg text-sm md:text-base py-5 md:py-6 px-4 md:px-6"
        >
          <Plus className="w-4 h-4 md:w-5 md:h-5 mr-2" />
          Добавить {activeTab === "courses" ? "курс" : activeTab === "modules" ? "модуль" : activeTab === "news" ? "новость" : activeTab === "blog" ? "пост" : "отзыв"}
        </Button>
      </div>

      {/* Content Tables */}
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {/* Courses Table */}
        {activeTab === "courses" && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px]">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                <tr>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-purple-900">ID</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-purple-900">Название</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-purple-900">Описание</th>
                  <th className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-left text-xs sm:text-sm font-semibold text-purple-900">Действия</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((course) => (
                  <tr key={course.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm md:text-base text-gray-900 font-medium">{course.id}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base">{course.title}</div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-gray-500">{course.subtitle}</div>
                    </td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4 text-xs sm:text-sm md:text-base text-gray-600 max-w-md truncate">{course.description}</td>
                    <td className="px-3 sm:px-4 md:px-6 py-3 md:py-4">
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleEdit(course)}
                          className="p-2 hover:bg-purple-100 rounded-lg transition-colors"
                        >
                          <Edit className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                        </button>
                        <button onClick={() => handleDelete(course.id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Modules Table */}
        {activeTab === "modules" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">ID</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Название</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Для кого</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Рекомендуется</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Действия</th>
                </tr>
              </thead>
              <tbody>
                {modules.map((module) => (
                  <tr key={module.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{module.id}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="font-semibold text-gray-900 text-sm md:text-base">{module.title}</div>
                      <div className="text-xs md:text-sm text-gray-500 max-w-md truncate">{module.description}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600 max-w-xs truncate">{module.forWhom}</td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        module.isRecommended ? "bg-purple-100 text-purple-700" : "bg-gray-100 text-gray-600"
                      }`}>
                        {module.isRecommended ? "Да" : "Нет"}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" onClick={() => handleEdit(module)}>
                          <Edit className="w-4 h-4 text-purple-600" />
                        </button>
                        <button onClick={() => handleDelete(module.id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* News Table */}
        {activeTab === "news" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">ID</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Заголовок</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Категория</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Дата</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Hot</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Действия</th>
                </tr>
              </thead>
              <tbody>
                {news.map((item) => (
                  <tr key={item.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{item.id}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="font-semibold text-gray-900 text-sm md:text-base max-w-md truncate">{item.title}</div>
                      <div className="text-xs md:text-sm text-gray-500 max-w-md truncate">{item.excerpt}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {item.category}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600 whitespace-nowrap">{item.date}</td>
                    <td className="px-4 md:px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        item.isHot ? "bg-orange-100 text-orange-700" : "bg-gray-100 text-gray-600"
                      }`}>
                        {item.isHot ? "Да" : "Нет"}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" onClick={() => handleEdit(item)}>
                          <Edit className="w-4 h-4 text-purple-600" />
                        </button>
                        <button onClick={() => handleDelete(item.id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Blog Table */}
        {activeTab === "blog" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">ID</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Заголовок</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Категория</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Дата</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Действия</th>
                </tr>
              </thead>
              <tbody>
                {blog.map((post) => (
                  <tr key={post.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{post.id}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="font-semibold text-gray-900 text-sm md:text-base max-w-md truncate">{post.title}</div>
                      <div className="text-xs md:text-sm text-gray-500 max-w-md truncate">{post.excerpt}</div>
                    </td>
                    <td className="px-4 md:px-6 py-4">
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600 whitespace-nowrap">{post.date}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" onClick={() => handleEdit(post)}>
                          <Edit className="w-4 h-4 text-purple-600" />
                        </button>
                        <button onClick={() => handleDelete(post.id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Reviews Table */}
        {activeTab === "reviews" && (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100">
                <tr>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">ID</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Имя</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Роль</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Рейтинг</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Отзыв</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Дата</th>
                  <th className="px-4 md:px-6 py-4 text-left text-xs md:text-sm font-semibold text-purple-900">Действия</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id} className="border-b border-gray-100 hover:bg-purple-50/50 transition-colors">
                    <td className="px-4 md:px-6 py-4 text-sm text-gray-900 font-medium">{review.id}</td>
                    <td className="px-4 md:px-6 py-4 text-sm md:text-base font-semibold text-gray-900">{review.name}</td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600">{review.role}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500 font-semibold">{review.rating}</span>
                        <span className="text-yellow-500">★</span>
                      </div>
                    </td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600 max-w-xs truncate">{review.text}</td>
                    <td className="px-4 md:px-6 py-4 text-xs md:text-sm text-gray-600 whitespace-nowrap">{review.date}</td>
                    <td className="px-4 md:px-6 py-4">
                      <div className="flex gap-2">
                        <button className="p-2 hover:bg-purple-100 rounded-lg transition-colors" onClick={() => handleEdit(review)}>
                          <Edit className="w-4 h-4 text-purple-600" />
                        </button>
                        <button onClick={() => handleDelete(review.id)} className="p-2 hover:bg-red-100 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4 text-red-600" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Empty State */}
      {((activeTab === "courses" && courses.length === 0) ||
        (activeTab === "modules" && modules.length === 0) ||
        (activeTab === "news" && news.length === 0) ||
        (activeTab === "blog" && blog.length === 0) ||
        (activeTab === "reviews" && reviews.length === 0)) && (
        <div className="text-center py-16">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
            <Upload className="w-8 h-8 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Пока ничего нет</h3>
          <p className="text-gray-600 mb-6">Добавьте первый элемент, чтобы начать</p>
        </div>
      )}

      {/* Admin Modal */}
      {isModalOpen && (
        <AdminModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          mode={modalMode}
          data={editingData}
          activeTab={activeTab}
          setCourses={setCourses}
          setModules={setModules}
          setNews={setNews}
          setBlog={setBlog}
          setReviews={setReviews}
        />
      )}
    </div>
  );
}