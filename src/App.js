import './App.css';

function App() {

  // Create multipul components form an array of object 


  const naykos = ["Manna", "Salmal Sha","alomgir","Bappi","Shuvo","Abir"];
  const products = [{Name:'Photoshop',Price:'50.99'},
                    {Name : "Illasteter",Price:'45.87'}
                  ];
                  //array function
  // const naykosList = naykos.map(nayok => nayok);
  

  return ( < div className = 'App' >
    <header header className = 'app-header'>
       <p> I am a react Parson </p> 

        <ul>
          {
            naykos.map(nayok => <li>{nayok}</li>)
          }
        </ul>

     </header >
        

        <Parson name = 'Rubel Kahan' nayka ='Moushome'></Parson>
        <Parson name = {naykos[1]}  nayka = 'shabana'></Parson> 
        <Parson name = {naykos[2]}  nayka = 'popi'></Parson> 
        <Parson name = {naykos[0]}  nayka = 'Bobita'></Parson> 
        {/* ----------Array call----------------- */}
        <Product productName = {products[0]} ProductPrice ={products[0].Price}></Product>
        {/* ---------------------------- */}

        <Product productName = {products[1]} ProductPrice={products[1].Price}></Product>
     </div>
  )
}

// first function 

function Parson(props) {
  const ParsonStyle = {
    border: '2px solid red',
    margin: '10px',
    
  }

  return ( <div style = {ParsonStyle}>
    <h1> Nayok : {props.name} </h1>  
    <h4> Here of: {props.nayka} </h4>  
    </div>
    )
  }

// secend function ---------------

  function Product(props){
    const productStyle = {
      border:'1px solid gray',
      borderRadius:'5px',
      height:'200px',
      width:'200px',
      margin:'5px 5%',
      background:'gray',
    }
    const Buttonstyle = {
      border:'1px solid red',
      padding:'5px 8px',
      borderRadius:'5px',
    }
    //obj Destructuring  
    const {Name,Price} =props.productName;
    // const {Name,Price} =props.ProductPrice;

    return(
       <div style={productStyle}>
          {/* <h3>Name : {props.productName.Name} </h3> */}
          <h3>Name : {Name} </h3>
          <h1>$ {Price}</h1>
          <button style={Buttonstyle}>Click Me</button>
       </div>
    )
  }








  export default App;
