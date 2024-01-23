import React from 'react'
import MaintenanceLinearStepper from '../../../components/pages/land_lord_dashboard/MaintenanceStepper/MaintenanceLinearStepper'

const Maintenance = () => {
  return (
    <div>
      <div className='mx-4 px-4 mt-2 border-2 rounded-lg font-bold' style={{ color:"#948c1e" }}> Maintenance </div>
      <div className='m-4'>
        <MaintenanceLinearStepper/>
      </div>
    </div>
  )
}

export default Maintenance
