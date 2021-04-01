import Timer from './components/timer'
import './App.css';

const App = () =>  {
  return (
    <div className="App">
        <h1>A pomodoro timer</h1>
        <Timer pomodoroLength = {25} breakLength =  {5} />
    </div>
  );
}

export default App;
