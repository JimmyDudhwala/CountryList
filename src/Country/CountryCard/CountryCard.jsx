
import { Link } from 'react-router-dom';

function CountryCard(prop) {
    const { name, population, region, capital, flag, data } = prop;
    
    return (
        <> 
            <Link to={`/${name}`} state={{ data }}>
                <div className="country-card border h-80 w-64 p-5 flex flex-col justify-between bg-gray-800 rounded-lg shadow-lg">
                    <div className="country-card__flag h-32 w-full mb-4">
                        <img src={flag} alt="flag" className="object-cover h-full w-full rounded-md" />
                    </div>
                    <div className="country-card__details text-white flex-grow">
                        <h3 className="text-xl font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis">{name}</h3>
                        <p className="truncate"><span className="text-gray-400">Population:</span> {population}</p>
                        <p className="truncate"><span className="text-gray-400">Region:</span> {region}</p>
                        <p className="truncate"><span className="text-gray-400">Capital:</span> {capital}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CountryCard;