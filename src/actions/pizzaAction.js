import axios from 'axios';
export const getAllpizzas=()=>dispatch=>{
    dispatch({type:'GET_PIZZAS_REQUEST'})
    try{
        const response = axios.get('/api/pizza')
        console.log(response);
        dispatch({type:'GET_PIZZAS_SUCCESS',payload : response.data})

    }catch(error){
        dispatch({type:'GET_PIZZAS_FAILED', payload: error})
    }
}