import { handlePrice, isVariantAvailable } from "../../../Redux/actions/productService";

const Variant = ({index, product, variantData, setVariantPrice, setIsQuantityAvailable, focusVariants,setFocusVariants}) => {

    return (
        <div className="d-flex justify-content-between">
            {
                product?.variants ? product.variants.map((variant,idx) => {

                    const checkVariant = isVariantAvailable(variantData,variant);
                    if(!checkVariant) return;

                    let variantID = Object.values(variant)[0];
                    
                    return (
                        <div className=" mt-3 text-center mx-auto vpselect-size" key={idx}>
                        <div className='py-1'>
                            <button className={`vpselect-size-box ${(focusVariants[index]===variantID && "vpselect-size-box-focus")}`} onClick={() => {
                                handlePrice(variantData, variant, index, setVariantPrice, setIsQuantityAvailable);
                                setFocusVariants((prev) => {
                                    const updatedArray = [...prev];
                                    updatedArray[index] = variantID; 
                                    return updatedArray; 
                                });
                            }}>{checkVariant?.name?.en && checkVariant.name.en}</button>
                        </div>
                    </div>
                    )
                }) : null
            }
        </div>
        )
}

export default Variant;