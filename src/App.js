import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'


function App() {
  const displayMenu = ()=>{
    let hamburger = document.querySelector('.hamburger-menu');
    let menu= document.querySelector('.menu');
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
  }
  
  return(
    <Router>
    <div className='App relative w-100  overflow-hidden'>
      <Navbar displayMenu={displayMenu}/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>   
          <Route exact path='/destination' element={<Destination/>}/>   
          <Route exact path='/crew' element={<Crew/>}/>   
          <Route exact path='/technology' element={<Technology/>}/>   
        </Routes>
    </div>
    </Router>
    )
}

export default App;
