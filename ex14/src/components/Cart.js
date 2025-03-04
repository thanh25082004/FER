import React, { useState } from "react";
import { useCart } from "./CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Giỏ hàng trống!");
      return;
    }
    setOrderConfirmed(true);
    setTimeout(() => {
      clearCart();
      setOrderConfirmed(false);
    }, 2000);
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
                <button onClick={() => removeFromCart(index)}>Xóa</button>
              </li>
            ))}
          </ul>
          <p><strong>Tổng số món:</strong> {cart.length}</p>
          <p><strong>Tổng giá trị:</strong> ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
          <button className="checkout-btn" onClick={handleCheckout}>Xác nhận đơn hàng</button>
        </>
      )}

      {orderConfirmed && <p className="success-message">Thanh toán thành công! Cảm ơn bạn!</p>}
    </div>
  );
};

export default Cart;
