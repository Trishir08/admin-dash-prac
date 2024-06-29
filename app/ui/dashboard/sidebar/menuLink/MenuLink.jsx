'use client'

import React from 'react'
import styles from './menuLink.module.css'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const MenuLink = ({item}) => {

  const pathName = usePathname() 

  return (
    <Link href={item.path} className={`${styles.container} ${pathName.toString() === item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink