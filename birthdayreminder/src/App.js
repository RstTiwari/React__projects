import {react,useState} from 'react';
import './App.css';
import  Data from "./Data"
import  Header from "./Components/Header"
import  Footer from "./Components/Footer"
import  CardItems from "./Components/CardItems"

function App() {

  const[ pepole , setPepole]  = useState(Data)
  return (
    <div className="App">
      <div ClassName="birthday__area">
      <Header    pepole={pepole}/>
      <CardItems  pepole={pepole}/>
      <Footer  setPepole={setPepole} />
      </div>
  
    </div>
  );
}

export default App;