import React from 'react';
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import herVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.png' 
import Subtitle from "../shared/Subtitle";
import experienceImg from '../assets/images/experience.png'
import SearchBar from '../shared/SearchBar';
import ServiceList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/image-gallery/MasonaryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';



const Home = () => {
  return (
    <>
    {/* ==================Hero Section start=================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={"Know Before You Go"}/>
                <img src={worldImg} alt="" />
              </div>
              <h1>traveling opens the door to creating <span className="highlight">memories</span></h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis voluptatibus quae fugiat modi placeat illo sit quaerat inventore porro distinctio? Dolore impedit corrupti vero beatae dolorem dicta dignissimos autem consectetur.</p>
              </div>
            </Col>

                <Col lg='2'>
                  <div className="hero__img-box">
                    <img src={heroImg} alt="" />
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-4">
                    <video src={herVideo} alt="" controls />
                  </div>
                </Col>
                <Col lg='2'>
                  <div className="hero__img-box mt-5">
                    <img src={heroImg02} alt="" />
                  </div>
                </Col>
              <SearchBar/>
          </Row>
        </Container>
      </section>
      {/* ==================Hero Section end =================== */}
      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">we offer our best services </h2>
            </Col>
            <ServiceList/>
          </Row>
        </Container>
      </section>


      {/* =============featured tours section start ============= */}
      <Container>
        <Row>
          <Col lg='12' className='mb-5'>
            <Subtitle subtitle={'Explore'}/>
            <h2 className="featured__tour-title">Our featured tours</h2>
          </Col>
          <FeaturedTourList />
        </Row>
      </Container>
      {/* =============featured tours section end ============= */}
      {/* =========experienec section start====================== */}
      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>with our all experinced <br />we will serve you</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                 Porro voluptatibus neque accusantium corrupti ipsa dolores quasi atque culpa iusto.</p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Succesful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular Clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years Experience</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__im">
                <img src={experienceImg}alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
     {/* =========experienec section end====================== */}

     {/* =========gallery section start====================== */}
<section>
  <Container>
    <Row>
      <Col lg='12'>
        <Subtitle subtitle={'Gallery'} />
        <h2 className="gallery__title">
          visit Our customers tour gallery
          </h2>
      </Col>
      <Col lg='12'>
          <MasonryImagesGallery />
      </Col>
    </Row>
  </Container>
</section>


     {/* =========gallary section end====================== */}

     {/* =========testimonial secyion start ====================== */}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Funs love'}/>
              <h2 className="testimonil__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>

     {/* =========testimonial secyion end ====================== */}
     <Newsletter/>
    </>
  )
}

export default Home;
