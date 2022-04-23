
import './App.css';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './tatialogo.jpg'

function App() {
  
return (
  <div>
    <Router>
      <nav>
      <img className='logo' src={logo} alt="logo" width="100px"  />
        <Link to='/' className='link'>Shop</Link>
        <Link to='/about' className='link'>About Us</Link>
        <Link to='/contact' className='link'>Contact Us</Link>
      </nav>

      <div className='order'>
      <h5>Free shipping for orders over $150.00 </h5>
    </div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/about' element = {<About/>}/>
        <Route path = '/contact' element = {<Contact/>}/>
      </Routes>
    </Router>

    <header>
    <div className='address'>
<p className='contact-us'>
  496 Gilbert Ave York, ON M6E 4X5<br/>
  info@tatiaboutique.ca <br/>Mon-Fri | 8am to 4pm EST <br/>
  647-546-1286
</p>
</div>
</header>
  </div>
)
}

export default App;
