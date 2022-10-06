import logo from './logo.svg';
import './App.css';
import MyList from './MyList';

function App() {

  const toDos = [
    "Listen to Hot Mulligan", 
    "Drink hot cocoa", 
    "Eat hot cheetos"
  ];
  

  return (
    <div>
      <MyList theList={toDos}/>
    </div>
  );
}

export default App;
