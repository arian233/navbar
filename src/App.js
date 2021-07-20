import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Header from './components/topMenu'
import Button from "./components/Body/Button"


function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <Button />
        </div>
  );
}

export default App;
