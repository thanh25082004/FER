import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: 'sản phẩm 1' },
    { id: 2, name: 'sản phẩm 2' },
    { id: 3, name: 'sản phẩm 3' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleCheckboxChange = (event) => {
    const productId = parseInt(event.target.value, 10);
    if (event.target.checked) {
      setSelectedProducts([...selectedProducts, productId]);
    } else {
      setSelectedProducts(selectedProducts.filter(id => id !== productId));
    }
  };

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <input
            type="checkbox"
            id={product.id}
            value={product.id}
            checked={selectedProducts.includes(product.id)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={product.id}>{product.name}</label>
        </div>
      ))}

      {selectedProducts.length > 0 && (
        <p>Bạn đã chọn các sản phẩm: {selectedProducts.map(id => products.find(p => p.id === id).name).join(', ')}</p>
      )}
    </div>
  );
}

export default ProductList;
