import React from "react";
import productNotFound from "@/app/store/[id]/not-found";

interface IproductProps{
    params: Promise<{id: string}>;
    searchParams: Promise<{}>;
}

async function Product(props){
    const {id} = await props.params;
    console.log(id)

    if(parseInt(id) > 100){
        return productNotFound(id)
    }
    return (
        <div>product</div>
    )
}

export default Product;