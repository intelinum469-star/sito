import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { Sidebar } from "./components/Sidebar";
import { BaseCourse } from "./components/BaseCourse";
import { Modules } from "./components/Modules";
import { Cart } from "./components/Cart";
import { Blog } from "./components/Blog";
import { Reviews } from "./components/Reviews";
import { News } from "./components/News";
import { Admin } from "./components/Admin";
import { Home } from "./components/Home";
import { Courses } from "./components/Courses";
import { BlogPost } from "./components/BlogPost";
import { NewsPost } from "./components/NewsPost";
import { ModuleDetail } from "./components/ModuleDetail";
import { CourseDetail } from "./components/CourseDetail";
import { DigitalProducts } from "./components/DigitalProducts";
import { DigitalProductDetail } from "./components/DigitalProductDetail";
import { Lessons } from "./components/Lessons";
import { LessonDetail } from "./components/LessonDetail";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex relative">
          {/* Ethereal Background - Fixed and Simplified */}
          <div className="fixed inset-0 bg-gradient-to-br from-[#F5F1E8] via-[#FAF8F3] to-[#EDE8DC] z-0">
            {/* Soft gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#E8DCC8]/20 via-transparent to-[#F5EFE0]/10" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/3 via-transparent to-[#8B5BB5]/3" />
            
            {/* Large soft bokeh circles - static */}
            <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-40 left-32 w-80 h-80 bg-[#8B5BB5]/6 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#5DBEBD]/6 rounded-full blur-3xl" />
            
            {/* Subtle sparkle particles - reduced */}
            <div className="absolute inset-0 overflow-hidden opacity-40">
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute rounded-full bg-[#D4AF37] animate-pulse"
                  style={{
                    width: Math.random() * 3 + 1 + 'px',
                    height: Math.random() * 3 + 1 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    opacity: Math.random() * 0.4 + 0.1,
                    animationDuration: Math.random() * 4 + 3 + 's',
                    animationDelay: Math.random() * 5 + 's',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex w-full">
            <Sidebar
              activeSection={activeSection}
              onSectionChange={setActiveSection}
              isOpen={isSidebarOpen}
              onToggle={toggleSidebar}
            />

            <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/module/:id" element={<ModuleDetail />} />
                <Route path="/course/base-course" element={<CourseDetail />} />
                <Route path="/news" element={<News />} />
                <Route path="/news/:id" element={<NewsPost />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/digital-products" element={<DigitalProducts />} />
                <Route path="/product/:id" element={<DigitalProductDetail />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="/lesson/:id" element={<LessonDetail />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}