import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'
import allBeasts from './data.json'
import SelectedBeast from './SelectedBeast.jsx'
function App() {

  //const count=0
  // count = count+1
  const [count, setCount] = useState(0)
  const [selectedBeast, setSelectedBeast] = useState(null); // State to track selected beast

  const updateCount = (newCount => {
    setCount(newCount)
  })

  const handleBeastSelect = (beast) => {
    setSelectedBeast(beast); // Update selectedBeast state
  };

  const handleCloseModal = () => {
    setSelectedBeast(null);
  };

  return (
    <>
      <h1>Gallery Of Horns</h1>
      <Header 
        title="WOOHOO!"
        name = "Ryan"
        place = "OKC"
      />
      <Gallery
        allBeasts={allBeasts}
        updateCount={updateCount}
        onBeastSelect={handleBeastSelect} // Pass handleBeastSelect function to Gallery
      />
      <SelectedBeast 
        selectedBeast={selectedBeast}
        onHide={handleCloseModal}
      />
      <Footer/>
      
     </>
  )
}

export default App
