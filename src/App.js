import logo from './logo.svg';
import './App.css';

const number = 77777;
const singr = {name: 'Dr. Mahfuzur rahaman', job: 'singre'};
const singr2 = {name: 'Eva Rahman', job: 'singre'}

const singerStyle = {
  color: 'purple',
  backgroundColor: 'white'
}

function App() {
  return (
    <div className="App">
     <Person></Person>
     <Person></Person>
     <Person></Person>
     <h5>New Component. YAY</h5>
     <Friend></Friend>
     <Friend></Friend>
     <Friend></Friend>
    </div>
  );
}

function Person(){
  return (
    <div className='person'>
    <h1>Sakib AL Hasan</h1>
    <p>Profession: Cricket</p>
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
