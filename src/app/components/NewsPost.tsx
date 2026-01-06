import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export function NewsPost() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Пример данных - вы замените это на реальные данные
  const post = {
    title: "Новость #" + id,
    date: "6 января 2026",
    category: "Обновление",
    content: `
      Это пример полной новости. Здесь будет ваш контент.
      
      Вы можете добавить любые детали, анонсы, описания и другую информацию.
      
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
        Назад к новостям
      </Button>

      <article className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="mb-6">
          <div className="inline-block bg-purple-100 px-4 py-2 rounded-full mb-4">
            <span className="text-sm font-semibold text-purple-700">{post.category}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="text-gray-600">
            {post.date}
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