/* создал пользователя как-будто он есть в базе, чтобы его в виде
объекта передавать в параметры функции renderUserBlock(), а там уже деструктурирую
*/
class User {
    constructor(userName, avatar, favoriteItemsAmount) {
        this.userName = userName;
        this.avatar = avatar;
        this.favoriteItemsAmount = favoriteItemsAmount;
    }
}
export const myUser = new User('Wade Warren', '../public/img/avatar.png', 0);
