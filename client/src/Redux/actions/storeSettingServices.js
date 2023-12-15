import axios from "axios";
import { addCategories, addStoreSetting } from "../reducers/storeSettings";

export function StoreData(){

    return async function StoreDataThunk(dispatch, getState){
        try {

            const res = await axios("/setting/store/customization/all");
            console.log(res);
            dispatch(addStoreSetting(res.data));
            
            const categoryRes = await axios("/category/show");
            if(categoryRes?.data[0]?.children){
                dispatch(addCategories(categoryRes.data[0].children));
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
}

export function StoreCategoriesData(){

return async function StoreCategoriesDataThunk(dispatch, getState){
    try {

        const res = await axios("/category/show");
        dispatch(addCategories(res.data[0].children));
        
    } catch (error) {
        console.log(error);
    }
}

}