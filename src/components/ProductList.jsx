import React, {useState} from "react";
import Popup from "./Popup.jsx";

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
                listStyleType: 'none'
            }}>
                {products.map(product => (
                    <li key={product.productNumber}>
                        <h4>{product.name}</h4>
                        <img src={product.imageURL} alt={product.name} style={{ width: "150px" }} />
                        <p>Pris: {product.price} SEK</p>
                        <button onClick={() => addToCart(product)}>Lägg till</button>
                        <button onClick={() => openModal(product)} style={{
                            marginLeft: "10px",
                            padding: "5px 10px",
                            border: "none",
                            backgroundColor: "#007BFF",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}>Visa mer info</button>
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