import React from 'react';

const wishlistItems = [
    {
        id: 1,
        name: 'Dreamhigh Heated Water Bowl',
        price: 89.99,
        stock: true,
        image: 'https://i.ibb.co/SX9SyQkg/Heated-Water-Bowl1.jpg',
    },
    {
        id: 2,
        name: 'Cat Winter Jacket',
        price: 129.5,
        stock: true,
        image: 'https://i.ibb.co/JR6TtCDw/61of-Lyry-GKL-AC-SL1000.jpg',
    },
    {
        id: 3,
        name: 'Heated Pet Bed',
        price: 59.99,
        stock: false,
        image: 'https://i.ibb.co/TqBkq984/71-Fncn-U-CRL-AC-SL1500.jpg',
    },
];

const Wishlist = () => {
    return (
        <div className='text-white' style={{ padding: '2rem' }}>
            <h2 className='text-2xl font-bold mb-5 text-center'>My Wishlist</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Stock Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wishlistItems.map(item => (
                        <tr key={item.id} className=''>
                            <td><img className='size-24 p-2 rounded-2xl' src={item.image} alt={item.name} /></td>
                            <td>{item.name}</td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.stock ? 'In stock' : 'Out of stock'}</td>
                            <td>
                                <button>Quick View</button>{' '}
                                {item.stock ? (
                                    <button>Add to Cart</button>
                                ) : (
                                    <button>Notify Me</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Wishlist;
