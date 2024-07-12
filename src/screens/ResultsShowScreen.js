import React, {useState, useEffect} from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import api from "../api/api";

const ResultsShowScreen = ({navigation})=>{
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');
    //console.log(id); per vedere se va il click
     console.log(result); //per vedere le specifiche del ristorante clikkato

    const getResult = async (id) =>{
        const response = await api.get(`/${id}`);
        setResult(response.data);
    };

useEffect(()=>{
    getResult(id);
},[]);

if(!result){
    return null;
}

    return (
    <View>
        <Text>{result.name}</Text>
        <FlatList
        data={result.photos}
        keyExtractor={photo=>photo}
        renderItem={({item})=>{
            return <Image style={styles.imageStyle} source={{uri: item}}/>
        }}
        />

      
    </View>
    );
};

const styles = StyleSheet.create({
    imageStyle:{
        height:200,
        width: 300
    }
});

export default ResultsShowScreen;