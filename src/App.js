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

  const activeLine = (e)=>{
    let links= document.querySelectorAll('.menu>ul>li')
    links.forEach(link=>{
      link.classList.remove('active');

      if(e.target === link.firstElementChild){
        link.classList.add('active')
        displayMenu();
      }
    })
  }

  const getDestination = () =>{
    let tabLinks = document.querySelectorAll('.tab-link')

    let tabImg = document.querySelectorAll('.img-wrapper img');
    let tabHeader = document.querySelectorAll('.tab-body h2');
    let tabDesc = document.querySelectorAll('.tab-body p');
    let tabInfo = document.querySelectorAll('.tab-body .tab-info');
    
    tabImg[0].classList.add('active');
    tabHeader[0].classList.add('active');
    tabDesc[0].classList.add('active');
    tabInfo[0].classList.add('active');

    for (let number = 0; number < tabLinks.length; number++) {
      tabLinks[number].addEventListener('click', ()=>{
        console.log(number)
        tabLinks.forEach(link => {
          link.classList.remove('active');
        });
        tabImg.forEach(img => {
          img.classList.remove('active');
        });
        tabHeader.forEach(header=>{
          header.classList.remove('active');
        });
        tabDesc.forEach(desc=>{
          desc.classList.remove('active');
        });
        tabInfo.forEach(info=>{
          info.classList.remove('active');
        });
        
        tabLinks[number].classList.add('active');
        tabImg[number].classList.add('active');    
        tabHeader[number].classList.add('active');    
        tabDesc[number].classList.add('active');    
        tabInfo[number].classList.add('active');    
      })
    }
  }
  
  return(
    <Router>
    <div className='App relative w-100  overflow-hidden'>
      <Navbar displayMenu={displayMenu} activeLine={activeLine}/>

        <Routes>
          <Route exact path='/' element={<Home/>}/>   
          <Route exact path='/destination' element={
          <Destination getDestination={getDestination} />
          }/>   
          <Route exact path='/crew' element={<Crew/>}/>   
          <Route exact path='/technology' element={<Technology/>}/>   
        </Routes>
    </div>
    </Router>
    )
}

export default App;
