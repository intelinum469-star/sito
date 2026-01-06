import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface CartItem {
  id: string;
  title: string;
  price: number;
  type: 'course' | 'module' | 'digital' | 'lesson';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotal: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getDiscountPercent: () => number;
  hasBaseCourse: () => boolean;
  hasModules: () => boolean;
  getModulesCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (item: CartItem) => {
    setItems(prev => {
      // Check if item already exists
      if (prev.find(i => i.id === item.id)) {
        return prev;
      }
      return [...prev, item];
    });
  };

  const removeItem = (id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const getModulesCount = () => {
    return items.filter(item => item.type === 'module').length;
  };

  const getDiscountPercent = () => {
    const hasBase = items.some(item => item.type === 'course');
    const modulesCount = getModulesCount();
    
    // Base course + all 4 modules = 25% discount
    if (hasBase && modulesCount === 4) {
      return 25;
    }
    
    // Base course + 3 modules = 20% discount
    if (hasBase && modulesCount === 3) {
      return 20;
    }
    
    // Base course + 2 modules = 18% discount
    if (hasBase && modulesCount === 2) {
      return 18;
    }
    
    // Base course + 1 module = 15% discount
    if (hasBase && modulesCount >= 1) {
      return 15;
    }
    
    return 0;
  };

  const getDiscount = () => {
    const subtotal = getSubtotal();
    const discountPercent = getDiscountPercent();
    return Math.round(subtotal * (discountPercent / 100));
  };

  const getTotal = () => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    return subtotal - discount;
  };

  const hasBaseCourse = () => {
    return items.some(item => item.type === 'course');
  };

  const hasModules = () => {
    return items.some(item => item.type === 'module');
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        getTotal,
        getSubtotal,
        getDiscount,
        getDiscountPercent,
        hasBaseCourse,
        hasModules,
        getModulesCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}