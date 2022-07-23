import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import filterDepartaments from '../../../utils/filterDepartaments'
import MediaCell from './MediaCell'

function CreditsFullList({ credits }) {
    //получаем из массива всех фильмов объект уникальных должностей исполняемые этим человеком
    //и делаем из него массив формата [["должность", [фильмы в этой должности], ...]]
    const uniqueListCrew = filterDepartaments(credits.crew)
    const arrListCrew = Object.entries(uniqueListCrew)
    // преобразуем его в новый массив такого же формата, но с отсортироваными по дате фильмами
    const arrListCrewSorted = arrListCrew.map(outsideArr => [outsideArr[0], [...outsideArr[1]].sort((a, b) => sortByRealese(a, b))])
    // тоже самое для фильмов где человек выступал актером
    const arrListActingSorted = !!credits.cast.length ? [['Acting', [...credits.cast].sort((a, b) => sortByRealese(a, b))]] : []
    // соедеяем все в один массив для рендера всех фильмов отсортированых по колличеству работ в конкретной должности 
    const arrToRender = [...arrListCrewSorted, ...arrListActingSorted].sort((a, b) => a[1].length > b[1].length ? -1 : 1)
    const [filterRender, setFilterRender] = useState('All')
    const allCreditsLength = credits.cast.length + credits.crew.length

    function sortByRealese(a, b) {
        if (a.media_type === 'tv' && b.media_type === 'tv') {
            return a.first_air_date > b.first_air_date ? 1 : -1;
        } else if (a.media_type === 'tv' && b.media_type === 'movie') {
            return a.first_air_date > b.release_date ? 1 : -1;
        } else if (a.media_type === 'movie' && b.media_type === 'tv') {
            return a.release_date > b.first_air_date ? 1 : -1;
        } else {
            return a.release_date > b.release_date ? 1 : -1;
        }
    }

    return (
        <section className='credits_full_list'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Departament</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterRender}
                    label="Departament"
                    onChange={e => setFilterRender(e.target.value)}
                >
                    <MenuItem value='All'>All ({allCreditsLength})</MenuItem>
                    {arrToRender.map(e =>
                        <MenuItem key={e[0]} value={e[0]}>
                            {e[0]}({e[1].length})
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
            {arrToRender && arrToRender.map(e => {
                if (filterRender === 'All') {
                    return <Listblock key={e[0]} title={e[0]} arrCellls={e[1]}/>
                } else if (e[0] === filterRender) {
                    return <Listblock key={e[0]} title={e[0]} arrCellls={e[1]}/>
                }
            })}
        </section>
    )
}

export default CreditsFullList

function Listblock({title, arrCellls}) {
    return (
        <div className={'list_' + title}>
            <h4>{title}</h4>
            <div className='list_cells'>
                {arrCellls.map(elem => <MediaCell key={elem.id + Math.random()} elem={elem} />)}
            </div>
        </div>
    )
}