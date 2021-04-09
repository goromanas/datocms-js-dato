import React, { useState } from 'react'
import { useMenu } from '../../graphql/useMenu'
import {
  MenuItem,
  MenuWrapper,
  MobileWrapper,
  StyledBurger,
  MainWrapper,
  MobileMenuItem,
  Link,
} from './Menu.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useHideInformation } from '../../graphql/useHideInformation'
import { formatMenuItems, generateMenuLink, handleMenuItems } from '../../libs'

const Menu = () => {
  const menuItems = useMenu()
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials, hideArticles } = itemsToHide
  const items = handleMenuItems(menuItems, hideTestimonials, hideArticles)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClick = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const { pageMenuItems, anchorMenuItems } = formatMenuItems(items)

  const MainMenu = () => {
    return (
      <MainWrapper>
        {pageMenuItems.map((item) => (
          <MenuItem key={item.node.id}>
            <Link to={`/${item.node.link}`} activeClassName="active">
              {item.node.title}
            </Link>
          </MenuItem>
        ))}
        {anchorMenuItems.map((item) => (
          <MenuItem key={item.node.id}>
            <AnchorLink to={generateMenuLink(item.node.link)}>{item.node.title}</AnchorLink>
          </MenuItem>
        ))}
      </MainWrapper>
    )
  }

  const MobileMenu = () => {
    return (
      <MobileWrapper menuOpen={mobileMenuOpen}>
        {pageMenuItems.map((item) => (
          <MobileMenuItem key={`${item.node.id}-mobile`} onClick={() => setMobileMenuOpen(false)}>
            <Link to={`/${item.node.link}`} activeClassName="active__mobile">
              {item.node.title}{' '}
            </Link>
          </MobileMenuItem>
        ))}
        {anchorMenuItems.map((item) => (
          <MobileMenuItem key={`${item.node.id}-mobile`} onClick={() => setMobileMenuOpen(false)}>
            <AnchorLink to={generateMenuLink(item.node.link)}>{item.node.title} </AnchorLink>
          </MobileMenuItem>
        ))}
      </MobileWrapper>
    )
  }

  return (
    <MenuWrapper>
      <StyledBurger onClick={() => handleClick()} menuOpen={mobileMenuOpen} />
      <MainMenu />
      <MobileMenu />
    </MenuWrapper>
  )
}

export default Menu
