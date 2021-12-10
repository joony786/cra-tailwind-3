import {Axios} from "../utlis/axios";

export const getJokes = async (req)=> {
 const {data} = await Axios.get(req)
 console.log(data)
 return data
}