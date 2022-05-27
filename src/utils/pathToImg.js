export default function pathToImg(path) {
    let correctPath
    let incorrectStart = /^\/https/
    let correctStart = /^https/
    let pathMovieDB = 'https://www.themoviedb.org/t/p/w64_and_h64_face'
    
    if(incorrectStart.test(path)) {
        correctPath = path.replace('/https', 'https')
    } else if(correctStart.test(path)) {
        correctPath = path
    } else {
        correctPath = pathMovieDB + path
    }

    return correctPath
}