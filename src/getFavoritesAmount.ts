


export function getFavoritesAmount(): void {
  const randomNumber: unknown = Math.floor(Math.random() * 10)
  
  localStorage.setItem('favoritesAmount', randomNumber as string)
}