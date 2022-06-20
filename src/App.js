
import HeaderComponent from './Header/HeaderComponent';
import MainWork from './MainContainer/MainWork';
import './App.css';
import WorkDetail from './MainContainer/WorkDetail'

function App() {
  return (
    <div className="background">
     <HeaderComponent />
     
     <div className="MainContainer" style={{marginLeft:"400px"}}>
     <MainWork />
   
  
     </div>
   
   </div>

  );
}

export default App;
