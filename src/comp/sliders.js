import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/src/carousel.js';
import img from '../assets/img/1.jpg'
import img2 from '../assets/img/4.jpg'

const sliders = () => {
    return(
      //   <section class="slider_section">
      //     <div id="main_slider" class="carousel slide banner-main" data-ride="carousel">
      //       <div class="carousel-inner">
      //           <div class="carousel-item active">
      //             <img class="first-slide" src={img} alt="First slide" />
      //             <div class="container">
      //                 <div class="carousel-caption relative">
      //                   <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
      //                       <strong class="yellow_bold">Product </strong></h1>
      //                   <p>It is a long established fact that a r <br />
      //                     eader will be distracted by the readable content of a page </p>
      //                   <a  href="#">see more Products</a>
      //                 </div>
      //             </div>
      //           </div>
      //           <div class="carousel-item">
      //             <img class="second-slide" src={img2} alt="Second slide" />
      //             <div class="container">
      //                 <div class="carousel-caption relative">
      //                   <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
      //                       <strong class="yellow_bold">Product </strong></h1>
      //                   <p>It is a long established fact that a r <br />
      //                     eader will be distracted by the readable content of a page </p>
      //                   <a  href="#">see more Products</a>
      //                 </div>
      //             </div>
      //           </div>
      //           <div class="carousel-item">
      //             <img class="third-slide" src={img} alt="Third slide" />
      //             <div class="container">
      //                 <div class="carousel-caption relative">
      //                   <h1>Our <br /> <strong class="black_bold">Latest </strong><br />
      //                       <strong class="yellow_bold">Product </strong></h1>
      //                   <p>It is a long established fact that a r <br />
      //                     eader will be distracted by the readable content of a page </p>
      //                   <a  href="#">see more Products</a>
      //                 </div>
      //             </div>
      //           </div>

      //       </div>
      //       <a class="carousel-control-prev" href="#main_slider" role="button" data-slide="prev">
      //       <i class='fa fa-angle-right'></i>
      //       </a>
      //       <a class="carousel-control-next" href="#main_slider" role="button" data-slide="next">
      //       <i class='fa fa-angle-left'></i>
      //       </a>
      //     </div>
      //  </section>



        <div id="carouselExampleCaptions" className="carousel slide" style={{marginTop: "105px"}}>
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    )
}

export default sliders