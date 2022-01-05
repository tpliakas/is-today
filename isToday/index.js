import { days } from "../constants.js";

export const isToday = (givenDay) => {
    if (!givenDay || !days.includes(givenDay.toLowerCase())) return 'No valid day was given.';

    const today = new Date();

    return today.getDay() === days.indexOf(givenDay.toLowerCase());
}
