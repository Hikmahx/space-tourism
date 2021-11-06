// import {BrowserRouter as Router, Switch, Route} from 'react-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home'


function App() {
  return(
    <div className='App relative w-100  overflow-hidden'>
      <Navbar/>
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
