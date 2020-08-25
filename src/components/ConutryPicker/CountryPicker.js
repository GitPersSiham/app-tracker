import React ,{ useState, useEffect} from"react";
import {NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries} from '../../Api';

const CountryPicker = ({handleCountryChange}) => {
    const [fetchedCountries, setFetchedContries] = useState([]);

useEffect(() => {
const fetchAPI = async () =>{
setFetchedContries(await fetchCountries());

}
fetchAPI();
},[setFetchedContries]);




return(

<FormControl className={styles.formControl}>
  <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
  <option  value="global"> Global</option>
  {fetchedCountries.map((country, index) => <option key={index} value={country}>{country}</option>)}
  </NativeSelect>
</FormControl>

);
}
export default CountryPicker ;