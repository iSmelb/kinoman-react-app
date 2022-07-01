import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CreditsFullList({ credits }) {
    const objListCrew = filterJobs(credits.crew)
    const arrListCrew = Object.entries(objListCrew)
    const arrListCrewSorted = arrListCrew.map(outsideArr => [outsideArr[0], [...outsideArr[1]].sort((a, b) => sortByRealese(a, b))])
    const arrListActingSorted = [['Acting', [...credits.cast].sort((a, b) => sortByRealese(a, b))]]
    const arrToRender = [...arrListCrewSorted, ...arrListActingSorted].sort((a, b) => a[1].length > b[1].length ? -1 : 1)
    const [filterRender, setFilterRender] = useState('All')

    function filterJobs(crew) {
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
    const renderCell = (elem) => {
        if (elem.media_type === 'tv') {
            return <div key={elem.id + Math.random()} className='cellElem'>
                <div className='year'>
                    {elem.first_air_date ? elem.first_air_date.slice(0, 4) : '-'}
                </div>
                {('character' in elem) &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${elem.id}`}>{elem.original_name}</Link> ({elem.episode_count} episodes) as {elem.character || '-'}
                        </p>
                    </div>
                }
                {elem.department &&
                    <div className='title'>
                        <p>
                            <Link to={`/tv/${elem.id}`}>{elem.original_name}</Link> ({elem.episode_count} episodes) ... {elem.job}
                        </p>
                    </div>
                }
            </div>
        }
        return <div key={elem.id + Math.random()} className='cellElem'>
            <div className='year'>
                {elem.release_date ? elem.release_date.slice(0, 4) : '-'}
            </div>
            {('character' in elem) &&
                <div className='title'>
                    <p>
                        <Link to={`/movies/${elem.id}`}>{elem.title}</Link> as {elem.character || '-'}
                    </p>
                </div>
            }
            {elem.department &&
                <div className='title'>
                    <p>
                        <Link to={`/movies/${elem.id}`}>{elem.title}</Link> ... {elem.job}
                    </p>
                </div>
            }
        </div>
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
                                    {e[1].map(elem => renderCell(elem))}
                                </div>
                            </div>
                } else if (e[0] === filterRender) {
                    return <div key={e[0]} className={'list_' + e[0]}>
                                <h4>{e[0]}</h4>
                                <div className='list_cells'>
                                    {e[1].map(elem => renderCell(elem))}
                                </div>
                            </div>
                }   
            })}
        </section>
    )
}

export default CreditsFullList