import React from 'react'

const ArrowButton = ({ color, IMG, type, onClick }) => {
  return (
    <button onClick={onClick} className={`bg-${color} text-red-400 sm:h-[100px] sm:w-[100px] h-[64px] w-[64px] ${type === 'right' ? ' bg-primary' : 'bg-white border border-lightgray'} rounded-[100px] items-center justify-center flex`}>
      <img alt={IMG} src={IMG} className={`h-[7px] w-[11px] sm:h-[11px] sm:w-[17px]`} />
    </button>
  )
}

export default ArrowButton