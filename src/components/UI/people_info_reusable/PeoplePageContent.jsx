import React from 'react'
import MyButon from '../Mybutton/MyButton'
import PersonPreview from '../PreviewReusable/PersonPreview';

function PeoplePageContent({ peopleList, changePage, type = 'popular' }) {
    const titles = {
        popular: {
            class: 'popular_people_page',
            title: 'Popular people'
        },
    }

    return (
        <div className={`${titles[type].class} conteiner`}>
            <h1>
                {titles[type].title}
            </h1>
            {peopleList.map(person => <PersonPreview key={person.id} personInfo={person} sizeImg='size235and235'/>)}
            {peopleList &&
                <div className='load_more_div'>
                <MyButon onClick={changePage}>Load more</MyButon>
            </div> 
            }
        </div>
    );
}

export default PeoplePageContent