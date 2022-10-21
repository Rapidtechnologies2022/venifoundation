import logo from './logo.svg';
import './App.css';
// CSS
import "./assets/css/Style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Navbar/Nav';
import {Route,Switch} from 'react-router-dom';
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Contact from './components/Navbar/Contact';
import Footer from './components/Footer';




function App() { 
  
  return (
    <div className="App">
        <Nav/>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/About" component={About} /> 
        <Route exact path="/Contact" component={Contact} />
       </Switch>     
<Footer/>
</div>
  );
}
export default App;
