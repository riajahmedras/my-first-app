import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <ProductShow product ={Products[0]}></ProductShow>
      <ProductShow product ={Products[1]}></ProductShow>
      <FirstComp name="Riaj Ahmed" job="Football"></FirstComp>
      <FirstComp name="Ahmed Only" job="Cricket"></FirstComp>
      <FirstComp name="Abdullah" job="Siburi."></FirstComp>
      
     </header>
    </div>
  );
}
const styleHere = {
  border: '2px solid red',
  padding: '10px',
  margin: '5px',
  background: 'black'
}

function FirstComp(props) {
   return (<div style={styleHere}>
      <h2>This is the name: {props.name}</h2>
      <h3>This is job: {props.job}</h3>
    </div>
  )
}

const Products = [
  {name: 'Photoshop', price: '$120'},
  {name: 'Illustrator', price: '$120'},
]


function ProductShow (props){
  const styleProducts = {
    border: '2px solid red',
    padding: '10px',
    background: 'blue',
    width: '200px',
    height: '200px',
    margin: '5px',
    fontSize: '13px',
    float: 'left',
  }
  const {name, price} = props.product;
  // const {name, price} = {name: 'Photoshop', price: '$120'};
  
  return(
    <div style={styleProducts}>
      <h2>Products Name: {props.product.name}</h2> 
      <h2>Products Price: <span style={{color: 'red'}}>{props.product.price}</span> </h2>
      <h4 >Price: {price}</h4>
      <button>Buy Now</button>
    </div>
  )
}
export default App;
