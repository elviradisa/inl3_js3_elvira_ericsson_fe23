//
// Elvira Ericsson
// FE23
//
// App 
// Hanterar webshopens tillstånd och strukturen på alla komponenter
//
// State
// cartItems - lista över produkter samt antal som lagts till i varukorgen
// searchWord - representerar sökordet från sökfältet
//
// Funktioner
// handleSearch - uppdaterar sökord baserat på vad användaren skriver
// filterProducts - filtrerar produkter från JSON baserat på sökordet
// addToCart - lägger en produkt i varukorgen eller uppdaterar antal om produkten redan finns
// removeFromCart - tar bort en produkt från varukorgen eller minskar antak om där finns fler än 1
//
// Render
// Header - visar webshopens rubrik
// SearchBar - tar ett sökord och filtrerar produkter
// ProductList - visar filtrerade produkter samt ger möjlighet att lägga till produkter i varukorgen
// ProductCart - visar produkter i varukorgen samt ger nöjlighet att ta bort dom
//
import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProductList from './components/ProductList';
import ProductCart from './components/ProductCart';
import products from './json/products.json';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = (word) => {
    setSearchWord(word);
  }

  const filterProducts = products.filter((product) => 
    product.name.toLowerCase().includes(searchWord.toLowerCase())
  )

  const addToCart = (product) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find(
        (item) => item.product.productNumber === product.productNumber
      );
      if (existingItem) {
        return previousItems.map((item) => item.product.productNumber === product.productNumber ? {...item, quantity: item.quantity + 1} : item);
      } else {
        return [...previousItems, {product, quantity: 1}];
      }
    });
  }

  const removeFromCart = (productNumber) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.product.productNumber === productNumber);
      if (existingItem.quantity > 1) {
        return previousItems.map((item) => item.product.productNumber === productNumber ? {...item, quantity: item.quantity - 1} : item);
      } else {
        return previousItems.filter((item) => item.product.productNumber !== productNumber);
      }
    })
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      paddingLeft: '120px'
      }}>
      <div>
        <Header></Header>
        <div id='searchDisplay' style={{display: 'flex'}}>
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div id='productsContainer' style={{
        display: 'flex', 
        gap: '30px'
        }}>
        <ProductList products={filterProducts} addToCart={addToCart}></ProductList>
        <ProductCart cartItems={cartItems} removeFromCart={removeFromCart}></ProductCart>
      </div>
    </div>
  );
}

export default App;
