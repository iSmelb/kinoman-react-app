export default function filterTypeVideo(arr) {
    const obj = {}
    arr.forEach(e => {
        if (!obj[e.type]) {
            obj[e.type] = []
            obj[e.type].push(e)
        } else {
            obj[e.type].push(e)
        }
    })
    return obj
}