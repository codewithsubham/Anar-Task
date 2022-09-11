import { StyleSheet, TextInput, View, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'

import { Ionicons } from "@expo/vector-icons"
import axios from 'axios';
import useMovieStore from '../store/useStore';

const OMDBAPI_BASE_URL = "https://www.omdbapi.com/?apikey=40328058&type=movie&s="


const makeRequest = async (searchQuery) =>
{
    try
    {
        const response = await axios.get(OMDBAPI_BASE_URL + searchQuery);
        if (response.data.Error)
        {
            ToastAndroid.show(response.data.Error, ToastAndroid.LONG);
            return []
        }
        return response.data.Search

    }
    catch (error)
    {
        ToastAndroid.show(error.message, ToastAndroid.SHORT);
    }
}

const SearchBar = () =>
{
    const [searchValue, setSearchValue] = useState("");
    const setMovieList = useMovieStore(state => state.setMovieList)


    useEffect(() =>
    {
        if (searchValue === "") return;
        const timer = setTimeout(async () =>
        {
            const result = await makeRequest(searchValue)
            setMovieList(result)
        }, 2000)

        return () =>
        {
            clearTimeout(timer)
        }
    }, [searchValue])

    return (
        <View style={styles.container}>
            <View style={styles.search_container}>
                <Ionicons name="search" size={30} color={"#ccc"} />
                <TextInput value={searchValue} onChangeText={newText => setSearchValue(newText)} style={styles.search_input} selectionColor={"white"} />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",

        backgroundColor: "#181A20"
    },
    search_container: {
        flexDirection: "row",
        paddingTop: 4,
        paddingHorizontal: 16,
        backgroundColor: "#262A34",
        alignItems: "center",
        marginTop: 45,
        width: "90%",
        height: 70,
        borderRadius: 30,

    },
    search_input: {
        flexGrow: 1,

        marginLeft: 8,
        paddingVertical: 20,
        fontSize: 25,
        color: "white",

    }
})