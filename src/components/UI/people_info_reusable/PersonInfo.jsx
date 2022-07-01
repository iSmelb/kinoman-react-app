import React from 'react'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon,  } from '@fortawesome/react-fontawesome';

const pathToImg = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2'
const unkownImg = 'https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg'

function PersonInfo({personObj}) {
    const {
        facebook_id,
        instagram_id,
        twitter_id,
    } = personObj.external_ids
    const knownCreditsCount = personObj.combined_credits.cast.length + personObj.combined_credits.crew.length

    return (
        <section className='person_info'>
            <div className='photo'>
                {personObj.profile_path 
                    ? <img src={pathToImg + personObj.profile_path} alt="Person poster" />
                    : <img src={unkownImg} alt="Person poster" />
                }
            </div>
            <div className='social_links'>
                {facebook_id && 
                    <div>
                        <a target='_blank' rel="noreferrer" href={'https://www.facebook.com/' + facebook_id}>
                            <FontAwesomeIcon icon={faFacebook}/>
                        </a>
                    </div>
                }
                {instagram_id && 
                    <div>
                        <a target='_blank' rel="noreferrer" href={'https://www.instagram.com/' + instagram_id}>
                            <FontAwesomeIcon icon={faInstagram}/>
                        </a>
                    </div>
                }
                {twitter_id && 
                    <div>
                        <a target='_blank' rel="noreferrer" href={'https://twitter.com/' + twitter_id}>
                            <FontAwesomeIcon icon={faTwitter}/>
                        </a>
                    </div>
                }
            </div>
            <div className='info'>
                <h3>Personal Info</h3>
                <p>
                    <strong>Known For</strong>
                    {personObj.known_for_department}
                </p>
                <p>
                    <strong>Known Credits</strong>
                    {knownCreditsCount}
                </p>
                <p>
                    <strong>Gender</strong>
                    {personObj.gender === 1 ? 'Female' : 'Male'}
                </p>
                <p>
                    <strong>Birthday</strong>
                    {personObj.birthday}
                </p>
                {personObj.deathday && 
                    <p>
                        <strong>Day of Death</strong>
                        {personObj.deathday}
                    </p>
                }
                <p>
                    <strong>Place of Birth</strong>
                    {personObj.place_of_birth}
                </p>
                <p>
                    <strong>Also Known As</strong>
                    {personObj.also_known_as[0]}
                </p>
                <ul className='name_list'>
                    {personObj.also_known_as.map((namePeson, index) => (index > 0) && 
                        <li key={namePeson}>{namePeson}</li>)
                    }
                </ul>
            </div>
        </section>
    )
}

export default PersonInfo