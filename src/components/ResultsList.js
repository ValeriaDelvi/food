import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";

import ResultsDetail from "./ResultsDetail";

const ResultList = ({title, results, navigation})=>{
    //se ci sono 0 risultati per una lista, 
    //non mostrarmi la lista
    if(!results.length){
        return null;
    }

    return (
    <View style={styles.containerStyle}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
         horizontal
         showsHorizontalScrollIndicator={false}
         data={results}
         keyExtractor={(result)=>result.id}
         renderItem={({item})=> {
            return (<TouchableOpacity onPress={()=> navigation.navigate('ResultsShow', {id: item.id})}>
            <ResultsDetail result={item}/>
            </TouchableOpacity>
            )
         }}
        />
        <Text style={{marginLeft:15}}>Results: {results.length}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15
    },
    containerStyle:{
        marginBottom:10
    }
});

export default withNavigation(ResultList);