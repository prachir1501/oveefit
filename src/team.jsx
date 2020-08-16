import React from 'react';

import './team.css';

import names from './names.js';



function Team()
{
    
  
  
  
  
  
  
  
  return(

    <div>
        <div class="bg-image">
  
        </div>
  
         <div class="bg-text">
            <h1>THE TEAM</h1>
    
          </div>
      <br/>
      <br/>
        <div class="container">
    <div class="row">


    {names.map(function abc(person){


return(

  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="our-team">
<div class="picture">
<img class="img-fluid" src="https://picsum.photos/130/130?image=839"/>
</div>
<div class="team-content">
<h3 class="name">{person.name}</h3>
<h4 class="title">{person.title}</h4>
</div>
<ul class="social">
<li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
<li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
<li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
<li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
</ul>
</div>
</div>

);






})}




    

      
       
        
       
  </div>
</div>

</div>

    );
}

export default Team;