import Header from "./components/Header"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {

  const greetingMessage = "¡Bienvenido a mi tienda!";

  return (
    <>

      <Header />
      <ItemListContainer greeting={greetingMessage} />
    </>
  )
}


export default App