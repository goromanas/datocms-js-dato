import React from 'react'
import { useMenu } from '../../graphql/useMenu'
import { MenuItem, MenuWrapper } from './Menu.style'

const Menu = () => {
  const menuItems = useMenu()
  console.log(menuItems)
  return (
    <MenuWrapper>
      {menuItems.menu.edges.map((item) => (
        <MenuItem key={item.node.id}>{item.node.title}</MenuItem>
      ))}
    </MenuWrapper>
  )
}

export default Menu
