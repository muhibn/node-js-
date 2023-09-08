import Navbar from './Navbar';
import Home from './Home';
import './App.css';
import Hook from './hook';
import Blogs from './blog';
function App() {
  const welcome="Welcome MR";
  const person={name:"muhibullah",age:26}
  return (

  
  <div className='content'>
    <Navbar></Navbar>
    <Home></Home>
    <Hook></Hook>
    <Blogs></Blogs>

    {/*
    <h1>{welcome}{person.name}</h1>
    <h2>your age is {person.age}</h2>
    <h2>your CGP is {Math.random(6,10)}</h2>
  <h1>this is  my web page </h1>*/}
  </div>
  
  );
}

export default App;
