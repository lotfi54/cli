


export const addToCart=(pizza , quantity , varient)=>async(dispatch , getState)=>{


  
    let cartItem = {
        name:pizza.name,
        id: pizza.id,
        image: pizza.image,
        varient:varient,
        quantity: Number(quantity), 
        prices:pizza.prices,
        price : pizza.prices[0][varient]* quantity

    }

      if(cartItem.quantity>10)
    {
        alert('Vous ne pouvez pas ajouté plus de 10 pizza')
    //   <SnackbarContent message="I love snacks."  />
    
    }
    else{
        if(cartItem.quantity<1)
        {
            dispatch({type:'DELETE_FROM_CART' , payload:pizza}) 
        }
        else{
            dispatch({type:'ADD_TO_CART' , payload : cartItem})
        }
       
    }
    
    
    const cartItems = getState().cartReducer.cartItems
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))





}

export const deleteFromCart=(pizza)=>(dispatch , getState)=>{


     dispatch({type:'DELETE_FROM_CART' , payload:pizza})      
     const cartItems = getState().cartReducer.cartItems
     localStorage.setItem('cartItems' , JSON.stringify(cartItems))


  

}