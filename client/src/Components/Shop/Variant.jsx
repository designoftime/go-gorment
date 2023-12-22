import { useEffect, useState } from "react";
import { fetchPrice } from "../../Redux/actions/productService";
import requests from "../../Services/httpService";

const Variant = ({variantData, setProductPrice, setIsQuantityAvailable}) => {

    const parentId = Object.keys(variantData);
    const childId = Object.values(variantData);
    const [variantVal, setVariantVal] = useState();
    
    useEffect(() => {

        const fetchVariants = async () => {
            const res = await requests.get(`/attributes/child/${parentId[0]}/${childId[0]}`);
            setVariantVal(res);
        }

        fetchVariants();
    },[]);

    const handlePrice = () => {
        const productPrice = {
            price: fetchPrice(variantData),
            subscribePrice: 0
        }
        setProductPrice(productPrice);
        
        if(Number(variantData?.quantity) <= 0){
            setIsQuantityAvailable(false);
        }
        else{
            setIsQuantityAvailable(true);
        }
    }

    return (
        <div className="col-sm-3 mt-3 text-center mx-auto vpselect-size-box">
            <div className='py-1'>
                <button className="" onClick={handlePrice}>{variantVal?.name?.en && variantVal.name.en}</button>
            </div>
        </div>
        )
}

export default Variant;