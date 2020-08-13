import React from 'react';
import ReactDOM from 'react-dom';

import './testimonial.css';



function Testimonial()
{
    return(

        <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div id="testimonial-slider" class="owl-carousel">
                <div class="testimonial">
                    <h3 class="title">Williamson
                        <span class="post">- Web Developer</span>
                    </h3>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!
                    </p>
                </div>
                <div class="testimonial">
                    <h3 class="title">Kristina
                        <span class="post">- Web Designer</span>
                    </h3>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!
                    </p>
                </div>
                <div class="testimonial">
                    <h3 class="title">Steve Thomas
                        <span class="post">- Web Developer</span>
                    </h3>
                    <p class="description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet eum excepturi incidunt laudantium nesciunt omnis, provident repudiandae rerum sed! Amet blanditiis eaque eu!
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>



    );
}

export default Testimonial;
