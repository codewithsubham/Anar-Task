import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GlobalStyles } from '../style'

const CustomText = ({ value, extraStyle }) =>
{
    return (
        <Text style={{ ...styles.text_color, ...extraStyle }}>{value}</Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    text_color: {
        color: GlobalStyles.colors.textColor,
        fontSize: 15,
        fontWeight: "600"
    }
})