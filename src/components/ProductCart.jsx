//
// Elvira Ericsson
// FE23
//
// ProductCart
// Visar produkter som lagt till i varukorgen och gör det möjligt att ta bort produkter från varukorgen
//
// Props
// cartItems - en lista över produkter i varukorgen samt antal
// removeFromCart - funktion som tar bort eller minskar antalet av en produkt 
// 
// Logik
// Räknar ut det totala priset för alla produkterr i varukorgen
//
// Render
// Visar varje produkt med bild, namn, antal, pris och en knapp för att ta bort produkten samt totalt pris för alla produkter
import React from "react";

export default function ProductCart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div id="productCart">
            <h3>Varukorg</h3>
            <ul style={{
                listStyleType: 'none',
                padding: '0'
                }}>
                {cartItems.map((item) => (
                    <li key={item.product.productNumber} style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#efefef',
                        borderRadius: '5px',
                        padding: '20px',
                        width: '450px',
                        marginBottom: '10px'
                        }}>
                        <div style={{
                            display: 'flex',
                            gap: '20px'
                            }}>
                            <div>
                                <img src={item.product.imageURL} alt={item.product.name} style={{
                                    width: '80px',
                                    borderRadius: '5px'
                                    }}/>
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                                }}>
                                <h4 style={{margin: '0'}}>{item.product.name}</h4>
                                <p style={{margin: '0'}}>Antal: {item.quantity}</p>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end'
                            }}>
                            <p style={{margin: '0'}}>Pris: {item.product.price * item.quantity} SEK</p>
                            <button onClick={() => removeFromCart(item.product.productNumber)}
                                style={{
                                    marginLeft: "10px",
                                    padding: "5px 10px",
                                    border: "none",
                                    backgroundColor: "#dc3545",
                                    color: "white",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}>Ta bort</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3>Total: {total} SEK</h3>
        </div>
    );
}
