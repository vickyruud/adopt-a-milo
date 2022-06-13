import React from "react";

const images = [
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
  "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1609791636587-50feca5caee7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGRvZ3xlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60",
];

function Carousel() {
  return (
    <div className="w-full select-none relative">
      <img src={images[0]} alt="" />
      <div className="absolute w-full top-1/2 -translate-y-1/2 py-2 bg-red-400"></div>
    </div>
  )
}

export default Carousel;
