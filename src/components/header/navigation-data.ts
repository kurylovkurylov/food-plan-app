import { Routes } from '@/constants/routes'

export interface INavigationItem {
  title: string
  path: Routes
}

export const navigationData: INavigationItem[] = [
  {
    title: 'Plans',
    path: Routes.PLANS,
  },
  {
    title: 'Products',
    path: Routes.PRODUCTS,
  },
  {
    title: 'Profile',
    path: Routes.PROFILE,
  },
]
