export default function Search() {
    return (

        <form className="relative">
            <div className="flex ">
                <label htmlFor="search-dropdown" className="mb-2 text-sm sr-only ">Search</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className=" flex-shrink-0 inline-flex items-center text-center py-2.5 px-4 text-sm bg-neutral50 dark:bg-dark border border-dark25 dark:border-dark25 hover:bg-dark25 dark:hover:bg-gray-600 rounded-l-3xl focus:outline-none" type="button">All categories <svg aria-hidden="true" className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                    <div id="dropdown" className="absolute top-full z-10 bg-neutral50 dark:bg-dark divide-y divide-gray-100 rounded-lg shadow w-40 ">
                        <ul className="py-2 text-sm" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-dark25 dark:hover:bg-gray-600 ">Cuisine</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-dark25 dark:hover:bg-gray-600 ">Meal</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-dark25 dark:hover:bg-gray-600 ">Cocktail</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-dark25 dark:hover:bg-gray-600 ">Other</button>
                            </li>
                        </ul>
                    </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-1 text-sm bg-gray-100 dark:bg-dark rounded-r-3xl border border-dark25 focus:outline-none focus:border-accent placeholder:text-dark25 transition-colors duration-300 ease-in-out" placeholder="Cuisine, Meal, Cocktail..." required/>
                    <button type="submit" className="absolute top-0 right-0 bottom-0 p-2.5 text-sm bg-primary rounded-3xl border border-accent hover:bg-accent focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    )
}
