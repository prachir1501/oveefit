import React, { useEffect } from "react";

import Carousel from "react-bootstrap/Carousel";
import arr from "./class";
import Card1 from "./Class-card";
import "./Home.css";
export default function Home() {
  return (
    <div>
      <div className="container-fluid main">
        <div className="outer">
          <img
            className="main-image"
            src="data:image/jpeg;base64,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"
          />
          <div className="main-text-up">
            {" "}
            BE <span className="high">STRONG</span>
          </div>
          <div className="main-text-down">TRAIN HARD</div>
        </div>
        <div className="container-fluid services">
          <div className="row">
            <div className="col-lg-6">
              <div className="services-pic ">
                <img src="img/services/service-pic.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="service-items">
                <div className="row outer-row">
                  <div className="col-md-6 ">
                    <div className="services-item bg-gray">
                      <img src="img/services/service-icon-1.png" alt="" />
                      <h4>Strategies</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div className="services-item bg-gray pd-b pad">
                      <img src="img/services/service-icon-3.png" alt="" />
                      <h4>Workout</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="services-item">
                      <img src="img/services/service-icon-2.png" alt="" />
                      <h4>Yoga</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                    <div className="services-item pd-b pad">
                      <img src="img/services/service-icon-4.png" alt="" />
                      <h4>Weight Loss</h4>
                      <p>
                        Aenean massa. Cum sociis Theme et natoque penatibus et
                        magnis dis part urient montes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container styling">
        <div className="title">
          <h1 style={{fontSize:"2rem",fontWeight:"400",fontFamily:"baskerville"}}>Unlimited Classes</h1>
        </div>
        <Carousel>
          <Carousel.Item>
            <div className="row">
             {arr.map(function abc(item){
               return (
                 <div className="col-sm-4  random">
                 <Card1 url={item.url} title={item.title} trainer={item.trainer}/>
                 </div>
               );
             })}
            </div>
            <div className="row">
             {arr.map(function abc(item){
               return (
                 <div className="col-sm-4 random">
                 <Card1 url={item.url} title={item.title} trainer={item.trainer}/>
                 </div>
               );
             })}
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="row">
             {arr.map(function abc(item){
               return ( 
                 <div className="col-sm-4 random">
                 <Card1 url={item.url} title={item.title} trainer={item.trainer}/>
                 </div>
               );
             })}
            </div>
            <div className="row">
             {arr.map(function abc(item){
               return (
                 <div className="col-sm-4 random">
                 <Card1 url={item.url} title={item.title} trainer={item.trainer}/>
                 </div>
               );
             })}
            </div>
            </Carousel.Item>
        </Carousel>
      </div>
      <section class="latest-blog-section spad" style={{backgroundColor:"#f5f4f4"}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12" style={{height:"50px",paddingBottom:"30px",marginBottom:"10px"}}>
                    <div class="section-title">
                        <h2 style={{textAlign:"center"}}>Latest Blog</h2>
                    </div>
                </div>
            </div>
            <div class="row" style={{paddingLeft:"70px",paddingRight:"70px"}}>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-item">
                        <img class="rectify" src="img/blog/blog-1.jpg" alt=""/>
                        <div class="blog-widget">
                            <div class="bw-date">February 17, 2019</div>
                            <a href="#" class="tag">#Gym</a>
                        </div>
                        {/* <h4><a href="#">10 States At Risk of Rural Hospital Closures</a></h4> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-item">
                        <img class="rectify" src="img/blog/blog-2.jpg" alt=""/>
                        <div class="blog-widget">
                            <div class="bw-date">February 17, 2019</div>
                            <a href="#" class="tag">#Sport</a>
                        </div>
                        {/* <h4><a href="#">Diver who helped save Thai soccer team</a></h4> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="single-blog-item">
                        <img class="rectify"src="img/blog/blog-3.jpg" alt=""/>
                        <div class="blog-widget">
                            <div class="bw-date">February 17, 2019</div>
                            <a href="#" class="tag">#Body</a>
                        </div>
                        {/* <h4><a href="#">Man gets life in prison for stabbing</a></h4> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  );
}
