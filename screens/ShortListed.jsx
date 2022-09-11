import React from 'react'
import { View } from 'react-native'
import Movies from '../components/Movies'
import useMovieStore from '../store/useStore'

const ShortListed = (props) =>
{
    const shortListedMovies = useMovieStore(state => state.shortListedMovies)
    return (
        <View>
            <Movies movieList={shortListedMovies} route={props.route.name} />
        </View>
    )
}

export default ShortListed