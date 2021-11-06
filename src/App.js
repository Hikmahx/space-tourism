// import {BrowserRouter as Router, Switch, Route} from 'react-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'


function App() {
  const displayMenu = ()=>{
    let hamburger = document.querySelector('.hamburger-menu');
    let menu= document.querySelector('.menu');
    hamburger.classList.toggle('active')
    menu.classList.toggle('active')
  }
  
  return(
    <div className='App relative w-100  overflow-hidden'>
      <Navbar displayMenu={displayMenu}/>
      <Home/>
    </div>

    // <div className='App'>
    //   <Switch>
    //   <Route exact path='/' render={()=>
    //     <Home/>
    //     }/>        
        
    //   <Route exact path='/details' render={()=>
    //     <h1>details</h1>
    //   }/>
    //   </Switch>
    // </div>
    // </Router>
    )
}

export default App;
