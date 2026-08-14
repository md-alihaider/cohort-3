import React from 'react'

type Props = {}

const TooltipPage = (props: Props) => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight text-(--text-color)">Tooltip</h1>
        <p className="text-xl text-gray-600">
          The Tooltip component displays helpful information when users hover
          over or interact with an element.
        </p>
      </div>
    </div>
  );
}

export default TooltipPage