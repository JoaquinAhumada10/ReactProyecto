import './App.css'
import Button from './components/Button';
import Navbar from './components/Navbar';



function App() {

  const handleClick = (name) =>{
    alert("Estas en " + name);
  }

  return (
<div>
   <h1>Iris Anama</h1>
    <Navbar />
    <Button text="Inicio" number={1} handleClick={handleClick}/>
    <Button text="Sobre Nosotros" handleClick={handleClick}/>
    <Button text="Contacto" handleClick={handleClick}/>

</div>
  );
}

export default App
