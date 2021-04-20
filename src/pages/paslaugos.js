import Layout from '../layouts/layout'
import React from 'react'
import { useServices } from '../graphql/useServices'
import ServicePageElement from '../components/Services/ServicePageElement/ServicePageElement'

const ServicesPage = () => {
  const { services } = useServices()
  console.log(services)

  return (
    <Layout title="Paslaugos" seo={services.seo}>
      <ServicePageElement services={services} horizontal />
    </Layout>
  )
}
export default ServicesPage
