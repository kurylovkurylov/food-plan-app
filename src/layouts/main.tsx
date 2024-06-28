import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/header'

export const MainLayout: FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
