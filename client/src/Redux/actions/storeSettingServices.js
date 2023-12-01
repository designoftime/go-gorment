import { addStoreSetting } from "../reducers/storeSettings";

export function StoreData(){

    return async function StoreDataThunk(dispatch, getState){
        try {

            // api Call
            dispatch(addStoreSetting({
                name: "Gourmet"
            }));
            
        } catch (error) {
            console.log(error);
        }
    }
    
}