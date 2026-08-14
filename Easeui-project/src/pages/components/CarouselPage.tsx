import React from 'react'

type Props = {}

const CarouselPage = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--text-color) ">Carousel</h1>
        <p className="text-xl text-gray-600">
          The Carousel component allows users to browse through a collection of
          content or images one item at a time.
        </p>
      </div>
    </div>
  );
}

export default CarouselPage
