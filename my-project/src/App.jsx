import Header from "./components/Header"
import Inicio from "./components/Inicio"
import ItemListContainer from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/libros" element={<ItemListContainer />}/>
        <Route path="/libros/:categoria" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App