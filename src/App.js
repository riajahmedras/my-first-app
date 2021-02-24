import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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

export default App;
