import { useState } from "react";
import Slider from "react-slick"
import "./Slide.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'


function Slide() {
  const [imageIndex, setImageIndex] = useState(0)


  let data = [
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284203/cld-sample-5.jpg",
      id: 1
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284202/cld-sample-4.jpg",
      id: 2
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-3.jpg",
      id: 3
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-2.jpg",
      id: 4
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284200/cld-sample.jpg",
      id: 5
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284177/sample.jpg",
      id: 6
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284183/samples/sheep.jpg",
      id: 7
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284184/samples/bike.jpg",
      id: 8
    },
  ]
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}> <FaArrowRight /></div>
    )
  }
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}> <FaArrowLeft /></div>
    )
  }
  console.log(imageIndex);
  console.log(imageIndex - 1);

  const setting7 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 7,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (curent, next) =>
      setImageIndex(next)
  }
  const setting5 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (curent, next) =>
      setImageIndex(next)
  }
  const setting3 = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (curent, next) =>
      setImageIndex(next)
  }
  const HanderClick = (id) => {
    window.location.href=`/book/${id}`
  }
  return (
    <div className="slide_component">
      <div className="comender">
        <p>Recomended For You</p>
        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsa reprehenderit quas consequatur a odio accusamus totam natus quia, corporis voluptatum aliquam, dolore obcaecati ad sequi. Nulla libero quo molestiae!</span>
      </div>
      <Slider className="Slide_7_elements" {...setting7}>
        {data.map((item, i) => {
          if (i === imageIndex) {
            return (
              <div id={`slide${imageIndex}`} key={i} className={"slide activeSlide"}>
<img src={item.img} alt={item.img} />
                <button className="btn_slide" onClick={() => HanderClick(item.id)}><p>🛒Add To Cart</p> </button>
              </div>
            )
          } else {
            return (
              <div key={i} className={"slide"}>
                <img src={item.img} alt={item.img} />
              </div>
            )
          }
        }
        )}
      </Slider>
      <Slider className="Slide_5_elements" {...setting5}>
        {data.map((item, i) => {
          if (i === imageIndex) {
            return (
              <div id={`slide${imageIndex}`} key={i} className={"slide activeSlide"}>
                <img src={item.img} alt={item.img} />
                <button className="btn_slide" onClick={() => HanderClick(item.id)}><p>🛒Add To Cart</p> </button>
              </div>
            )
          } else {
            return (
              <div key={i} className={"slide"}>
                <img src={item.img} alt={item.img} />
              </div>
            )
          }
        }
        )}
      </Slider>
      <Slider className="Slide_3_elements" {...setting3}>
        {data.map((item, i) => {
          if (i === imageIndex) {
            return (
              <div id={`slide${imageIndex}`} key={i} className={"slide activeSlide"}>
                <img src={item.img} alt={item.img} />
                <button className="btn_slide" onClick={() => HanderClick(item.id)}><p>🛒Add To Cart</p> </button>
              </div>
            )
          } else {
            return (
              <div key={i} className={"slide"}>
                <img src={item.img} alt={item.img} />
              </div>
            )
          }
        }
        )}
      </Slider>
    </div>
  );
}

export default Slide;