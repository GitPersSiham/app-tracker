import axios from "axios";


const url ="https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
let changeablUrl = url


if(country){

changeablUrl = `${url}/countries/${country}`;

}

try { 
const {data:{confirmed,recovered,deaths,lastUpdate}} = await axios.get(changeablUrl);


return{
 confirmed,
 recovered,
 deaths,
 lastUpdate,
}
} catch(err){


}

}

export const fetchCountries = async () => { 
try{
const { data :{ countries }} = await axios.get(`${url}/countries`);
return countries.map((country) => country.name);
}catch(error){
console.log(error)

}
  
}