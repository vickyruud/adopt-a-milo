import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1609791636587-50feca5caee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGRvZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
];

let count = 0;

function Carousel() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOnNextClick = () => {
    count = (count + 1) % images.length;
    setCurrentIndex(count);
    carouselRef.current.classList.add('fade-anim')
  }

  const handleOnPrevClick = () => {
    count = (count - 1) % images.length;
    setCurrentIndex(count);

  }

  const startCarousel = () => {
    setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  const carouselRef = useRef()

  const removeAnimation = () => {
    carouselRef.current.classList.remove("fade-anim");
  }

  useEffect(() => {
    carouselRef.current.addEventListener('animationed', removeAnimation)
    // startCarousel();
  }, [])


  return (
    <div ref={carouselRef} className="w-full select-none relative flex justify-center">
      <div className="aspect-w-16 aspect-h-19">
      <img className="h-96" src={images[currentIndex]} alt="" />
      </div>
      <div className="absolute w-full top-1/2 -translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={handleOnPrevClick}>Previous</button>
        <button onClick={handleOnNextClick}>Next</button>
      </div>
    </div>
  )
}

export default Carousel;
