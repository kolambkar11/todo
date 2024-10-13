import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import './style.css'
import CounterComponent from './components/counterComponent';
import UseEffectExplained from './components/useEffectExplained';
import StopWatch from './components/stopWatch';

function App() {
  return (
    <>
      <div className='todo-container'>
      {/* <CounterComponent/>
        <Header title="Apna Todo"/>
        <TodoItem text="Eat" completed={true}/>
        <TodoItem text="Code"/>
        <TodoItem text="Play" completed={true}/>
        <TodoItem text="Sleep"/>
        <Button/> */}

        {/* <UseEffectExplained/> */}
        <StopWatch/>
      </div>
    </>
  );
}

export default App;
