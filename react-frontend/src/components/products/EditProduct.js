import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { updateService } from '../../service/ProductService';
import styles from '../../styles/edit_product.module.css'

const EditProduct = () => {
    const location = useLocation();
    const prod = location.state;
    const [product, setProduct] = useState({
        "productName": prod?.product?.productName,
        "productDescription": prod?.product?.productDescription,
        "stock": prod?.product?.stock,
        "productPrice": prod?.product?.productPrice,
    });

    const navigate = useNavigate();

    const updateProduct = (e) => {
        e.preventDefault();
        updateService('/products/' + prod?.product?.id, product)
            .then(res => {
                navigate('/');
                setTimeout(() => {
                    toast.success('Update Product Success')
                }, 300)
            })
            .catch(err => {
                console.log(err);
            })

    }

    const allowSubmit = !(!product?.productName || !product?.productDescription || !product?.stock || !product?.productPrice);

    return (
        <div className={styles.editProductArea}>
            <h1 className='text-2xl font-bold'>Edit Product</h1>
            <form className={styles.formArea} onSubmit={updateProduct}>
                <div className={styles.boxInput}>
                    <span>Product Name</span>
                    <input className={styles.inputStyle} type="text" value={product?.productName} onChange={e => {
                        setProduct({
                            ...product,
                            productName: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Product Description</span>
                    <input className={styles.inputStyle} type="text" value={product?.productDescription} onChange={e => {
                        setProduct({
                            ...product,
                            productDescription: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Stock</span>
                    <input className={styles.inputStyle} type="text" value={product?.stock} onChange={e => {
                        setProduct({
                            ...product,
                            stock: e.target.value
                        })
                    }} />
                </div>
                <div className={styles.boxInput}>
                    <span>Price</span>
                    <input className={styles.inputStyle} type="text" value={product?.productPrice} onChange={e => {
                        setProduct({
                            ...product,
                            productPrice: e.target.value
                        })
                    }} />
                </div>
                <div className='flex flex-col justify-center items-center gap-3'>
                    <button disabled={!allowSubmit} className={styles.btnSubmit}>Update</button>
                    <Link className='w-full' to={'/'}>
                        <button className={styles.btnCancel}>Cancel</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default EditProduct