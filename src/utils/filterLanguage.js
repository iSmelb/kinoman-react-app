export default function filterLang(arr) {
    const obj = {
        noLang: []
    }

    arr.forEach(e => {
        
        if (!obj[e.iso_639_1] && e.iso_639_1) {
            obj[e.iso_639_1] = []
            obj[e.iso_639_1].push(e)
        } else if (obj[e.iso_639_1]) {
            obj[e.iso_639_1].push(e)
        } else {
            obj.noLang.push(e)
        }
    })
    return obj
}