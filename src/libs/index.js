import { breakpointsWithoutPixels } from '../styles/breakpoints'

export const addCurrency = (price) => {
  return `${price} EUR`
}

export const handleMenuItems = (menu, hideTestimonials, hideArticles) => {
  const hideItems = []
  if (hideTestimonials) hideItems.push('atsiliepimai')
  if (hideArticles) hideItems.push('straipsniai')
  return menu.menu.edges.filter((item) => !hideItems.includes(item.node.title.toLowerCase()))
}

export const generateMenuLink = (link) => {
  return link.toLowerCase() === 'straipsniai' ? `/${link}` : `/#${link}`
}

export const getCurrentPage = () => {
  const currentRoute = window.location.href
  return currentRoute.slice(currentRoute.lastIndexOf('/') + 1, currentRoute.length)
}

export const checkWhichPage = (page) => {
  if (typeof window !== 'undefined') {
    const path = getCurrentPage()
    return path === page
  }
  return false
}

export const getCurrentPath = () => {
  return window.location.pathname
}

export const getTestimonialtemsLength = (items) => {
  const length = items.length
  if (typeof window !== 'undefined') {
    const currentWidth = window.innerWidth
    let number = 1
    if (currentWidth <= breakpointsWithoutPixels.xs) {
      number = 1
    }
    if (currentWidth >= breakpointsWithoutPixels.sm) {
      number = 2
    }
    if (currentWidth >= breakpointsWithoutPixels.lg) {
      if (length < 5) {
        number = length
      } else {
        number = 3
      }
    }
    return number
  }
}

export const isMobileDevice = () => {
  if (typeof window !== 'undefined') {
    if (window.innerWidth < breakpointsWithoutPixels.md) {
      return true
    }
    return false
  }
}
