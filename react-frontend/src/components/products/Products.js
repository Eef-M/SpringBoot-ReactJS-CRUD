import { useEffect, useState } from 'react'
import { toast, Toaster } from 'react-hot-toast';
import { FaEye, FaPencilAlt, FaPlus, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { deleteService, getService } from '../../service/ProductService';
import styles from '../../styles/products.module.css';

function Products() {
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        await getService("/products")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        getProducts();
    }, [])

    const deleteProductHandler = (id) => {
        deleteService('/products/' + id)
            .then(res => {
                toast.success('Delete Product success');
                getProducts();
            })
            .catch(err => {
                toast.error('Delete Failed, Something Wrong!');
            })
    }


    return (

        <div className={styles.productArea}>
            <Toaster position='top-center' reverseOrder={false} toastOptions={{
                duration: 2000,
                style: {
                    background: 'white',
                    color: 'black',
                },
            }} />
            <div className='flex items-center justify-between lg:mx-24'>
                <h1 className='font-medium text-lg lg:text-xl'>Products List</h1>
                <Link to={`/add_product`}>
                    <button className={styles.btnAdd}><FaPlus /> Add Product</button>
                </Link>
            </div>
            <div className={styles.tableArea}>
                <table className="text-sm text-left w-full">
                    <thead className="bg-lime-400 text-lime-900">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Stock
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map((product) => {
                            const priceNum = product?.productPrice;
                            const price = priceNum.toFixed(2);
                            return (
                                <tr key={product?.id} className="bg-lime-50 text-black border-b">
                                    <th scope="row" className="px-6 py-2 font-medium ">
                                        {product?.productName}
                                    </th>
                                    <td className="px-6 py-2">
                                        {product?.productDescription}
                                    </td>
                                    <td className="px-6 py-2">
                                        {product?.stock}
                                    </td>
                                    <td className="px-6 py-2">
                                        ${price}
                                    </td>
                                    <td className="px-6 py-2">
                                        <div className='flex justify-start items-center gap-2'>
                                            <Link to={`/detail_product/${product?.id}`}>
                                                <button className='p-2 bg-yellow-600 rounded-md'><FaEye className='text-lg text-white' /></button>
                                            </Link>
                                            <Link to={`/edit_product/${product?.id}`} state={{ product }}>
                                                <button className='p-2 bg-blue-700 rounded-md'><FaPencilAlt className='text-lg text-white' /></button>
                                            </Link>
                                            <button onClick={() => deleteProductHandler(product?.id)} className='p-2 bg-red-700 rounded-md'><FaTrash className='text-lg text-white' /></button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </div >

    )
}

export default Products