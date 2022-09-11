import React from 'react'

import { View } from 'react-native'
import Movies from '../components/Movies'
import SearchBar from '../components/SearchBar'
import useMovieStore from '../store/useStore'


const HomePage = (props) =>
{
    const movieList = useMovieStore(state => state.movieList)

    return (
        <View>
            <SearchBar />
            <Movies movieList={movieList} />
        </View>
    )
}

export default HomePage