import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
import { myUser } from './myUser.js';
window.addEventListener('DOMContentLoaded', () => {
    const dateArrival = new Date();
    dateArrival.setDate(dateArrival.getDate() + 1);
    const dateDeparture = new Date();
    dateDeparture.setDate(dateArrival.getDate() + 2);
    console.log(dateArrival, dateDeparture);
    renderUserBlock(myUser);
    renderSearchFormBlock(dateArrival, dateDeparture);
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
