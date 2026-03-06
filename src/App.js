import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/taskcomponent';
import Recapday1 from './components/Recapday1';
import Productcomponent from './components/Productcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';
import Fourthcomponent from './components/Fourthcomponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <h1>Introduction to ReactJS</h1>
      </header>
      
      {/* nav links goes here  */}
      <nav>
        <Link to="/first" >First component</Link> , 
        <Link to="/second">Second component</Link> , 
        <Link to="/third">Third component</Link> ,
        <Link to="/recap"> Recap component</Link> ,
        <Link to="/task">Task component</Link> , 
        <Link to="/products">Product component</Link> ,
        <Link to="/fourth">Fourth componenet</Link>
      </nav>
        <Routes>
          <Route path='/first' element={<Firstcomponent/>}> </Route>
          <Route path='/second' element={<Secondcomponent/>}></Route>
          <Route path='/third' element={<Thirdcomponent/>}></Route>
          <Route path='/recap' element={<Recapday1/>}></Route>
          <Route path='/task' element={<Taskcomponent/>}></Route>
          <Route path='/products' element ={<Productcomponent/>}></Route>
          <Route path='/fourth' element={<Fourthcomponent/>}></Route>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
