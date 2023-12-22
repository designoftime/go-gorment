import axios from "axios";
import { useEffect, useState } from "react";
import { fetchPrice } from "../../Redux/actions/productService";

const Variant = ({variantData, setProductPrice}) => {

    const parentId = Object.keys(variantData);
    const childId = Object.values(variantData);
    const [variantVal, setVariantVal] = useState();
    
    useEffect(() => {

        const fetchVariants = async () => {
            const res = await axios.get(`/attributes/child/${parentId[0]}/${childId[0]}`);
            setVariantVal(res.data);
        }

        fetchVariants();
    },[]);

    const handlePrice = () => {
        const productPrice = {
            price: fetchPrice(variantData),
            subscribePrice: 0
        }
        setProductPrice(productPrice);
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