import {time} from "./storage.js";
import Cookies from 'js-cookie';
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
    push() {
        Cookies.set("lastTimeInput", this.INPUTS.input.value, {expires: new Date(new Date().getTime() + 15 * 60 * 1000)});
    },
    get() {
        this.INPUTS.input.value = Cookies.get("lastTimeInput") || "";
    },
    updateTime(){
        this.TIMES.years.textContent = time.years;
        this.TIMES.days.textContent = time.days;
        this.TIMES.hours.textContent = time.hours;
    }
}