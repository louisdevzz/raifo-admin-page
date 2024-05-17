export default function DropDown(){
    return(
        <>
            <div className="relative group">
                        <div className="w-48">
                            <button id="dropdown-button" className="inline-flex mb-1 justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500">
                                <span className="mr-2">Open Dropdown</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </button>
                            <div id="dropdown-menu" className="hidden w-full group-hover:block absolute right-0 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                                <div className="px-4 py-2 text-gray-700 items-center hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md flex flex-row gap-3">
                                    <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" className="h-6 w-6 accent-teal-600 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-md"> Ảnh </label>
                                </div>
                                <div className="px-4 py-2 text-gray-700 items-center hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md flex flex-row gap-3">
                                    <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" className="h-6 w-6 accent-teal-600 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-md"> Bai </label>
                                </div>
                                <div className="px-4 py-2 text-gray-700 items-center hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md flex flex-row gap-3">
                                    <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" className="h-6 w-6 accent-teal-600 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-md"> HTML </label>
                                </div>
                                <div className="px-4 py-2 text-gray-700 items-center hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md flex flex-row gap-3">
                                    <input type="checkbox" id="htmlCheckbox" name="languageCheckbox" className="h-6 w-6 accent-teal-600 rounded border-gray-300 text-teal-600 shadow-sm focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50 focus:ring-offset-0 disabled:cursor-not-allowed disabled:text-gray-400" />
                                    <label htmlFor="htmlCheckbox" className="flex w-full space-x-2 text-md"> HTML </label>
                                </div>
                            </div>
                        </div>
                    </div>
        </>
    )
}