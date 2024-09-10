import Navbar from "./components/Navbar.js"
import Search  from "./components/Search.js"
import About from "./components/About.js"
import Products  from "./product.js"
import Footer from "./components/Footer.js"


function App(){
   return(
    <div>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <About></About>
    <Footer></Footer>
  </div>
   )
}
export default App