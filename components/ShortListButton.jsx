
import { Button, Vibration } from 'react-native'
import React from 'react'
import useMovieStore from '../store/useStore'


const Separator = () =>
{
    return <View style={Platform.OS === "android" ? styles.separator : null} />;
}

const ShortListButton = ({ movieId, shortListed = false }) =>
{

    const ONE_SECOND_IN_MS = 50;

    const PATTERN = [
        1 * ONE_SECOND_IN_MS,
        2 * ONE_SECOND_IN_MS,
        3 * ONE_SECOND_IN_MS
    ];


    const addShortListedMovie = useMovieStore(state => state.addShortListedMovie)
    const removeShortListedMovie = useMovieStore(state => state.removeShortListedMovie)
    let addToShortList = () =>
    {
        addShortListedMovie(movieId)
        Vibration.vibrate(PATTERN)
    }

    let removeShortList = () =>
    {
        removeShortListedMovie(movieId)
        Vibration.vibrate(PATTERN)
    }


    return shortListed ? <Button title="remove" onPress={removeShortList} /> :
        <Button title="shorlist" onPress={addToShortList} />

}

export default ShortListButton

