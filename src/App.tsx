import Banner from "./components/Banner"
import InputSection from "./components/InputSection"
import Navbar from "./components/Navbar"

function App() {

  return (
    <div className="md:py-5 md:mx-24 mx-10 py-4">
    <Navbar/>
    <Banner/>
    <InputSection/>
    </div>
  )
}

export default App
