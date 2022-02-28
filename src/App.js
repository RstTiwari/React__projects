import {  react , useState } from 'react';
import './App.css';
import data from './components/data';
import List from './components/List'

function App() {

  const [people , setPeople] = useState(data)

  return (
    <main>
    <div className="App">
      <h2 className='page__tile'>{people.length}Birthdays Todays</h2>
      <List  pepole={people}/>
       <button  className='clear__btn' onClick={ () => setPeople([])}>Clear All</button>
    
    </div>
    </main>
  );
}

export default App;
