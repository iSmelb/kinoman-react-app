import React from 'react'
import MyButon from '../Mybutton/MyButton'
import PersonPreview from '../PreviewReusable/PersonPreview';

function PeoplePageContent({ peopleList, pages, type = 'popular' }) {
    const {current_page, total_pages, changePage} = pages

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
            {peopleList.map(person => <PersonPreview key={person.id} personInfo={person} sizeImg='size235and235' />)}
            {peopleList &&
                <div className='load_more_div'>
                    <MyButon
                        disabled={current_page === total_pages ? true : false}
                        onClick={() => changePage()}
                    >
                        Load more
                    </MyButon>
                </div>
            }
        </div>
    );
}

export default PeoplePageContent