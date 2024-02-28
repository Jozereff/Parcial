import './App.css'
import Card from "./components/Card"
import Form from "./components/Form"
import Navbar from "./components/Navbar"
import Input from './components/Input'
function App() {
return (
    
    <div className="App">
      <Navbar/>
      <h1>BIENVENIDO A NUESTRA CLINICA </h1>
      <p>Lo cuidamos como si fuese nuestro</p>
      <Card/>
      <Input/>
      
    </div>
    
  )
}

export default App
