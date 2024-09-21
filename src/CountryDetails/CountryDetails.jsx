import { useEffect, useState } from "react";
import "./CountryDetails.css";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CountryDetails() {
  //   const countryName = new URLSearchParams(location.search).get('name') // get the country name from the URL

  // // here we use useParam hook to get the country name from the URL

  const params = useParams();
  const countryName = params.CountryDetails;

  const { state } = useLocation();
  
  const stateData = state ? state.data : null;
  const [countryData, setCountryData] = useState(null);

  function updateData(data) {
    setCountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      subregion: data.subregion,
      capital: data.capital,
      flag: data.flags.svg,
      tld: data.tld,
      languages: data.languages ? Object.values(data.languages).join(", ") : 'N/A',
      currencies: data.currencies
        ? Object.values(data.currencies)
            .map((currency) => currency.name)
            .join(", ")
        : 'N/A',
      borders: [],
    });

    if (!data.borders) {
      data.borders = [];
    }

    Promise.all(
      data.borders.map((border) => {
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([borderCountry]) => borderCountry.name.common);
      })
    ).then((borders) => {
      setCountryData((prevState) => ({ ...prevState, borders }));

      // example of how to use prevState

      //ex:1
      // const [cart, setCart] = useState({
      // items: ['Apple', 'Banana']
      // });

      // ADD
      // setCart((prevState) => {
      // return {
      // ...prevState,
      // items: [...prevState.items, 'Orange']
      // };
      // });

      // resuilt: { items: ['Apple', 'Banana', 'Orange'] }

      //remove
      // setCart((prevState) => {
      // return {
      // ...prevState,
      // items: prevState.items.filter((item) => item !== 'Banana')
      // };
      // });

      // resuilt: { items: ['Apple'] }
    });
  }

  useEffect(() => {
    console.log("useEffect is used");

    if (stateData) {
      updateData(stateData);
      console.log("data from state");
    }
     else {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => res.json())
        .then(([data]) => {
          if (data) {
            updateData(data);
            console.log("data from api");
          } else {
            console.error('No data found for country:', countryName);
          }
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
        });
    }
  }, [countryName, stateData]);
   
  return countryData === null ? (
    "loading..."
  ) : (
    <main>
      <div className="country-details-container bg-white dark:bg-black ">
        <span className="back-button border border-gray-50 bg-slate-200 text-black" onClick={() => history.back()}>
          {" "}
          {/* Router feture histry which has many methods, write histry in conssole to know more aur go to*/}
          <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
        </span>
        <div className="country-details">
          <img src={countryData.flag} alt={`${countryData.name} flag`} />
          <div className="details-text-container ">
            <h1 className="text-6xl bold text-gray-300">{countryData.name}</h1>
            <br />
            <div className="details-text">
              <p>
                <b >Native Name: <span className="text-gray-500">{countryData.nativeName}</span></b>
                <span className="native-name"></span>
              </p>
              <p>
                <b>
                  Population: <span className="text-gray-500">
                    {countryData.population.toLocaleString("en-IN")}
                    </span>
                    
                </b>
                <span className="population"></span>
              </p>
              <p>
                <b>Region: 
                  <span className="text-gray-500">
                  {countryData.region}
                  </span>
                  </b>
                <span className="region"></span>
              </p>
              <p>
                <b>Sub Region: 
                  <span className="text-gray-500">
                  {countryData.subregion}
                  </span>
                  </b>
                <span className="sub-region"></span>
              </p>
              <p>
                <b>Capital: 
                  <span className="text-gray-500">
                  {countryData.capital.join(", ")}
                  </span>
                  </b>
                <span className="capital"></span>
              </p>
              <p>
                <b>Top Level Domain: 
                  <span className="text-gray-500">

                  {countryData.tld}
                  </span>
                  </b>
                <span className="top-level-domain"></span>
              </p>
              <p>
                <b>Currencies: <span className="text-gray-500">
                  {countryData.currencies}
                </span>
                  </b>
                <span className="currencies"></span>
              </p>
              <p>
                <b>Languages:
                  <span className="text-gray-500">
                   {countryData.languages}
                  </span>
                   </b>
                <span className="languages"></span>
              </p>
            </div>
            {countryData.borders.length !== 0 && (
              <div className="border-countries ">
                <b>Border Countries: </b>&nbsp;
                {countryData.borders.map((border) => (
                  <Link key={border} to={`/${border}`} className="border border-gray-50 bg-slate-200 text-black">
                    {border }
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
