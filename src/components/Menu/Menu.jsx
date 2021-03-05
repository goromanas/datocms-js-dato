import React from 'react'
import { useMenu } from '../../graphql/useMenu'
import { MenuItem, MenuWrapper } from './Menu.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Menu = () => {
  const menuItems = useMenu()

  return (
    <MenuWrapper>
      {menuItems.menu.edges.map((item) => (
        <MenuItem key={item.node.id}>
          <AnchorLink to={`/#${item.node.link}`}>{item.node.title} </AnchorLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  )
}

export default Menu
