import logo from './logo.svg';
import './App.css';

function App() {

  return ( < div className = 'App' >
    <header className = 'app-header' >
    <p > I am a react Parson < /p> </header>
    <Parson></Parson>
    < Parson1></Parson1>
    <Parson></Parson>
     </div>
  )
}

function Parson() {
  const ParsonStyle = {
    border:'2px solid red',
    margin:'10px',
  }
  return ( < div style = {
        ParsonStyle
      } >
    <h1 > Hello!I Am Prince </h1> 
    <h4 > I Am a student < /h4> 
    </div>)
  }
  function Parson1() {
    return ( < div >
      <
      h1 > Hello!I Am Abir < /h1>  <
      h4 > I Am a Doctor < /h4>  <
      /div>)
    }


  export default App;