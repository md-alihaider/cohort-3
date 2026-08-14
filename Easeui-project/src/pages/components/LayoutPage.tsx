import React from 'react'

type Props = {}

const LayoutPage = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--text-color) ">Layout</h1>
        <p className="text-xl text-gray-600">
          The Layout component provides a consistent structure for organizing
          content, navigation, and other UI elements.
        </p>
      </div>
    </div>
  );
}

export default LayoutPage
