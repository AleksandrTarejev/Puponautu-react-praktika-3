import './App.css'
import ProductList from './components/ProductList/ProductList'
import { v4 as uuidv4 } from 'uuid';
function App() {

  console.log(uuidv4());
  return (
    <>
      <ProductList/>
    </>
  )
}

export default App 
