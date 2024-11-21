//
// Elvira Ericsson
// FE23
//
// Popup
// Visar mer info om en vald produkt i ett popup-fönster
//
// Props
// isOpen - styr om popupen visas
// onClose - funktion flr att stänga popupen
// product - den produkten som det visas mer info om
//
// Render
// Visar produktens namn, bild, beskrivning och en stängknapp
import React from "react";

export default function Popup ({isOpen, onClose, product}) {
    if (!isOpen) return null;

    return (
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
            <div style={{
                backgroundColor: "white",
                padding: "20px",
                borderRadius: "5px",
                maxWidth: "400px",
                textAlign: "center"
                }}>
                <h2>{product.name}</h2>
                <img src={product.imageURL} alt={product.name} style={{width: "100px"}}/>
                <p>{product.description}</p>
                <button onClick={onClose} style={{
                    marginTop: "10px",
                    padding: "10px 20px",
                    border: "none",
                    backgroundColor: "#007BFF",
                    color: "white",
                    borderRadius: "5px",
                    cursor: "pointer",
                    }}>Stäng</button>
            </div>
        </div>
    )
}