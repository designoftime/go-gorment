import axios from "axios";
import { addStoreSetting } from "../reducers/storeSettings";

export function StoreData(){

    return async function StoreDataThunk(dispatch, getState){
        try {

            const res = await axios("/setting/store/customization/all");
            console.log(res);
            dispatch(addStoreSetting(res.data));
            
        } catch (error) {
            console.log(error);
        }
    }
    
}