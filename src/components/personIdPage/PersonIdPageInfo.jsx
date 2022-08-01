import React from 'react'
import { useSelector } from 'react-redux'
import Biography from '../UI/people_info_reusable/Biography'
import CreditsFullList from '../UI/people_info_reusable/CreditsFullList'
import KnownFor from '../UI/people_info_reusable/KnownFor'
import PersonInfo from '../UI/people_info_reusable/PersonInfo'

function PersonIdPageInfo() {
    const person = useSelector(state => state.person.person)

    return (
        <div className='personId_page_info conteiner'>
            <PersonInfo personObj={person} />
            <div className='content'>
                <Biography personObj={person}/>
                <KnownFor department={person.known_for_department} credits={person.combined_credits}/>
                <CreditsFullList credits={person.combined_credits}/>
            </div>
        </div>
    )
}

export default PersonIdPageInfo