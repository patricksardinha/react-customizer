import Canvas from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"
import ItemSelection from "./pages/ItemSelection"

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <ItemSelection />
      <Canvas />
      <Customizer />
    </main>
  )
}

export default App
