import React, { useEffect } from "react";
import requests from "../../../Services/httpService";
import Variant from "./Variant";
import { useState } from "react";
import {
    getFirstDifferentVariants,
    handlePrice,
    handlePriceWithoutVariant,
} from "../../../Redux/actions/productService";

const AllVariants = ({ product, setProductPrice, setIsQuantityAvailable }) => {
    const [variants, setVariants] = useState([]);
    const [variantPrice, setVariantPrice] = useState([]);
    const [focusVariants, setFocusVariants] = useState([]);
    const [AvaialableVariants, setAvaialableVariants] = useState([]);

    useEffect(() => {
        const fetchVariants = async () => {
            if (product?.variants?.length === 0) {
                handlePriceWithoutVariant(
                    product,
                    setVariantPrice,
                    setIsQuantityAvailable
                );
                return;
            }

            const res = await requests.get(`/attributes/show`);

            if (product?.variants) {
                const firstDifferentVariants = getFirstDifferentVariants(
                    product.variants,
                    setFocusVariants
                );
                setAvaialableVariants(firstDifferentVariants);
                firstDifferentVariants.forEach((eachvariants, idx) => {
                    handlePrice(
                        res,
                        eachvariants,
                        idx,
                        setVariantPrice,
                        setIsQuantityAvailable
                    );
                });
            }

            setVariants(res);
        };

        fetchVariants();
    }, [product]);

    useEffect(() => {
        let totalPrice = variantPrice.reduce(
            (sum, currVal) => sum + currVal.price,
            0
        );
        let subscribeTotalPrice = variantPrice.reduce(
            (sum, currVal) => sum + currVal.subscribePrice,
            0
        );
        let allAtrributes = variantPrice.reduce((sum, currVal) => {
            if (currVal?.attribute) {
                return (sum += "," + currVal.attribute);
            }
        }, "");

        setProductPrice({
            price: totalPrice,
            subscribePrice: subscribeTotalPrice,
            attribute: allAtrributes,
        });
    }, [variantPrice]);

    return (
        <div className="VPselect-size row d-flex gap-3">
            {variants.map((variant, idx) => {
                const checkAvailVariant = AvaialableVariants?.find(
                    (eachvariants) => {
                        let parentId = Object.keys(eachvariants)[0];
                        return parentId === variant._id;
                    }
                );

                if (!checkAvailVariant) return;

                return (
                    <div className="row" key={idx}>
                        <p className="fw-bolder select-size-header">
                            {variant?.name?.en}
                        </p>
                        <Variant
                            key={idx}
                            index={idx}
                            product={product}
                            variantPrice={variantPrice}
                            variantData={variant}
                            setIsQuantityAvailable={setIsQuantityAvailable}
                            setVariantPrice={setVariantPrice}
                            focusVariants={focusVariants}
                            setFocusVariants={setFocusVariants}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default AllVariants;
