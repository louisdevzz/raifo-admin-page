export default function DropDown({data,options,select,setSelect}
    :{data:any,options:any,select:any,setSelect:any}
){
    return(
        <div className={`relative group ${options}`}>
            <select value={select} onChange={setSelect} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option defaultValue={""}>-- Vui lòng chọn --</option>
                {data.map((dt:any,i:any)=>(
                    <option key={i} className="px-2 py-3" value={dt.value}>{dt.name}</option>
                ))}
            </select>
        </div>
    )
}