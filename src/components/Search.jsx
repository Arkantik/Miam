export default function Search() {
    return (

        <form>
            <div className="flex ">
                <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-dark sr-only dark:text-neutral">Your Email</label>
                <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:outline-none dark:bg-dark dark:hover:bg-gray-600 dark:text-neutral dark:border-dark25" type="button">All categories <svg aria-hidden="true" class="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                    <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-dark">
                        <ul className="py-2 text-sm text-dark dark:text-neutral" aria-labelledby="dropdown-button">
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cuisine</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Meal</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Cocktail</button>
                            </li>
                            <li>
                                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Other</button>
                            </li>
                        </ul>
                    </div>
                <div className="relative w-full">
                    <input type="search" id="search-dropdown" className="block p-2.5 w-full z-1 text-sm text-dark bg-dark25 rounded-r-lg border border-dark25 focus:outline-none focus:border-accent dark:bg-dark dark:border-l-dark25 dark:border-dark25 dark:placeholder-dark25 dark:text-white transition-colors duration-300 ease-in-out" placeholder="Search Mockups, Logos, Design Templates..." required/>
                    <button type="submit" className="absolute top-0 right-0 bottom-0 p-2.5 text-sm text-white bg-primary rounded-r-lg border border-accent hover:bg-accent focus:outline-none">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        <span className="sr-only">Search</span>
                    </button>
                </div>
            </div>
        </form>

    )
}
