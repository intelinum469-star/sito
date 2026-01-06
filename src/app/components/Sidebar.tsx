import { Home, BookOpen, ShoppingCart, Sparkles, Newspaper, MessageCircle, Radio, Menu, X, Settings, FileText, GraduationCap } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ activeSection, onSectionChange, isOpen, onToggle }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { id: "home", label: "Главная", icon: Home, path: "/" },
    { id: "courses", label: "Курсы", icon: BookOpen, path: "/courses" },
    { id: "lessons", label: "Уроки", icon: GraduationCap, path: "/lessons" },
    { id: "digital", label: "Готовые инструменты", icon: FileText, path: "/digital-products" },
    { id: "news", label: "Новости", icon: Radio, path: "/news" },
    { id: "blog", label: "Блог", icon: Newspaper, path: "/blog" },
    { id: "reviews", label: "Отзывы", icon: MessageCircle, path: "/reviews" },
    { id: "cart", label: "Корзина", icon: ShoppingCart, path: "/cart" },
  ];

  const handleMenuClick = (item: typeof menuItems[0]) => {
    navigate(item.path);
    onSectionChange(item.id);
    if (window.innerWidth < 1024) {
      onToggle();
    }
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/" || location.pathname === "/home";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden w-12 h-12 bg-gradient-to-br from-[#4A1C6F] to-[#8B5BB5] text-white rounded-xl shadow-2xl flex items-center justify-center border border-[#D4AF37]/30"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-0 left-0 h-screen w-72 bg-gradient-to-b from-[#4A1C6F] via-[#6B3A91] to-[#8B5BB5] text-white flex flex-col shadow-2xl border-r border-[#D4AF37]/20 z-40 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#5DBEBD]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full blur-3xl" />
        
        {/* Sparkle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse" />
          <div className="absolute top-40 right-12 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-100" />
          <div className="absolute bottom-32 left-16 w-1 h-1 bg-[#D4AF37] rounded-full animate-pulse delay-200" />
          <div className="absolute bottom-48 right-8 w-1 h-1 bg-[#5DBEBD] rounded-full animate-pulse delay-300" />
        </div>

        {/* Header */}
        <div className="p-6 border-b border-white/10 relative z-10">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] rounded-xl flex items-center justify-center shadow-lg">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-wide text-[#D4AF37]">ИНТЕЛИНУМ</h1>
              <p className="text-xs text-white/70">ИИ для Эзотериков</p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto relative z-10">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item)}
                className={`group relative flex items-center gap-4 w-full px-6 py-4 rounded-2xl transition-all duration-300 hover:bg-white/10 backdrop-blur-sm border-2 text-left ${ 
                  active
                    ? "bg-white/20 shadow-lg border-[#D4AF37]/50"
                    : "border-transparent hover:border-[#D4AF37]/30"
                }`}
              >
                {active && (
                  <div className="absolute inset-0 bg-white/10 animate-pulse" />
                )}
                <Icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-white" : "text-white/70 group-hover:text-white"}`} />
                <span className="font-medium text-left">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 relative z-10">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/50">
              © 2026 ИНТЕЛИНУМ
            </div>
            <button
              onClick={() => {
                navigate("/admin");
                onSectionChange("admin");
                if (window.innerWidth < 1024) {
                  onToggle();
                }
              }}
              className="w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-lg transition-all border border-white/20"
            >
              <Settings className="w-4 h-4 text-white/70 hover:text-white" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}