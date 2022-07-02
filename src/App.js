import Greet from './components/Greet';
import './App.css';
import Details from './components/Details';
// import Hello from './components/Hello';
// import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Greet name="Harshit" />
      <hr />
      <Details name="Vinice" number="1" />
      {/* <hr />
      <Welcome />
      <hr />
      <Hello /> */}
      <hr />
      <Message />
      <hr />
      <Counter />
    </div>
  );
}

export default App;
