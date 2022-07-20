import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import filterDepartaments from '../../../utils/filterDepartaments'
import MediaCell from './MediaCell'

function CreditsFullList({ credits }) {
    const uniqueListCrew = filterDepartaments(credits.crew, 'departament')
    const arrListCrew = Object.entries(uniqueListCrew)
    const arrListCrewSorted = arrListCrew.map(outsideArr => [outsideArr[0], [...outsideArr[1]].sort((a, b) => sortByRealese(a, b))])
    const arrListActingSorted = !!credits.cast.length ? [['Acting', [...credits.cast].sort((a, b) => sortByRealese(a, b))]] : []
    const arrToRender = [...arrListCrewSorted, ...arrListActingSorted].sort((a, b) => a[1].length > b[1].length ? -1 : 1)
    const [filterRender, setFilterRender] = useState('All')

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
                    <MenuItem value='All'>All</MenuItem>
                    {arrToRender.map(e => 
                        <MenuItem key={e[0]} value={e[0]}>
                            {e[0]}({e[1].length})
                        </MenuItem>)
                    }
                </Select>
            </FormControl>
            {arrToRender && arrToRender.map(e => {
                if (filterRender === 'All') {
                    return <div key={e[0]} className={'list_' + e[0]}>
                                <h4>{e[0]}</h4>
                                <div className='list_cells'>
                                    {e[1].map(elem => <MediaCell key={elem.id + Math.random()} elem={elem}/>)}
                                </div>
                            </div>
                } else if (e[0] === filterRender) {
                    return <div key={e[0]} className={'list_' + e[0]}>
                                <h4>{e[0]}</h4>
                                <div className='list_cells'>
                                    {e[1].map(elem => <MediaCell key={elem.id + Math.random()} elem={elem}/>)}
                                </div>
                            </div>
                }   
            })}
        </section>
    )
}

export default CreditsFullList