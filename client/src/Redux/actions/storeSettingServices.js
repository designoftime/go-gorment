import { addCategories, addStoreSetting } from "../reducers/storeSettings";
import requests from "../../Services/httpService";

export function StoreData(){

    return async function StoreDataThunk(dispatch, getState){
        try {

            const res = await requests.get("/setting/store/customization/all");
            dispatch(addStoreSetting(res));
            
            const categoryRes = await requests.get("/category/show");
            if(categoryRes[0] && categoryRes[0]?.children){
                dispatch(addCategories(categoryRes));
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    
}

export function StoreCategoriesData(){

return async function StoreCategoriesDataThunk(dispatch, getState){
    try {

        const res = await requests.get("/category/show");
        console.log(res);
        dispatch(addCategories(res.data[0].children));
        
    } catch (error) {
        console.log(error);
    }
}

}