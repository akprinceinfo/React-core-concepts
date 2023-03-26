import logo from './logo.svg';
import './App.css';

function App() {

  const naykos = ["Anawr", "Salmal Sha","alomgir"]

  return ( < div className = 'App' >
    < header className = 'app-header' >
       < p > I am a react Parson < /p> 
     </header >
     <Parson name='Rubel Kahan' nayka ='Moushome'> < /Parson>
     < Parson name = {naykos[1]} nayka = 'shabana' > < /Parson> 
     < Parson name = {naykos[2]}nayka = 'popi' > < /Parson> 
     < Parson name = {naykos[0]}nayka = 'Bobita' > < /Parson> 
     </div>
  )
}

function Parson(props) {
  const ParsonStyle = {
    border: '2px solid red',
    margin: '10px',
  }
  return ( < div style = { ParsonStyle} >
    <h1 > Nayok : {props.name} < /h1>  
    < h4 > Here of: {props.nayka} < /h4>  
    </div>)
  }



  export default App;
