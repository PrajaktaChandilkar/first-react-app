
import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import ChildComponent from './components/ChildComponent/ChildComponent';

function App() {
  return (
    
    <div className="App">
      <Component1 />
      <Component2 />
      <ChildComponent />
    </div>
    // <div></div>
  );
}

export default App;
