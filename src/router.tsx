import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Routes } from '@/constants/routes'
import { MainLayout } from '@/layouts/main'

export const router = createBrowserRouter([
  {
    path: Routes.ROOT,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: (
          <Navigate
            to={Routes.PLANS}
            replace
          />
        ),
      },
      {
        path: Routes.PROFILE,
        element: <div>Profile</div>,
      },
      {
        path: Routes.PRODUCTS,
        element: <div>Products</div>,
      },
      {
        path: Routes.PLANS,
        element: <div>Plans</div>,
      },
      {
        path: Routes.PLAN,
        element: <div>Plan</div>,
      },
    ],
  },
  {
    path: Routes.NOT_FOUND,
    element: <Navigate to={Routes.ROOT} />,
  },
])
