import React from "react";
import { View, TextInput,StyleSheet } from "react-native";
import Feather from '@expo/vector-icons/Feather';


const SearchBar = ({term, onTermChange, onTermSubmit})=>{
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style={styles.iconStyle} />
        <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Search here"
        style={styles.inputStyle}
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0eeee',
        height: 50,
        borderRadius: 5,
        margin: 15,
        flexDirection: 'row'
    },
    inputStyle:{
        borderColor: 'black',
        borderWidth:1,
        flex:1, 
        fontSize:18
    }, 
    iconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal:15
    
    }
});

export default SearchBar;