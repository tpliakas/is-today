import { days } from "../constants.js";

export const todayIs = () => {
    const today = new Date();

    return days[today.getDay()];
}