import { TabPanelUnstyled, TabsListUnstyled, TabsUnstyled, TabUnstyled } from '@mui/base'
import React from 'react'
import InteractionWithMedia from '../reusable/InteractionWithMedia'
import MoviePreview from '../UI/PreviewReusable/MoviePreview'
import TvShowPreview from '../UI/PreviewReusable/TvShowPreview'

function MediaList({ allMedia }) {
    const { favorite, watchLater, reviewed } = allMedia
    const getCardToRender = (mediaFile) => {
        if (mediaFile?.title) {
            return <MoviePreview key={mediaFile.id} movie={mediaFile} sizeImg='size220and330' discriptions>
                <InteractionWithMedia mediaFile={mediaFile}/>
            </MoviePreview>
        }
        return <TvShowPreview key={mediaFile.id} tvObj={mediaFile} sizeImg='size220and330' discriptions>
            <InteractionWithMedia mediaFile={mediaFile}/>
        </TvShowPreview>
    }

    return (
        <div className='media_list conteiner'>
            <TabsUnstyled defaultValue={0}>
                <TabsListUnstyled>
                    <TabUnstyled>Favorite: <span>{favorite.length}</span></TabUnstyled>
                    <TabUnstyled>Watch later: <span>{watchLater.length}</span></TabUnstyled>
                    <TabUnstyled>Reviewed: <span>{reviewed.length}</span></TabUnstyled>
                </TabsListUnstyled>
                <TabPanelUnstyled value={0}>
                    {favorite.map(mediaFile => getCardToRender(mediaFile)).reverse()}
                    {!favorite.length && <div className='emtyField'>You haven't added anything yet</div>}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={1}>
                    {watchLater.map(mediaFile => getCardToRender(mediaFile)).reverse()}
                    {!watchLater.length && <div className='emtyField'>You haven't added anything yet</div>}
                </TabPanelUnstyled>
                <TabPanelUnstyled value={2}>
                    {reviewed.map(mediaFile => getCardToRender(mediaFile)).reverse()}
                    {!reviewed.length && <div className='emtyField'>You haven't added anything yet</div>}
                </TabPanelUnstyled>
            </TabsUnstyled>
        </div>
    )
}

export default MediaList