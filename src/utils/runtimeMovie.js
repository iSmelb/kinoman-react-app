export default function (mins) {
    if (mins <= 60) return mins + 'm';
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'h ' + minutes + 'm';
}