import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function BlogPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Пример данных - вы замените это на реальные данные
  const post = {
    title: "Полная статья #" + id,
    date: "6 января 2026",
    author: "ИНТЕЛИНУМ",
    content: `
      Это пример полной статьи. Здесь будет ваш контент.
      
      Вы можете добавить любой текст, изображения, видео и другой контент.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    `,
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        className="mb-6"
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Назад к блогу
      </Button>

      <article className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span>{post.date}</span>
            <span>•</span>
            <span>Автор: {post.author}</span>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
}