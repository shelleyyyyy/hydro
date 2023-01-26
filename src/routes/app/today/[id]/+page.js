import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase'

 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log(params.id)

    if(params.id == "temp"){
        return(
            {
                type: params.id,
                title: "Temperature Data",
                data: fetchData(params.id)
            }
        ) 
    } else if(params.id == "humid"){
        return(
            {
                type: params.id,
                title: "Humidity Data",
                data: fetchData(params.id)
            }
        ) 
    } else if(params.id == "onetemp"){
        return(
            {
                type: params.id,
                title: "Sector One Temp Data",
                data: fetchData("temp_h_1")
            }
        ) 
    }


    throw error(404, "NOT FOUND")

        
    }


const fetchData = async (collection) => {

    const pb = new PocketBase('https://vmihydro.com');

    let list = []

    const resultList = await pb.collection(collection).getList(1, 50000, {
        sort: 'created'
    });

    list = resultList.items
    
    console.log(list)
    
    return list
    
    
}