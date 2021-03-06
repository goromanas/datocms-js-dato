import React from 'react'
import { useMenu } from '../../graphql/useMenu'
import { MenuItem, MenuWrapper } from './Menu.style'
import { AnchorLink } from 'gatsby-plugin-anchor-links'
import { useHideInformation } from '../../graphql/useHideInformation'
import { checkWhichPage, generateMenuLink, handleMenuItems } from '../../libs'
import { Link } from 'gatsby'

const Menu = ({ displayArticlesMenu = false }) => {
  const menuItems = useMenu()
  const { itemsToHide } = useHideInformation()
  const { hideTestimonials, hideArticles } = itemsToHide
  const items = handleMenuItems(menuItems, hideTestimonials, hideArticles)

  const MainMenu = () => {
    return (
      <>
        {items.map((item) => (
          <MenuItem key={item.node.id}>
            <AnchorLink to={generateMenuLink(item.node.link)}>{item.node.title} </AnchorLink>
          </MenuItem>
        ))}
      </>
    )
  }

  const ArticlesMenu = () => {
    const isArticlesPage = checkWhichPage('straipsniai')

    return (
      <>
        {!isArticlesPage && (
          <MenuItem key="straipsniai">
            <Link to={`/straipsniai`}>Straipsniai</Link>
          </MenuItem>
        )}
        <MenuItem key="pagrindinis">
          <Link to={`/`}>Pradžia</Link>
        </MenuItem>
      </>
    )
  }

  return <MenuWrapper>{displayArticlesMenu ? <ArticlesMenu /> : <MainMenu />}</MenuWrapper>
}

export default Menu
