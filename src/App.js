import logo from './logo.svg';
import './App.css';
import {User} from './Components/UserComponent';
import Profile from './Components/ProfileClassComponent';
import Video from './Components/VideoComponent';

function App() {
  function clickMe()
  {
    alert('Click he hurts!')
  }


  return (
    <div className="App">
      <h1>
        Test is here
      </h1>  
      
      <Video />
      <User />
      <Profile />
      <button onClick={clickMe} >Click Me</button>
      <button onClick={()=>clickMe()  } >Click Arrow function</button>

    </div>
  );
}

export default App;
