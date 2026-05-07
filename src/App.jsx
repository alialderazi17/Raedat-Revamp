import "./App.css"
import About from "./pages/About"

const App = () => {
  return (
    <>
      {/* <h1>hello</h1> */}
      <About path="/about" element={<About />} />
    </>
  )
}

export default App
