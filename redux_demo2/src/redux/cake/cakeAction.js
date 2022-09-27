import { BUY_CAKE } from "./cakeTypes"

export const buyCake = (num = 1) =>{
    return {
        type:BUY_CAKE,
        payload : num
    }
}

///num is 1...by default,if we wont sent num of cakes to remove..it takes 1..else it takes input tat passed as props in
//NewCakeContainer.js
