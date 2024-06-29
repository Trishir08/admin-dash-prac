import React from 'react'
import SideBar from '../ui/dashboard/sidebar/SideBar'
import NavBar from '../ui/dashboard/navbar/NavBar'
import styles from "../ui/dashboard/dashboard.module.css"

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <SideBar/>
        </div>
        <div className={styles.content}>
            <NavBar/>
            {children}
        </div>
    </div>
  )
}

export default layout