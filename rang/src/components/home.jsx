import React, {Component} from 'react';
import Navbar from '../pages/Navbar.jsx';
import Footer from '../pages/Footer.jsx';
import Jumbotron from '../pages/Jumbotron.jsx';
import './home.css';
class home extends Component {
  render(){
    return(
      <div >
 <Navbar />
 <Jumbotron title="RANGMANCH" />

<p id="borderimg1">

<p class="p08">

<b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ENACTUS - DELHI TECHNOLOGICAL UNIVERSITY </b>


</p>

<img src={require('../images/enac.png')} alt="Smiley face"  width="200" height="130" hspace="20" align="left"  />

Formed in February 2011, we are a dedicated team of 85 students with a head for business and a heart for the world. We truly believe in empowerment of the weaker sections of the society through business acumen and diligence. It is this belief which has allowed Enactus DTU to run 4 flourishing projects across the NCR.

Enactus DTU has constantly endeavored to be the mascot of change and revolution, and bring innovative entrepreneurial solutions to the table in matters concerning the various evils afflicting the Indian society.<br/>

This the approach has brought Enactus multiple laurels of success. Enactus DTU represented India in the World Cup in 2013 and recently placed 3rd in India, in the Enactus National Competition 2017. We secured the fifth position in the Enactus National Competition 2018 out of 24 competing teams.


   <p class="p08">
   <b>PROJECT - RANGMANCH </b>
   </p>
   <img src={require('../images/rang-logo.png')} alt="Smiley face"  width="200" height="140" hspace="20" align="left"  />

   India boasts of a rich heritage that bespeaks of it glorious past.Our ancestors have preserved our cultural and monumental heritage for centuries and it is our duty to continue the legacy. <br/>Over the period of time, when urbanization struck these art forms were buried deep.The culture and knowledge that was being passed down from generations were brought to a halt and the artists were forced to disband their age-old lineage.<br/> Project Rangmanch began its journey with the Kathputli community
   .
  Enactus DTU aims to bring back the former glory of these forgotten artists and help them in adapting their art-form to suit modern day requirements, simultaneously helping the artist in their transition to the formal business sector, through this multi-sided business platform.



</p>

<Footer />
</div>

);
  }
}
export default home;
