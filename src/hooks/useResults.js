import { useEffect, useState } from "react";
import api from'../api/api';

//parte 1: prendere la logica della funzione relativa all' API
//quindi le variabili results e error message in questo caso
//fino a useEffect che richiama una ricerca all'avvio della schermata.

//parte 2: vediamo nel blocco jsx dello SearchScreen dopo il return quali riferimenti 
//alle variabili rimangono
//in questo caso: searchApi, errorMessage, results
//e quindi dobbiamo "ritornarle" in qualche modo
// come?
//prima dell'ultima graffa dell'export
//ritorniamo un array con le variabili che ci servono, ovvero
// return [searchApi, results, errorMessage];

//e in SearchScreen
//importiamo il nuovo hook useResults
// aggiungiamo la variabile:
// const[searchApi, results,errorMessage] = useResults();

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try {
            const response = await api.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch (err) {
            setErrorMessage('Qualcosa è andato storto.')
        }
    };
useEffect(()=> {
    searchApi('pasta');
}, []);

return [searchApi, results, errorMessage];
}
