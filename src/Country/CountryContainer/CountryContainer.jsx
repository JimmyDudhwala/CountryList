import { useContext, useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";
import ShimmerEffect from "../../skelotonLoding/shimmerEffect";
import { ContextQuery } from "../../contextQuery/ContextQuery";
// import CountryData from '../../CountryData'


function CountryContainer() {

const{query} = useContext(ContextQuery);

  // //method 1 direct store json file and collect data by export and import

  //   const Country = CountryData.filter((data)=> data.name.common.toLocaleLowerCase().includes(query)).map((data) => {
  //     return (
  //       <>
  //           <CountryCard name={data.name.common} flag={data.flags.svg} population={data.population} region={data.region} capital={data.capital} />
  //       </>
  //     );

  //   });

  //   return (
  //     <>
  //       <div className="flex flex-wrap justify-start items-center pl-20 pr-10 gap-5 mt-10 ">
  //         {
  //         Country
  //         }
  //       </div>
  //     </>
  //   );

  // //method 2 fetch data from api and collect data

  //   let Country = []; we use useState bcz we want to update the state of country when we get the data from api if we dont use useState then fetch function will run only once and we will not get the updated data

  //   let [Country, setCountry] = useState([]);
  // if(Country.length === 0){                       // // if we dont use this condition then fetch function will run continuosly and we will get the data again
  // // but this approch is wrong if we need contry array to be empty but when contry.lenth=0 then only fetch function will run and we dont get empty arry

  //   fetch(`https://restcountries.com/v3.1/all`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCountry(data);

  //     });
  // }

  // //due t0 continuose calling of api we use useEffect to call api only once
  // //method 3 fetch data from api and collect data

  let [Country, setCountry] = useState([]); //useState is used to store the data that we get from api and we use setCountry to update the state of country
  const [loading, setLoading] = useState(true); // State to track loading status
  // let [loading, setLoading] = useState(true); //useState is used to store the data that we get from api and we use setCountry to update the state of country

    //   let [count, setCount] = useState(0);
   

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((response) => response.json())
      .then((data) => {  
        setCountry(data);    
        setLoading(false);    
      });
        
    //   const intervalId = setInterval(() => {
    //     console.log('running countriesList component');
    //   }, [1000])
  
    //   console.log(intervalId);   
  
  return() => {
    console.log("useEffect is used, unmout the component");
    // clearInterval(intervalId);
  }
  
},[]); ////empty array is used to call api only once when page is loaded

////below approuch is teach use of useEffect and how to use it with count variable
////useEffect is used to call api when page is loaded and when count is updated
//   useEffect(() => {
//     fetch(`https://restcountries.com/v3.1/all`)
//       .then((response) => response.json())
//       .then((data) => {
//         setCountry(data);
//       });
//       console.log("useEffect is used");
//   }, [count]); ////if we dont use count then api will call only once but if we use count then api will call every time when count is updated

const list = Country.filter((data) =>
    data.name.common.toLocaleLowerCase().includes(query) || data.region.includes(query)

  ).map((data) => {
    return (
      <>

        <CountryCard
        name={data.name.common}
        flag={data.flags.svg}
        population={data.population}
        region={data.region}
        capital={data.capital}
        data={data}
        />
      
      </>
    );
  });


const shimmerList = [...Array(250)].map((_, index) => (
  <ShimmerEffect key={index} />
));

return (
  <>
    {loading ? (
      <div className="flex flex-wrap justify-start items-center p-20 gap-5 bg-white  dark:bg-black dark:text-white ">
        {shimmerList}
      </div>
    ) : (
      <div className="flex flex-wrap justify-start items-center p-20 gap-5 bg-white dark:bg-black dark:text-white">
        {list}
      </div>
    )}
  </>
);
  
}

export default CountryContainer;
