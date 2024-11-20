import React from "react";

export default function ProductCart({ cartItems, removeFromCart }) {
    const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <div id="productCart">
            <h3>Varukorg</h3>
            <ul style={{
                listStyleType: 'none'
            }}>
                {cartItems.map((item) => (
                    <li key={item.product.productNumber}>
                        <h4>{item.product.name}</h4>
                        <img src={item.product.imageURL} alt={item.product.name} style={{ width: "80px" }}  />
                        <p>Antal: {item.quantity}</p>
                        <p>Pris: {item.product.price * item.quantity} SEK</p>
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
                    </li>
                ))}
            </ul>
            <p>Total: {total} SEK</p>
        </div>
    );
}

