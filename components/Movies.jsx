import { FlatList, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import useMovieStore from '../store/useStore'
import ShortListButton from './ShortListButton'
import { Dimensions } from 'react-native';
import { GlobalStyles } from '../style'


const isMovieShortlisted = (shortListedMovies, itemData) =>
{
    const index = shortListedMovies.findIndex((movie) =>
    {
        return movie.imdbID == itemData.item.imdbID
    })

    if (index == -1) return false
    return true
}


function renderMovieList(itemData, shortListedMovies)
{

    return <View style={styles.movie_conatainer}>
        <Image source={{ uri: itemData.item.Poster }}
            style={styles.img}
        />
        <View style={styles.movie_meta_container}>
            <CustomText value={`${itemData.item.Title}`} />
            <CustomText value={`${itemData.item.Year}`} extraStyle={styles.year} />
            <ShortListButton movieId={itemData.item.imdbID} shortListed={isMovieShortlisted(shortListedMovies, itemData)} />

        </View>
    </View>
}

const Movies = ({ movieList, route }) =>
{

    const shortListedMovies = useMovieStore(state => state.shortListedMovies)

    if (!movieList.length && route === "ShortListed")
    {
        return <View style={{ ...styles.container, ...styles.emptylist }}>
            <CustomText value={"Empty"} extraStyle={{ fontSize: 30 }} />
        </View >
    }

    return (
        <View style={styles.container}>

            <FlatList contentContainerStyle={{ paddingBottom: 150 }} data={movieList} renderItem={item => renderMovieList(item, shortListedMovies)}
                keyExtractor={item => item.imdbID} numColumns={2} />
        </View>
    )
}

export default Movies

const styles = StyleSheet.create({
    container: {
        backgroundColor: GlobalStyles.colors.primaryColor,
        height: Dimensions.get('window').height,

    },
    emptylist: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"

    },
    movie_conatainer: {
        flexGrow: 1,
        flexDirection: "row",
        overflow: "hidden",
        height: 150,
        paddingRight: 10,
        paddingLeft: 10,
        marginTop: 20,
        alignItems: "center"
    },
    movie_meta_container: {
        width: 90,
        height: 110,
        flexDirection: "column",
        justifyContent: "space-between",
        color: GlobalStyles.colors.textColor,
        marginLeft: 8

    },
    img: {
        width: 80,
        height: 125,
        borderRadius: 12

    },
    year: {
        backgroundColor: GlobalStyles.colors.secondaryColor,
        alignSelf: "flex-start",
        paddingHorizontal: 12,
        paddingVertical: 4,
        fontSize: 16,
        borderRadius: 8
    }

})