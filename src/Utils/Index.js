import { ToastContainer, toast } from 'react-toastify';

// get all gadgets from local storage
const getAllFavorites = () => {
  const all = localStorage.getItem('favorites')

  if (all) {
    const favorites = JSON.parse(all)
    console.log(favorites)
    return favorites
  } else {
    console.log([])
    return []
  }
}

// add a gadget to local storage
const addFavorite = gadget => {
  // get all previously saved gadget data
  const favorites = getAllFavorites()
  const isExist = favorites.find(item => item.product_id == gadget.product_id)
  if (isExist) return toast.error('Item already exists!')

  favorites.push(gadget)
  localStorage.setItem('favorites', JSON.stringify(favorites))
  toast.success('Successfully added!')
}

// remove a gadget from local storage
const removeFavorite = product_id => {
  // get all previously saved gadget data
  const favorites = getAllFavorites()
  const remaining = favorites.filter(gadget => gadget.product_id != product_id)
  localStorage.setItem('favorites', JSON.stringify(remaining))
  //toast.success('Successfully Removed!')
}

export { addFavorite, getAllFavorites, removeFavorite }
