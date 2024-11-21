//
// Elvira Ericsson
// FE23
//
// ProductList
// Visar listan med produkter och hanterar interaktioner som att öppna modal popup med mer information eller lägga till i varukorgen
//
// State
// selectedProduct -  den produkt som användaren vill veta mer info om
// isModalOpen - styr om popup-fönstret är öppet eller stängt
//
// Funktioner
// openModal - öppnar popupen med mer info
// closeModal - stänger popupen med mer info
//
// Render
// En lista med produkter där varje produkt har en bild, namn, pris och knappar för att visa mer info eller lägga till i varukorgen
// Popup-komponenten 'Popup' visar mer info om en produkt
import React, {useState} from 'react';
import Popup from './Popup.jsx';

export default function ProductList ({products, addToCart}) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };

    return (
        <div id="productList">
            <h3>Trollstavar</h3>
            <ul style={{
                listStyleType: 'none',
                paddingLeft: '0'
                }}>
                {products.map(product => (
                    <li key={product.productNumber} style={{
                        display: 'flex',
                        justifyContent: 'space-between', 
                        marginBottom: '10px', 
                        padding: '20px',
                        backgroundColor: '#efefef',
                        borderRadius: '5px',
                        width: '600px'
                        }}>
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'row', 
                            gap: '20px'
                            }}>
                            <div>
                                <img src={product.imageURL} alt={product.name} style={{
                                    width: "150px",
                                    borderRadius: '5px'
                                    }}/>
                            </div>
                            <div style={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                justifyContent: 'space-between'
                                }}>
                                <h4 style={{margin: '0'}}>{product.name}</h4>
                                <button onClick={() => openModal(product)} style={{
                                    width: '130px',
                                    padding: "5px 10px",
                                    border: "none",
                                    backgroundColor: "lightgrey",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                    }}>Visa mer info</button>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex', 
                            flexDirection: 'column', 
                            justifyContent: 'space-between'
                            }}>
                            <p style={{margin: '0'}}>Pris: {product.price} SEK</p>
                            <button onClick={() => addToCart(product)} style={{
                                width: '130px',
                                padding: "5px 10px",
                                border: "none",
                                backgroundColor: "#007BFF",
                                color: 'white',
                                borderRadius: "5px",
                                cursor: "pointer",
                                }}>Lägg till</button>
                        </div>
                    </li>
                ))}
            </ul>
            <Popup
                isOpen={isModalOpen}
                onClose={closeModal}
                product={selectedProduct}
            />
        </div>
    );
}