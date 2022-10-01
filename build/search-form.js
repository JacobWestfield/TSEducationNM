import { renderBlock } from './lib.js';
export function renderSearchFormBlock(dateArrival, dateDeparture) {
    const departureDefaultDate = `${dateDeparture.getFullYear()}-${dateDeparture.getMonth()}-0${dateDeparture.getDay()}T00:00`;
    console.log(departureDefaultDate);
    function getMinDate() {
        const year = dateArrival.getFullYear();
        const month = dateArrival.getMonth();
        const day = dateArrival.getDay();
        if (month < 10)
            return `${year}-0${month}-${day}T00:00`;
        return `${year}-${month}-${day}T00:00`;
    }
    function getMaxDate() {
        const month = dateArrival.getMonth() + 1;
        let year = dateArrival.getFullYear();
        if (month === 12)
            year = dateArrival.getFullYear() + 1;
        return `${year}-${month}-30T00:00`;
    }
    const minDate = getMinDate();
    const maxDate = getMaxDate();
    console.log(minDate, maxDate);
    renderBlock('search-form-block', `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="datetime-local" value="${minDate}" min="${minDate}" max="${maxDate}"/>
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="datetime-local" value="${departureDefaultDate}"  min="${minDate} max="${maxDate}"  name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `);
}
