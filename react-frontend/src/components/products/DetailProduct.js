import React, { useEffect, useState } from 'react'
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom'
import { getOneService } from '../../service/ProductService';
import styles from '../../styles/detail_product.module.css';

const DetailProduct = () => {
    const [product, setProduct] = useState([]);

    const { id } = useParams();


    useEffect(() => {
        getOneService('/products/' + id)
            .then(res => {
                setProduct(res.data);
            })
            .catch(err => console.log(err))

    }, [id])

    return (
        <div className={styles.detailProductArea}>
            <h1 className='text-3xl font-bold text-lime-900'>{product?.productName}</h1>
            <span className='text-md font-mono text-slate-500'>{product?.productDescription}</span>
            <div>Stock <span className='font-bold text-lime-700'>{product?.stock}</span></div>
            <span className='text-2xl font-medium text-lime-600'>${product?.productPrice}</span>
            <Link className={styles.btnBack} to={`/`}><FaArrowLeft /> Back</Link>
        </div>
    )
}

export default DetailProduct