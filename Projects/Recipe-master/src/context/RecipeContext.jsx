import { createContext, useState } from "react";

export const recipeContext = createContext()



const RecipeProvider = ({children})=>{
    const [formData, setformData] = useState([])
    
  
    console.log(formData)
    return <recipeContext.Provider value={{setformData,formData}}>
        {children}
    </recipeContext.Provider>
}

export default RecipeProvider