export const addCurrency = (price) => {
  return `${price} EUR`
}

export const handleMenuItems = (menu, hideTestimonials, hideArticles) => {
  const hideItems = []
  if (hideTestimonials) hideItems.push('atsiliepimai')
  if (hideArticles) hideItems.push('straipsniai')
  return menu.menu.edges.filter((item) => !hideItems.includes(item.node.title.toLowerCase()))
}
