export default function filterDepartaments(crew) {
    const obj = {}

    crew.forEach(e => {
        if (!obj[e.department]) {
            obj[e.department] = []
            obj[e.department].push(e)
        } else {
            obj[e.department].push(e)
        }
    })

    return obj
}