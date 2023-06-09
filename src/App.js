import './App.css';
import React, {useEffect, useState} from 'react';

function App() {

  // Create multipul components form an array of object 


  const naykos = ["Manna", "Salmal Sha","alomgir","Bappi","Shuvo","Abir"];
  const products = [{Name:'Photoshop',Price:'50.99'},
                    {Name : "Illasteter",Price:'45.87'},
                    {Name : "Apple",Price:'29.87'}
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
          {
            products.map(product=><li>{product.Name}</li>)
            
          }

        </ul>

     </header >
      {/* Dynamic (User) Data Load */}
          <br></br>

           <UsersApi></UsersApi>
           
            <br></br>
        {/* { // Problem ------------> ???????????
          products.map(pd=><Parson productName = {pd}></Parson>)
        } */}

        <Parson name = 'Rubel Kahan' nayka ='Moushome'></Parson>
        <Parson name = {naykos[1]}  nayka = 'shabana'></Parson> 
        <Parson name = {naykos[2]}  nayka = 'popi'></Parson> 
        <Parson name = {naykos[0]}  nayka = 'Bobita'></Parson> 
        {/* ----------Array call----------------- */}
        <Product productName = {products[0]} ProductPrice ={products[0].Price}></Product>
        {/* ---------------------------- */}

        <Product productName = {products[1]} ProductPrice={products[1].Price}></Product>
    
          {/* -------------counter--------------- */}
          <Counter></Counter>

         
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


  // this is counter section 
    // const -> state are name
    // setCount -> function are name = set korar jonno

  function Counter(){
    const[count,setCount] = useState(0);
    return(
      <div>
        <h1>Count : {count}</h1>
        <button onClick={()=> { setCount(count + 1)}}>+ Increase</button>
        <button onClick={()=> {setCount(count - 1)}}> - Discrease</button>
      </div>
    )
  }

  // Dynamic (User) Data Load

  function UsersApi(){
    const[user, setUser] = useState([]);
    // useEffect Data load korar jonno babohar hoica
    useEffect(()=> {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUser(data))
    },[])
    return(
      <div>
        <h3>Dynamic User Data : {user.length}</h3>
        <ul>
          {
           user.map(user => <li>{user.name}</li>)
          }
        </ul>
      </div>
    )
  }



  export default App;
