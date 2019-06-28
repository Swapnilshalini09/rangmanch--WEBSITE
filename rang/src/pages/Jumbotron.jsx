import React, {Component} from 'react';
import './Jumbotron.css';
class Jumbotron extends Component {
render(){
  return(
<div class="jumbotron">

<p class="p01">
<h1 class ="dislay-3" > {this.props.title}</h1>
</p>
    </div>
  );
}
}
export default Jumbotron;
