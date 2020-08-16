import React from 'react';
import ReactDOM from 'react-dom';
import './bm.css';
import './bm2.css';
import Testimonial from './testimonial';



function Bm()

{
    return (

  <div>

  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">Our Business Plan</h1>
       
        
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834136/illus_kftyh4.png" alt="" class="img-fluid"/></div>
    </div>
  </div>

  <div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light ">Vision</h2>
        <p class="font-italic text-muted mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus. Pellentesque habitant morbi tristique senectus et netus et. Non blandit massa enim nec dui nunc mattis. Velit dignissim sodales ut eu sem integer vitae. Ante in nibh mauris cursus mattis. Nibh cras pulvinar mattis nunc sed blandit. Mattis vulputate enim nulla aliquet. Ultricies mi quis hendrerit dolor magna. Dui faucibus in ornare quam viverra orci sagittis. Aliquam sem et tortor consequat id porta nibh venenatis cras. Tincidunt praesent semper feugiat nibh sed pulvinar.</p>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556834139/img-1_e25nvh.jpg" alt="" class="img-fluid mb-4 mb-lg-0"/></div>
    </div>
   
  </div>
</div>

  <div class="demo11">
            <div class="container">
                <h4 style={
                      {"padding-top":"10px"}
                }>Pricing Options</h4>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable11">
                            <div class="pricingTable-header">
                                <i class="fa fa-adjust"></i>
                                <div class="price-value"> $10.00 <span class="month">per month</span> </div>
                            </div>
                            <h3 class="heading">Standard</h3>
                            <div class="pricing-content">
                                <ul>
                                    <li><b>50GB</b> Disk Space</li>
                                    <li><b>50</b> Email Accounts</li>
                                    <li><b>50GB</b> Monthly Bandwidth</li>
                                    <li><b>10</b> subdomains</li>
                                    <li><b>15</b> Domains</li>
                                </ul>
                            </div>
                            <div class="pricingTable-signup">
                                <a href="#">sign up</a>
                            </div>
                        </div>
                    </div>
         
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable11 green">
                            <div class="pricingTable-header">
                                <i class="fa fa-briefcase"></i>
                                <div class="price-value"> $20.00 <span class="month">per month</span> </div>
                            </div>
                            <h3 class="heading">Business</h3>
                            <div class="pricing-content">
                                <ul>
                                    <li><b>60GB</b> Disk Space</li>
                                    <li><b>60</b> Email Accounts</li>
                                    <li><b>60GB</b> Monthly Bandwidth</li>
                                    <li><b>15</b> subdomains</li>
                                    <li><b>20</b> Domains</li>
                                </ul>
                            </div>
                            <div class="pricingTable-signup">
                                <a href="#">sign up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable11 blue">
                            <div class="pricingTable-header">
                                <i class="fa fa-diamond"></i>
                                <div class="price-value"> $30.00 <span class="month">per month</span> </div>
                            </div>
                            <h3 class="heading">Premium</h3>
                            <div class="pricing-content">
                                <ul>
                                    <li><b>70GB</b> Disk Space</li>
                                    <li><b>70</b> Email Accounts</li>
                                    <li><b>70GB</b> Monthly Bandwidth</li>
                                    <li><b>20</b> subdomains</li>
                                    <li><b>25</b> Domains</li>
                                </ul>
                            </div>
                            <div class="pricingTable-signup">
                                <a href="#">sign up</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="pricingTable11 red">
                            <div class="pricingTable-header">
                                <i class="fa fa-cube"></i>
                                <div class="price-value"> $40.00 <span class="month">per month</span> </div>
                            </div>
                            <h3 class="heading">Extra</h3>
                            <div class="pricing-content">
                                <ul>
                                    <li><b>80GB</b> Disk Space</li>
                                    <li><b>80</b> Email Accounts</li>
                                    <li><b>80GB</b> Monthly Bandwidth</li>
                                    <li><b>25</b> subdomains</li>
                                    <li><b>30</b> Domains</li>
                                </ul>
                            </div>
                            <div class="pricingTable-signup">
                                <a href="#">sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

  
  
      


</div>

);

    

}

export default Bm;
