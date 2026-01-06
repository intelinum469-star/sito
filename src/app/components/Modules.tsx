import { Video, Image, Globe, Users } from "lucide-react";
import { ModuleCard } from "./ModuleCard";

export function Modules() {
  const modules = [
    {
      id: 'module-video',
      title: "Магия Видео: Reels и ролики без стеснения",
      description: "Как снимать себя, если страшно. Как ИИ пишет сценарии за минуту. Как наложить субтитры и сделать красиво.",
      forWhom: "Для тех, кто хочет в TikTok/Reels, но не знает, о чем говорить и как монтировать.",
      icon: Video,
      gradient: "from-[#5DBEBD] to-[#4AA9A8]",
      isRecommended: false,
      price: 5000,
      badge: "ХИТ",
    },
    {
      id: 'module-visual',
      title: "Визуальная упаковка: Твой стиль без фотографа",
      description: "Создание метафорических карт, оформление постов, генерация уникальных изображений.",
      forWhom: "Для тех, кто стесняется своих фото или не хочет тратить деньги на фотосессии.",
      icon: Image,
      gradient: "from-[#8B5BB5] to-[#6B3A91]",
      isRecommended: false,
      price: 5000,
      badge: "ТОП",
    },
    {
      id: 'module-website',
      title: "Сайт и упаковка: личный бренд за выходные",
      description: "Как собрать одностраничник на Tilda за час. Где брать тексты и графику. Как презентовать свои услуги.",
      forWhom: "Для тех, кто хочет красиво выглядеть в интернете, но не хочет платить дизайнерам.",
      icon: Globe,
      gradient: "from-[#D4AF37] to-[#C9A961]",
      isRecommended: true,
      price: 5000,
      badge: "НОВИНКА",
    },
    {
      id: 'module-assistants',
      title: "Продвинутые ассистенты: делегируй все",
      description: "Создание ассистентов для консультаций, расчета натальной карты, подбора практик.",
      forWhom: "Для тех, кто готов автоматизировать рутину и освободить время для творчества.",
      icon: Users,
      gradient: "from-[#4A1C6F] to-[#8B5BB5]",
      isRecommended: true,
      price: 5000,
      badge: "ПОПУЛЯРНО",
    },
  ];

  return (
    <div>
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
          Дополнительные модули
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600">
          Выбери то, что нужно именно тебе
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {modules.map((module, index) => (
          <ModuleCard key={index} {...module} />
        ))}
      </div>
    </div>
  );
}