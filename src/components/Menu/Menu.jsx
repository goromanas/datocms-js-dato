import React from 'react'
import { useMenu } from '../../graphql/useMenu'
import { MenuItem, MenuWrapper } from './Menu.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useHideInformation } from '../../graphql/useHideInformation'
import { handleMenuItems } from '../../libs'

const Menu = () => {
  const menuItems = useMenu()
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials, hideArticles } = itemsToHide

  const items = handleMenuItems(menuItems, hideTestimonials, hideArticles)

  return (
    <MenuWrapper>
      {items.map((item) => (
        <MenuItem key={item.node.id}>
          <AnchorLink to={`/#${item.node.link}`}>{item.node.title} </AnchorLink>
        </MenuItem>
      ))}
    </MenuWrapper>
  )
}

export default Menu
