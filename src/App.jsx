import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Gallery from './Gallery.jsx'

function App() {

  //const count=0
  // count = count+1
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Gallery Of Horns</h1>
      <Header 
        title="WOOHOO!"
        name = "Ryan"
        place = "OKC"
      />
      <Gallery/>

      <Footer/>
      
     </>
  )
}

export default App
