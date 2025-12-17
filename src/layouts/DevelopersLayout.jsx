import React from 'react'
import { Header } from '../components/ui/Header'
import { Button } from '../components/ui/Button'
import { developersData } from '../data/developersData'
import { Developers } from '../components/Developers/Developers'

export const DevelopersLayout = () => {
  return (
    <>
          <div className="flex justify-between items-center w-full pr-[75px]">
            <Header title="Developers" />
            <Button label="Add Developer" logo="+" />
          </div>

          <div className='w-[1085px] h-full mt-[30px] flex justify-between'>
            {developersData.map((data, key)=>(
              <Developers url={data.image} name={data.name} skills={data.skills} score={data.performanceScore} completed={data.completed} inprogress={data.inProgress} email={data.email} />
            ))}
          </div>


    </>
  )
}
