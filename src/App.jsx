import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';



function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="BigSneakers"/>
    </div>

  );
}

export default App
