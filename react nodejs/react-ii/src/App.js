import Navbar from './component/navbar';
import Home from './component/home';
import Blog from './component/blog';
function App() {
  let name="Muhibullah "
  let lastname="Noorzad"
  const  job_info={
    job:"Software Engineer",
    Salary:100000
  };
  return (


    <div className="App">
      <Navbar></Navbar>
      <div className='container'>
        <Home></Home>
        <Blog></Blog>




         {/* 
            <h1> this is  Muhibullah</h1>
            <h1>Name {name}</h1>
            <h1>Last Named: {lastname} </h1>

              
              <h1>Job information </h1>
              <p>job title :{job_info.job}</p>
              <p>Solar :{job_info.Salary}</p>
              <h3>{"hellor "}</h3>
  -->  */ }
                 
            
          
           

      </div>
    </div>
  );
}

export default App;
