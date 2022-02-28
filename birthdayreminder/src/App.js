import {react,useState} from 'react';
import './App.css';
import  Data from "./Data"
import  Header from "./Components/Header"
import  Footer from "./Components/Footer"
import  CardItem from "./Components/CardItem"

function App() {

  const[ pepole , setPepole]  = useState(Data)
  return (
    <div className="App">
      <div ClassName="birthday__area">
      <Header    pepole={pepole}/>
      {pepole.map(item =>{
        return(
          <div>
          <CardItem 
          id={item.id}
          image={item.image}
          name={item.name}
          age={item.age}
          />
          </div>
        )
      })}

      <Footer  setPepole={setPepole} />
      </div>
  
    </div>
  );
}

export default App;