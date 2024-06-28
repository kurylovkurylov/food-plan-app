import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import { navigationData } from './navigation-data'

import styles from './styles.module.scss'

export const Header: FC = () => {
  return (
    <div className={styles.Header}>
      <h3 className={styles.Header__title}>FoodPlan</h3>
      <ul className={styles.Navigation}>
        {navigationData.map(({ title, path }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                clsx(styles.Navigation__item, {
                  [styles.Navigation__item_active]: isActive,
                })
              }
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
