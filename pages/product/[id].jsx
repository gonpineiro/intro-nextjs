import React from 'react';
import { useRouter } from 'next/router';

export const ProductItem = () => {
    const {
        query: { id },
    } = useRouter();

    return <div>Esta es la pagina de prueba/producto: {id}</div>;
};

export default ProductItem;
