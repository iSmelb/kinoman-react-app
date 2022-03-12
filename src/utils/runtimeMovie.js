export default function(min) {
    let runtimeObj = {}
    
    runtimeObj.hours = parseInt(min / 60)
    runtimeObj.minutes = (min % 60) 

    return runtimeObj
}