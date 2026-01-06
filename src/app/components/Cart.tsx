import { ShoppingCart, Sparkles, Plus, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export function Cart() {
  const { items, removeItem, getTotal, getSubtotal, getDiscount, getDiscountPercent, hasBaseCourse, hasModules, getModulesCount } = useCart();
  const navigate = useNavigate();

  const hasBundle = hasBaseCourse() && hasModules();
  const subtotal = getSubtotal();
  const discount = getDiscount();
  const discountPercent = getDiscountPercent();
  const total = getTotal();
  const modulesCount = getModulesCount();

  const handleCheckout = () => {
    alert("Переход к оплате... 💳");
  };

  const handleBackToCourses = () => {
    navigate('/courses');
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU');
  };

  const getDiscountMessage = () => {
    if (hasBaseCourse() && modulesCount === 4) {
      return "Максимальная скидка! Базовый курс + все модули";
    } else if (hasBaseCourse() && modulesCount === 3) {
      return "Отличная скидка! Базовый курс + 3 модуля";
    } else if (hasBaseCourse() && modulesCount === 2) {
      return "Хорошая скидка! Базовый курс + 2 модуля";
    } else if (hasBaseCourse() && modulesCount >= 1) {
      return "При покупке Базового курса + любого модуля";
    }
    return "";
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-to-br from-[#8B5BB5] to-[#4A1C6F] rounded-2xl flex items-center justify-center">
          <ShoppingCart className="w-6 h-6 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900">Корзина</h1>
      </div>

      {items.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center shadow-lg">
          <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Корзина пуста
          </h2>
          <p className="text-gray-600 mb-6">
            Добавьте курсы или модули, чтобы начать обучение
          </p>
          <Button className="bg-gradient-to-r from-[#8B5BB5] to-[#4A1C6F] hover:from-[#4A1C6F] hover:to-[#8B5BB5] text-white" onClick={handleBackToCourses}>
            Вернуться к курсам
          </Button>
        </div>
      ) : (
        <>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`p-6 flex items-center justify-between ${
                  index !== items.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.type === 'course' ? 'Базовый курс' : 'Дополнительный модуль'}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-2xl font-bold text-gray-900">{formatPrice(item.price)} ₽</p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    title="Удалить из корзины"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bundle Discount */}
          {hasBundle && (
            <div className="bg-gradient-to-r from-[#8B5BB5]/10 to-[#D4AF37]/10 rounded-2xl p-6 mb-6 border border-[#D4AF37]/30">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="w-5 h-5 text-[#8B5BB5]" />
                <h3 className="font-bold text-[#4A1C6F]">Специальное предложение!</h3>
              </div>
              <p className="text-[#4A1C6F] mb-3">
                {getDiscountMessage()} — скидка {discountPercent}%
              </p>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg text-gray-500 line-through">{formatPrice(subtotal)} ₽</span>
                <span className="text-3xl font-bold text-[#4A1C6F]">{formatPrice(total)} ₽</span>
                <span className="bg-green-100 text-green-700 text-sm font-bold px-3 py-1 rounded">
                  Экономия {formatPrice(discount)} ₽
                </span>
              </div>
              
              {/* Progress to next discount */}
              {modulesCount < 4 && hasBaseCourse() && (
                <div className="mt-4 pt-4 border-t border-[#8B5BB5]/20">
                  <p className="text-sm text-gray-600 mb-2">
                    {modulesCount === 3 && "Добавь еще 1 модуль и получи скидку 25%!"}
                    {modulesCount === 2 && "Добавь еще 2 модуля и получи скидку 25%!"}
                    {modulesCount === 1 && "Добавь еще 3 модуля и получи скидку 25%!"}
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-[#8B5BB5] to-[#D4AF37] h-2 rounded-full transition-all"
                      style={{ width: `${(modulesCount / 4) * 100}%` }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Total */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-semibold text-gray-900">Итого:</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#8B5BB5] to-[#4A1C6F] bg-clip-text text-transparent">
                {formatPrice(total)} ₽
              </span>
            </div>
            <Button className="w-full bg-gradient-to-r from-[#8B5BB5] to-[#4A1C6F] hover:from-[#4A1C6F] hover:to-[#8B5BB5] text-white py-6 text-lg rounded-xl" onClick={handleCheckout}>
              Перейти к оплате
            </Button>
          </div>

          {/* Add More */}
          <div className="bg-gradient-to-r from-[#8B5BB5]/5 to-[#D4AF37]/5 rounded-2xl p-6 text-center border border-[#8B5BB5]/20">
            <Button
              variant="outline"
              className="border-[#8B5BB5] text-[#4A1C6F] hover:bg-[#8B5BB5]/10"
              onClick={handleBackToCourses}
            >
              <Plus className="w-4 h-4 mr-2" />
              Добавить еще модули
            </Button>
          </div>
        </>
      )}
    </div>
  );
}