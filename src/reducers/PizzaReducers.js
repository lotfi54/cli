export const getAllPizzasReducer=(state={}, action)=>{
    
    // eslint-disable-next-line default-case
    switch(action.type)
    {
     
            case 'GET_PIZZAS_REQUEST' : return {
                ...state
            }
            case 'GET_PIZZAS_SUCCESS' : return {
                pizza:action.payload
            }
            case 'GET_PIZZAS_FAILED' : return {
                error:action.payload
            }
            default :return state
            
    }
   
}