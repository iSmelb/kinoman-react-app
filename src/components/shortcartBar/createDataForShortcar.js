export default function createDataForShortcar(type, id) {
    const barMenu = [
        {
            name: 'overview',
            links: [
                { name: 'main', path: `/${type}/${id}` },
                { name: 'cast', path: `/${type}/${id}/cast` }
            ]
        },
        {
            name: 'media',
            links: [
                { name: 'posters', path: `/${type}/${id}/media/posters` },
                { name: 'backdrops', path: `/${type}/${id}/media/backdrops` },
                { name: 'video', path: `/${type}/${id}/media/video`}
            ]
        },
        {
            name: 'fandom',
            links: [
                { name: 'reviews', path: `/${type}/${id}/reviews?page=1` },
            ]
        }
    ]

    if (type === 'tv') {
        barMenu[0].links.push({ name: 'seasons', path: `/${type}/${id}/seasons` })
    }

    return barMenu
}