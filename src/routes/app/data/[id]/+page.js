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
    }


    throw error(404, "NOT FOUND")

        
    }


const fetchData = async (collection) => {

    const pb = new PocketBase('http://45.79.208.204:8080');

    let list = []

    const resultList = await pb.collection(collection).getList(1, 50);

    list = resultList.items
    
    console.log(list)
    
    return list
    
    
}