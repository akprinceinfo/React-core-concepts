import logo from './logo.svg';
import './App.css';

function App() {
  var name ={
    name:"Prince",
    job : "Web Developer",
  }
  var headerStyle = {
    color:'red',
    background:'yellow',
    padding:'10px 30px'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> 
        < h1 className = "" style = { headerStyle} > Hello!I am {name.name} and my age is { name.job } < /h1>
        
      </header>
    </div>
  );
}

export default App;
