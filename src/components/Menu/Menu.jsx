import React, { useState } from 'react'
import { useMenu } from '../../graphql/useMenu'
import {
  MenuItem,
  MenuWrapper,
  MobileWrapper,
  StyledBurger,
  MainWrapper,
  MobileMenuItem,
} from './Menu.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useHideInformation } from '../../graphql/useHideInformation'
import { checkWhichPage, generateMenuLink, handleMenuItems } from '../../libs'
import { Link } from 'gatsby'

const Menu = ({ displayArticlesMenu = false }) => {
  const menuItems = useMenu()
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials, hideArticles } = itemsToHide
  const items = handleMenuItems(menuItems, hideTestimonials, hideArticles)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClick = () => {
    setMobileMenuOpen((prev) => !prev)
  }

  const MainMenu = () => {
    return (
      <MainWrapper>
        {items.map((item) => (
          <MenuItem key={item.node.id}>
            <AnchorLink to={generateMenuLink(item.node.link)}>{item.node.title} </AnchorLink>
          </MenuItem>
        ))}
      </MainWrapper>
    )
  }

  const MobileMenu = () => {
    return (
      <MobileWrapper menuOpen={mobileMenuOpen}>
        {items.map((item) => (
          <MobileMenuItem key={`${item.node.id}-mobile`} onClick={() => setMobileMenuOpen(false)}>
            <AnchorLink to={generateMenuLink(item.node.link)}>{item.node.title} </AnchorLink>
          </MobileMenuItem>
        ))}
      </MobileWrapper>
    )
  }

  const ArticlesMenu = () => {
    const isArticlesPage = checkWhichPage('straipsniai')

    return (
      <MainWrapper>
        {!isArticlesPage && (
          <MenuItem key="straipsniai">
            <Link to={`/straipsniai`}>Straipsniai</Link>
          </MenuItem>
        )}
        <MenuItem key="pagrindinis">
          <Link to={`/`}>Pradžia</Link>
        </MenuItem>
      </MainWrapper>
    )
  }

  return (
    <MenuWrapper>
      <StyledBurger onClick={() => handleClick()} menuOpen={mobileMenuOpen} />
      {displayArticlesMenu ? <ArticlesMenu /> : <MainMenu />}
      <MobileMenu />
    </MenuWrapper>
  )
}

export default Menu
