import { error } from '@sveltejs/kit';
import PocketBase from 'pocketbase'

 
/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log(params.id)

    if(params.id == "onetemp"){
        return(
            {
                type: params.id,
                title: "Sector One Temp Data",
                data: fetchData("temp_h_1")
            }
        ) 
    } else if(params.id == "twotemp"){
        return(
            {
                type: params.id,
                title: "Sector Two Temp Data",
                data: fetchData("temp_h_2")
            }
        ) 
    } else if(params.id == "threetemp"){
        return(
            {
                type: params.id,
                title: "Sector Three Temp Data",
                data: fetchData("temp_h_3")
            }
        ) 
    } else if(params.id == "onehumid"){
        return(
            {
                type: params.id,
                title: "Sector One Humidity Data",
                data: fetchData("humid_h_1")
            }
        ) 
    } else if(params.id == "twohumid"){
        return(
            {
                type: params.id,
                title: "Sector Two Humidity Data",
                data: fetchData("humid_h_2")
            }
        ) 
    } else if(params.id == "threehumid"){
        return(
            {
                type: params.id,
                title: "Sector Three Humidity Data",
                data: fetchData("humid_h_3")
            }
        ) 
    } 


    throw error(404, "NOT FOUND")

        
    }


const fetchData = async (collection) => {

    const pb = new PocketBase('http://45.79.208.204:8080');

    let list = []

    const resultList = await pb.collection(collection).getList(1, 50000, {
        sort: ' created'
    });

    list = resultList.items
    
    console.log(list)
    
    return list
    
    
}