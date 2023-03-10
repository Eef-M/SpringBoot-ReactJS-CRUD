import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { postService } from '../../service/ProductService';
import styles from '../../styles/add_product.module.css'
import toast from 'react-hot-toast';

function AddProduct() {
    const [product, setProduct] = useState({
        "productName": "",
        "productDescription": "",
        "stock": "",
        "productPrice": "",
    });

    const navigate = useNavigate();

    const addProductHandler = async (e) => {
        e.preventDefault();
        await postService("/products", product)
            .then(res => {
                navigate('/')
                setTimeout(() => {
                    toast.success('Add Product Success');
                }, 300)
            })
            .catch(err => {
                console.log(err)
                navigate('/')
                setTimeout(() => {
                    toast.error('Error, Something wrong!')
                }, 300)
            })
    }

    const allowSubmit = !(!product?.productName || !product?.productDescription || !product?.stock || !product?.productPrice);

    return (
        <div className={styles.addProductArea}>
            <h1 className='lg:text-2xl font-bold'>Add Product</h1>
            <form className={styles.formArea} onSubmit={addProductHandler}>
                <div className={styles.boxInput}>
                    <span>Product Name</span>
                    <input className={styles.inputStyle} type="text" onChange={e => {
                        setProduct({
                            ...product,
                            productName: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Product Description</span>
                    <input className={styles.inputStyle} type="text" onChange={e => {
                        setProduct({
                            ...product,
                            productDescription: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Stock</span>
                    <input className={styles.inputStyle} type="text" onChange={e => {
                        setProduct({
                            ...product,
                            stock: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Price</span>
                    <input className={styles.inputStyle} type="text" onChange={e => {
                        setProduct({
                            ...product,
                            productPrice: e.target.value
                        })
                    }} />
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <button disabled={!allowSubmit} className={styles.btnSubmit}>Submit</button>
                    <Link className='w-full' to={'/'}>
                        <button className={styles.btnCancel}>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default AddProduct