import { combineReducers } from 'redux';

// IT  IS A STATIC ARRAY SO WE DIDN'T PASS ANY ARGUMENTS
const songsReducer = () => {
    return [
        { title: 'Perfect', duration: '4:05' },
        { title: 'Amnesia', duration: '4:35' },
        { title: 'Photograph', duration: '2:05' },
        { title: 'Girls Like You', duration: '3:05' }
    ];
};


const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer 
});