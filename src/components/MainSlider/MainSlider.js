import React, { useState } from "react";
import slide1 from "./images/slide-1.png";
import slide2 from "./images/slide-2.jpeg";
import slide3 from "./images/slide-3.jpeg";
import slide4 from "./images/slide-4.jpg";
import slide5 from "./images/slide-5.jpeg";
import "./slider.css";

import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import ItemsCarousel from "react-items-carousel";
import { auto } from "@popperjs/core";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-bootstrap";

function MainSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

 

  function clickHandler(){
    fetch("http://localhost:64169", {
      method : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
     
       action:1
     
      })
    }).then((response) => response.json())
    .then((responseJson) => {

// Showing response message coming from the server after inserting records.
      alert.alert(responseJson);

    }).catch((error) => {
      console.error(error);
    });


}

  return (
    <div>
    <Carousel fade activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>Craft-Cuts</h3>
          <p>Барбершоп созданный профессиональными барберами. Гарантия качества. Запишись онлайн! Чисто мужское пространство во всех смыслах. Бритье бритвой.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
        <h3>Craft-Cuts</h3>
          <p>лига опытных мужских парикмахеров, где приходят на стрижку к мастеру, а не в парикмахерскую</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
        <h3>Craft-Cuts</h3>
          <p>
          лучший барбершоп в Украине и мире
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MainSlider;

// export default function MainSlider() {
//   const [activeItemIndex, setActiveItemIndex] = useState(0);
//   const chevronWidth = 0;
//   return (
//     <div style={{ padding: `0 ${chevronWidth}px`, width: '50%'}}>
//       <ItemsCarousel
//         requestToChangeActive={setActiveItemIndex}
//         activeItemIndex={activeItemIndex}
//         numberOfCards={1}
//         gutter={20}
//         leftChevron={<button>{'<'}</button>}
//         rightChevron={<button>{'>'}</button>}
//         outsideChevron
//         chevronWidth={chevronWidth}
//       >
//         <div style={{ height: auto, background: '#EEE' }}><img alt="s1" src={slide1}  /> First card</div>
//         <div style={{ height: auto, background: '#EEE' }}><img alt="s2" src={slide2}  /> Second card</div>
//         <div style={{ height: auto, background: '#EEE' }}><img alt="s3" src={slide3}  /> Third card</div>
//         <div style={{ height: auto, background: '#EEE' }}> <img alt="s4" src={slide4}  /> Fourth card</div>
//       </ItemsCarousel>
//     </div>
//   );
// };

// export default  function MainSlider() {
//   return (
//   <Carousel autoPlay = {true} showArrows={true} showStatus = {false}>
//   <Carousel.Item>
//       <div>
//           <img alt="s1" src={slide1}  />
//           <p className="legend">Legend 1</p>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div>
//           <img alt="s2" src={slide2}  />
//           <p className="legend">Legend 2</p>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div>
//           <img alt="s3" src={slide3}  />
//           <p className="legend">Legend 3</p>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div>
//           <img alt="s4" src={slide4}  />
//           <p className="legend">Legend 4</p>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div>
//           <img alt="s5" src={slide5} />
//           <p className="legend">Legend 5</p>
//       </div>
//       </Carousel.Item>

//   </Carousel>
//   );
// }

// const img = [
//   <img key={slide1} src={slide1} alt = "slide1"/>,
//   <img key={slide2} src={slide2} alt = "slide2"/>,
//   <img key={slide3} src={slide3} alt = "slide3"/>,
//   <img key={slide4} src={slide4} alt = "slide4"/>,
//   <img key={slide5} src={slide5} alt = "slide5"/>,
// ]

// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <h2> Single Item</h2>
//         <Slider {...settings}>
//           <div>
//             <h3>1</h3>
//           </div>
//           <div>
//             <h3>2</h3>
//           </div>
//           <div>
//             <h3>3</h3>
//           </div>
//           <div>
//             <h3>4</h3>
//           </div>
//           <div>
//             <h3>5</h3>
//           </div>
//           <div>
//             <h3>6</h3>
//           </div>
//         </Slider>
//       </div>
//     );
//   }
// }

// const MainSlider = () => {
//   return (
//      <main>
//     <div className="mainpage">
//       <div className="slider">
//         <div className="slide1">
//           <img className="slide1" src={slide1} alt="slide1"></img>
//         </div>
//       </div>
//     </div>
//     </main>
//   );
// };
