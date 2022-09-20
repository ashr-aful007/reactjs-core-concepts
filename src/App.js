import logo from './logo.svg';
import './App.css';


const singres = [
  {name: 'Dr. Mahfuz', job: 'singre'},
  {name: 'Eva Rahman', job: 'singre'},
  {name: 'agun', job: 'singre'},
  {name: 'shuvo', job: 'singre'}
]


function App() {
  const nayoks = ['Rubal', 'BappaRaz da', 'kuber', 'Jshim', 'salman sha', 'riaz', 'razzak'];
  return (  
    <div className="App">
      {
        nayoks.map(nayok => <li>{nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singres.map(singr => <Person name={singr.name}></Person>)
      }
     {/* <Person name={nayoks[0]} nayka="moushumi"></Person>
     <Person name={nayoks[1]} nayka="cheka"></Person>
     <Person name={nayoks[2]} nayka="kopila"></Person> */}
     <h5>New Component. YAY</h5>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
    </div>
  );
}

function Person(props){
  return (
    <div className='person'>
    <h1>{props.name}</h1>
    <p>{props.nayka}</p>
  </div>
  )
}

function Friend(){
  return (
    <div className='container'>
      <h3>Name: Ajay Devgun</h3>
      <p>Job: maramari</p>
    </div>
  )
}


export default App;
