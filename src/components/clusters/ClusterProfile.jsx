import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Header } from '../ui/Header'
import { Button } from '../ui/Button'

export const ClusterProfile = ({ data }) => {
  const navigate = useNavigate()
  const { id } = useParams()
  const cluster = data.find(cluster => cluster.id === id)

  console.log(cluster)

  return (
    <>
      <div className="flex items-center justify-between w-[1085px] mb-4 shrink-0">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/clusters')}>
          <Header title="← Back To Clusters" />
        </div>

        <Button label="Edit Cluster" />
      </div>
    </>
  )
}
