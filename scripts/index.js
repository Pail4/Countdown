import {UI} from "./view.js";
import {time} from "./storage.js";
import dayjs from 'dayjs'

function diffTime(event){
    event.preventDefault();
    UI.push();
    const currentDate = dayjs();
    let targetDate = dayjs(UI.INPUTS.input.value);

    time.years = targetDate.diff(currentDate, 'year');
    targetDate = targetDate.subtract(time.years, 'year');
    time.days = targetDate.diff(currentDate, 'day');
    targetDate = targetDate.subtract(time.days, 'day');
    time.hours = targetDate.diff(currentDate, 'hour');
    UI.updateTime();
}

window.onload = function (){
    UI.get();
    UI.INPUTS.form.addEventListener("submit", diffTime);
    UI.INPUTS.input.min = dayjs().add(1, 'day').format("YYYY-MM-DD");
}