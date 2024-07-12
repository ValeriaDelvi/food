import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultsList";
import useResults from "../hooks/useResults";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' | '$$$'
        return results.filter(result => {
            return result.price === price;
        })
    };



    //spostiamo la logica del nostro API in un'altro file useResults


    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Sono Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found: {results.length} results</Text>
            <Text>Quello che scrivi nel search: {term}</Text>
            <ScrollView>
                <ResultList 
                results={filterResultsByPrice('$')} 
                title="Cost Effective" 
    
                />
                <ResultList 
                results={filterResultsByPrice('$$')} 
                title="Bit Pricer" 
     
                />
                <ResultList 
                results={filterResultsByPrice('$$$')} 
                title="Big Spender" 
       
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#ffffff',
        flex:1
    }
})

export default SearchScreen;