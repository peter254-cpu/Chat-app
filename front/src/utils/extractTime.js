export function extractTime(dateString){
    const date = new Date(dateString);
    const hours = padZero(date.getHours())
    const minutes = padZero(date.getMinutes())
    return `${hours}:${minutes}`
}

//Helper funtion to get single-digits number with a leading zero
function padZero(number){
    return number.toString().padStart(2, "0")
}