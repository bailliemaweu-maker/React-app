import logo from './logo.svg';
import './App.css';
import Firstcomponent from './components/Firstcomponent';
import Taskcomponent from './components/taskcomponent';
import Recapday1 from './components/Recapday1';
import Productcomponent from './components/Productcomponent';
import Secondcomponent from './components/Secondcomponent';
import Thirdcomponent from './components/Thirdcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Introduction to ReactJS</h1>
      </header>
      <h2>About Me</h2>
      <p>I was born in the year 2007 during the sabasaba war.I did my primary education at Rockfields School and did my secondary education at Machakos School.</p>
      <h3>Hobbies</h3>
      <p>I  have alot of hobbies. They include cooking, gaming, playing football, driving and watch F1 and safari rally.</p>
      <h4>Current life update</h4>
      <p>I am currently learning full stack at MODCOM institute in Westlands.</p>
      <Firstcomponent/>
      <Taskcomponent />
      <Recapday1 />
      <Productcomponent />
      <Secondcomponent />
      <Thirdcomponent />
    </div>
  );
}

export default App;
