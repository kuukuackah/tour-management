import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl:weatherImg,
        title:"calculate weather",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis.",
    },
    {
        imgUrl:guideImg,
        title:"Best Tour Guide",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis.",
    },
    {
        imgUrl:customizationImg,
        title:"customization",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, facilis.",
    },
]
const ServiceList = () => {
  return(
  <>
  {servicesData.map((item, index) => (
    <Col lg='3' key={index}>
        <ServiceCard item={item}/>
        </Col>
        ))}
  </>
  );
};

export default ServiceList
