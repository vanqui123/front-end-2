
import HeaderComponent from './Header/HeaderComponent';
import MainWork from './MainContainer/MainWork';
import './App.css';
import WorkDetail from './MainContainer/WorkDetail'

function App() {
  return (
   <div>
     <HeaderComponent />
     
     <div className="MainContainer">
     <MainWork />
   
  
     </div>
   
   </div>

  );
}

export default App;
