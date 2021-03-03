import React from 'react'
import { useServices } from '../../graphql/useServices'

const Services = () => {
  const { allDatoCmsService } = useServices()

  return (
    <div>
      {allDatoCmsService.edges.map((service) => (
        <div key={service.node.id}>{service.node.title}</div>
      ))}
    </div>
  )
}

export default Services
