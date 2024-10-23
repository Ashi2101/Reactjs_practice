import {React} from 'react';
const FetchData = () => {
  
    fetch('https://restcountries.com/v3.1/independent?status=true',{
      method: "GET"
    })
      .then((res) => {
        
        return res.json();
      })
      .then((data) => {
        console.log("nativeName : "+data[1].tld[0]);
      });
  return (
    <div>

   <h1>Hello fetching Data</h1>
    </div>
  );
};
export default FetchData;