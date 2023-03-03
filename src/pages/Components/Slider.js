import { useState, useEffect } from "react";
import { Carousel } from "antd";
import Image from "next"

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "300px",
  textAlign: "center",
  background: "#364d79",
};

const Slider = () => {
  const [data, setData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=cD7Rzy0S5yD2kUjAv4xHsblS5pvth_WmgyZtbUTgAtk"
    )
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((currentSlide) =>
  //       currentSlide === data.length - 1 ? 0 : currentSlide + 1
  //     );
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [data, currentSlide]);

  return (
    <>
      {/* <div className="flex flex-col justify-center items-center">
        <div className="slider">
          <div className="slides">
            {data.map((item, key) => (
              <div
                key={key}
                id={`slide-${key}`}
                className={currentSlide === key ? "active" : ""}
              >
                <Image src={item.urls.regular} width={900} height={900} />
              </div>
            ))}
          </div>

          {data.map((_, key) => (
            <a
              key={key}
              href={`#slide-${key}`}
              className={currentSlide === key ? "active" : ""}
            >
              {key + 1}
            </a>
          ))}
        </div>
      </div> */}
      <div className="h-full">
        <Carousel autoplay>
          {data.map((item, key) => (
            <div
              key={key}
            >
              <Image src={item.urls.regular} width={900} height={900} />
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Slider;
