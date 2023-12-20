import axios from "axios";
import { useEffect, useState } from "react";

const Variant = ({variantData}) => {

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

    return (
        <div className="col-sm-3 mt-3 text-center vpselect-size-box">
            <div className='py-1'>
                <p>{variantVal?.name?.en ? variantVal?.name?.en : "Hello"}</p>
            </div>
        </div>
        )
}

export default Variant;