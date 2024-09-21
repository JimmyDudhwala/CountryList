import { useContext } from "react";
import { ContextQuery } from "../../contextQuery/ContextQuery";

function Filter() {

    const { setQuery } = useContext(ContextQuery);

    const filterd = (e) => {

        let value = e.target.value;
        setQuery(value);
        console.log(e.target.value);
    }
    return (
        <>
            <select name="" id="" onChange={filterd} className=" w-60 h-10 pl-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:none  transition duration-150 ease-in-out bg-white text-gray-700 hover:bg-gray-100">
                <option value="" hidden>Select a Quntinets</option>
                <option value="Asia">Asia</option>
                <option value="Americas">Americas</option>
                <option value="Europe">Europe</option>
                <option value="Africa">Africa</option>
                <option value="Oceania">Oceania</option>
                <option value="Antarctic">Antarctic</option>
            </select>
        </>
    )
}

export default Filter;