import React from 'react';
import Counter from './components/Counter';
import UserInfo from './components/UserInfo';
import ProductList from './components/ProductList';

function App() {
  return (
    <div style={{ maxWidth: '600px', 
      margin: 'auto',
     textAlign: 'center', 
     fontFamily: 'Arial, sans-serif' }}>
      <h1>React State Examples</h1>
      
     
      <section style={{ border: '1px solid #000000',
         padding: '20px', 
         borderRadius: '8px', 
         marginBottom: '20px' }}>
        <h2>Counter Example</h2>
        <Counter />
      </section>

    
      <section style={{ border: '1px solid #000000', 
        padding: '20px', 
        borderRadius: '8px', 
        marginBottom: '20px' }}>
        <h2>User Info Example</h2>
        <UserInfo />
      </section>

      <section style={{ border: '1px solid #000000', 
        padding: '20px', 
        borderRadius: '8px' }}>
        <h2>Product Selection Example</h2>
        <ProductList />
      </section>
    </div>
  );
}

export default App;
