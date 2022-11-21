import { renderSearchFormBlock } from './search-form.js'
import { renderSearchStubBlock } from './search-results.js'
import { renderUserBlock } from './user.js'
import { renderToast } from './lib.js'
import { getUserData } from './getUserData.js'
import { IUser } from './Interfaces.js'
import { getFavoritesAmount } from './getFavoritesAmount.js'


window.addEventListener('DOMContentLoaded', () => {
  getUserData()
  const newUser: IUser = JSON.parse(localStorage.getItem('user'))

  getFavoritesAmount();
  newUser.favoriteItemsAmount = JSON.parse(localStorage.getItem('favoritesAmount'))
  
  
  renderUserBlock(newUser)
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
    { text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' },
    { name: 'Понял', handler: () => { console.log('Уведомление закрыто') } }
  )
})
