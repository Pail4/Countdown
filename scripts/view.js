import {time} from "./storage.js";
export const UI = {
    INPUTS: {
        form: document.querySelector(".inputs-form"),
        input: document.querySelector(".inputs-form__line"),
        button: document.querySelector(".inputs-form__button")
    },
    TIMES: {
        years: document.querySelector(".time-left-block__years"),
        days: document.querySelector(".time-left-block__days"),
        hours: document.querySelector(".time-left-block__hours"),
    },
    updateTime(){
        this.TIMES.years.textContent = time.years;
        this.TIMES.days.textContent = time.days;
        this.TIMES.hours.textContent = time.hours;
    }
}