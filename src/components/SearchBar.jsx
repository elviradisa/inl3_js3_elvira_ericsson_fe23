//
// Elvira Ericsson
// FE23
//
// SearchBar
// Hanterar sökfältet
//
// State
// searchInput - representerar sökordet från sökfältet
//
// Funktioner
// handleInput - uppdaterar 'searchInput' när användaren skriver något i fältet
// handleSearch - skickar det användaren skrivit till 'App' via 'onSearch'-props
//
// Render
// Visar ett inputfält och en sökknapp
//
import React, {useState} from 'react';

export default function SearchBar ({onSearch}) {
    const [searchInput, setSearchInput] = useState('');

    const handleInput = (event) => {
        setSearchInput(event.target.value);
    }

    const handleSearch = () => {
        onSearch(searchInput);
    }

    return (
        <>
            <input type="text" value={searchInput} onChange={handleInput} placeholder="Sök efter produkter..." />
            <button id="searchButton" onClick={handleSearch}>Sök</button>
        </>
    )
}