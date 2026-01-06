import { useState } from "react";
import { X, Upload, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  data?: any;
  activeTab: "courses" | "modules" | "news" | "blog" | "reviews";
  setCourses: (courses: any) => void;
  setModules: (modules: any) => void;
  setNews: (news: any) => void;
  setBlog: (blog: any) => void;
  setReviews: (reviews: any) => void;
}

export function AdminModal({ 
  isOpen, 
  onClose, 
  mode, 
  data, 
  activeTab,
  setCourses,
  setModules,
  setNews,
  setBlog,
  setReviews
}: AdminModalProps) {
  const [formData, setFormData] = useState(data || {});
  const [features, setFeatures] = useState<string[]>(data?.features || []);
  const [newFeature, setNewFeature] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const dataToSave = activeTab === "courses" ? { ...formData, features } : formData;
    
    // Generate ID for new items
    if (mode === "add") {
      dataToSave.id = Date.now();
    }
    
    // Save data based on active tab
    if (activeTab === "courses") {
      setCourses((prev: any[]) => mode === "add" ? [...prev, dataToSave] : prev.map((c: any) => c.id === dataToSave.id ? dataToSave : c));
    } else if (activeTab === "modules") {
      setModules((prev: any[]) => mode === "add" ? [...prev, dataToSave] : prev.map((m: any) => m.id === dataToSave.id ? dataToSave : m));
    } else if (activeTab === "news") {
      setNews((prev: any[]) => mode === "add" ? [...prev, dataToSave] : prev.map((n: any) => n.id === dataToSave.id ? dataToSave : n));
    } else if (activeTab === "blog") {
      setBlog((prev: any[]) => mode === "add" ? [...prev, dataToSave] : prev.map((b: any) => b.id === dataToSave.id ? dataToSave : b));
    } else if (activeTab === "reviews") {
      setReviews((prev: any[]) => mode === "add" ? [...prev, dataToSave] : prev.map((r: any) => r.id === dataToSave.id ? dataToSave : r));
    }
    
    onClose();
  };

  const addFeature = () => {
    if (newFeature.trim()) {
      setFeatures([...features, newFeature.trim()]);
      setNewFeature("");
    }
  };

  const removeFeature = (index: number) => {
    setFeatures(features.filter((_, i) => i !== index));
  };

  const getModalTitle = () => {
    const action = mode === "add" ? "Добавить" : "Редактировать";
    const itemType = activeTab === "courses" ? "курс" : 
                     activeTab === "modules" ? "модуль" : 
                     activeTab === "news" ? "новость" : 
                     activeTab === "blog" ? "пост" : "отзыв";
    return `${action} ${itemType}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">
            {getModalTitle()}
          </h2>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-xl flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6">
          {/* Course Form */}
          {activeTab === "courses" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Название курса</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Базовый курс Нейросети: Твой старт"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Подзаголовок</label>
                <input
                  type="text"
                  value={formData.subtitle || ""}
                  onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Фундамент"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Описание</label>
                <textarea
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-24"
                  placeholder="Самое необходимое, чтобы перестать бояться и начать делать"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Что внутри (функции)</label>
                <div className="space-y-2 mb-2">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 bg-purple-50 p-3 rounded-lg">
                      <span className="flex-1 text-sm text-gray-700">{feature}</span>
                      <button
                        type="button"
                        onClick={() => removeFeature(index)}
                        className="p-1 hover:bg-red-100 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newFeature}
                    onChange={(e) => setNewFeature(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Добавить функцию"
                  />
                  <button
                    type="button"
                    onClick={addFeature}
                    className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Результат</label>
                <textarea
                  value={formData.result || ""}
                  onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-20"
                  placeholder="Ты больше не боишься нажать не ту кнопку..."
                  required
                />
              </div>
            </div>
          )}

          {/* Module Form */}
          {activeTab === "modules" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Название модуля</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Магия Видео: Reels и ролики без стеснения"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">О чем (описание)</label>
                <textarea
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-24"
                  placeholder="Как снимать себя, если страшно..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Для кого</label>
                <textarea
                  value={formData.forWhom || ""}
                  onChange={(e) => setFormData({ ...formData, forWhom: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-20"
                  placeholder="Для тех, кто хочет в TikTok/Reels..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Иконка</label>
                <select
                  value={formData.icon || "Video"}
                  onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="Video">Video</option>
                  <option value="Image">Image</option>
                  <option value="Globe">Globe</option>
                  <option value="Users">Users</option>
                  <option value="Sparkles">Sparkles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Градиент</label>
                <select
                  value={formData.gradient || "from-blue-500 to-cyan-500"}
                  onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="from-blue-500 to-cyan-500">Синий → Голубой</option>
                  <option value="from-pink-500 to-rose-500">Розовый → Красный</option>
                  <option value="from-emerald-500 to-teal-500">Изумрудный → Бирюзовый</option>
                  <option value="from-purple-500 to-indigo-500">Фиолетовый → Индиго</option>
                  <option value="from-orange-500 to-rose-500">Оранжевый → Розовый</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isRecommended"
                  checked={formData.isRecommended || false}
                  onChange={(e) => setFormData({ ...formData, isRecommended: e.target.checked })}
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="isRecommended" className="text-sm font-semibold text-gray-700">
                  Рекомендуется после базового курса
                </label>
              </div>
            </div>
          )}

          {/* News Form */}
          {activeTab === "news" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Заголовок</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Запуск нового модуля..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Описание</label>
                <textarea
                  value={formData.excerpt || ""}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-24"
                  placeholder="Представляем революционный инструмент..."
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Дата</label>
                  <input
                    type="text"
                    value={formData.date || ""}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="6 января 2026"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Время</label>
                  <input
                    type="text"
                    value={formData.time || ""}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="14:30"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Категория</label>
                <input
                  type="text"
                  value={formData.category || ""}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Новый курс"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Градиент</label>
                <select
                  value={formData.gradient || "from-purple-500 to-pink-500"}
                  onChange={(e) => setFormData({ ...formData, gradient: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="from-purple-500 to-pink-500">Фиолетовый → Розовый</option>
                  <option value="from-blue-500 to-cyan-500">Синий → Голубой</option>
                  <option value="from-emerald-500 to-teal-500">Изумрудный → Бирюзовый</option>
                  <option value="from-orange-500 to-rose-500">Оранжевый → Розовый</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="isHot"
                  checked={formData.isHot || false}
                  onChange={(e) => setFormData({ ...formData, isHot: e.target.checked })}
                  className="w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <label htmlFor="isHot" className="text-sm font-semibold text-gray-700">
                  Горячая новость (Hot)
                </label>
              </div>
            </div>
          )}

          {/* Blog Form */}
          {activeTab === "blog" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Заголовок</label>
                <input
                  type="text"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="5 способов использовать ChatGPT..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Описание</label>
                <textarea
                  value={formData.excerpt || ""}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-24"
                  placeholder="Практические советы..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Дата</label>
                <input
                  type="text"
                  value={formData.date || ""}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="5 января 2026"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Категория</label>
                <input
                  type="text"
                  value={formData.category || ""}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Практика"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Изображение (градиент)</label>
                <select
                  value={formData.image || "bg-gradient-to-br from-purple-400 to-pink-400"}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="bg-gradient-to-br from-purple-400 to-pink-400">Фиолетовый → Розовый</option>
                  <option value="bg-gradient-to-br from-blue-400 to-cyan-400">Синий → Голубой</option>
                  <option value="bg-gradient-to-br from-emerald-400 to-teal-400">Изумрудный → Бирюзовый</option>
                  <option value="bg-gradient-to-br from-orange-400 to-amber-400">Оранжевый → Янтарный</option>
                </select>
              </div>
            </div>
          )}

          {/* Review Form */}
          {activeTab === "reviews" && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Имя</label>
                <input
                  type="text"
                  value={formData.name || ""}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Анастасия Светлова"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Роль/Профессия</label>
                <input
                  type="text"
                  value={formData.role || ""}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Таролог"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Аватар (градиент)</label>
                <select
                  value={formData.avatar || "from-purple-400 to-pink-400"}
                  onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="from-purple-400 to-pink-400">Фиолетовый → Розовый</option>
                  <option value="from-blue-400 to-cyan-400">Синий → Голубой</option>
                  <option value="from-emerald-400 to-teal-400">Изумрудный → Бирюзовый</option>
                  <option value="from-rose-400 to-pink-400">Красный → Розовый</option>
                  <option value="from-indigo-400 to-purple-400">Индиго → Фиолетовый</option>
                  <option value="from-orange-400 to-amber-400">Оранжевый → Янтарный</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Рейтинг</label>
                <select
                  value={formData.rating || 5}
                  onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <option value="5">5 звёзд</option>
                  <option value="4">4 звезды</option>
                  <option value="3">3 звезды</option>
                  <option value="2">2 звезды</option>
                  <option value="1">1 звезда</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Текст отзыва</label>
                <textarea
                  value={formData.text || ""}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-32"
                  placeholder="Базовый курс полностью изменил мой подход к работе!..."
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Дата</label>
                <input
                  type="text"
                  value={formData.date || ""}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="15 января 2026"
                  required
                />
              </div>
            </div>
          )}

          {/* Upload Image Section (for all types) */}
          <div className="mt-6 p-4 border-2 border-dashed border-purple-300 rounded-xl bg-purple-50/50">
            <div className="flex items-center gap-3 text-purple-600">
              <Upload className="w-5 h-5" />
              <div>
                <p className="text-sm font-semibold">Загрузить изображение</p>
                <p className="text-xs text-gray-500">PNG, JPG до 10MB</p>
              </div>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1 border-gray-300 hover:bg-gray-50"
            >
              Отмена
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
            >
              {mode === "add" ? "Добавить" : "Сохранить"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}