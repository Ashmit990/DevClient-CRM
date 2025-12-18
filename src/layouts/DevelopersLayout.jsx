import React from 'react'
import { Header } from '../components/ui/Header'
import { Button } from '../components/ui/Button'
import { developersData } from '../data/developersData'
import { Developers } from '../components/Developers/Developers'

export const DevelopersLayout = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center pr-[75px] shrink-0"><Header title="Developers" /><Button label="Add Developer" logo="+" /></div>
      <div className="flex-1 overflow-y-auto mt-6">
        <div className="flex flex-wrap gap-[78px]">
          {developersData.map((data, i) => 
          <Developers key={i} url={data.image} name={data.name} skills={data.skills} score={data.performanceScore} completed={data.completed} inprogress={data.inProgress} email={data.email} />
          )}
        </div>
      </div>
    </div>
  )
}
