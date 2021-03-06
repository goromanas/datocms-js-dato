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
  const path = getCurrentPage()
  if (path === page) return true
  return false
}

export const getCurrentPath = () => {
  return window.location.pathname
}
