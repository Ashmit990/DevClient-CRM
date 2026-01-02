import React from 'react'

export const Button = ({label,logo,onClick}) => {
  return (
    <>
    <button onClick={onClick} className='bg-[#6DA2F9] text-white w-[190px] h-[50px] rounded-lg flex justify-center items-center font-bold'>{label} <span className='text-[30px] text-center mb-[6px] ml-[7px]'>{logo}</span></button>
    </>
  )
}
