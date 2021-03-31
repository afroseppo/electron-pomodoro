import logo from './logo.svg';
import Timer from './components/timer'
import './App.css';

const App = () =>  {
  return (
    <div className="App">
        <p>A pomodoro timer</p>
        <Timer/>
    </div>
  );
}

export default App;
