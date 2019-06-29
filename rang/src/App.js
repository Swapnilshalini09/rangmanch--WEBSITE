import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import home from './components/home.jsx';
import Contact from './components/Contact.jsx';
import About from './components/About.jsx';


class App extends Component {
  render() {
  return (<Router>
<div>
<Route exact path="/" component= {home}/>
<Route  path="/About" component= {About}/>
<Route  path="/Contact" component= {Contact}/>
</div>
</Router>
  );
}
}



export default App;
