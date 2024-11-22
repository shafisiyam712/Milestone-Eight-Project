import { useEffect, useState } from 'react'
import { getAllFavorites, removeFavorite } from '../Utils/Index'
import AddWishlist from './AddWishlist';
const Wishlist = () => {
    const [gadget, setGadget] = useState([])
  useEffect(() => {
    const favorites = getAllFavorites()
    setGadget(favorites)
  }, [])
    const handleRemove = id => {
        removeFavorite(id)
        const favorites = getAllFavorites()
        setGadget(favorites)
      }
    return (
        <div className='w-11/12 mx-auto mt-10'>
              {
          gadget.map(gadget => (<AddWishlist key={gadget.product_id} gadget={gadget} handleRemove={handleRemove} ></AddWishlist>))
        }
        </div>
    );
};

export default Wishlist;