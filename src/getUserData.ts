import { IUser } from './Interfaces.js'
import { User } from './myUser.js'
import { usersStorage } from './usersStorage.js'


export function getUserData(): void {
  const index: number = Math.floor(Math.random() * 5);
  const newUser: IUser = new User(usersStorage[index].userName, usersStorage[index].avatarURL)

  localStorage.setItem('user', JSON.stringify(newUser))
}