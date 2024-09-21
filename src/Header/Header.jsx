import Filter from "./Filter/Filter"
import Search from "./Search/Search"

function Header() {
    return (
        <>
        <div className="headerBox flex justify-between items-center w-full h-20 bg-white pl-20 pr-20  dark:bg-black dark:text-white" >
            <Search />
            <Filter />
        </div>

        </>
    )
}

export default Header
 