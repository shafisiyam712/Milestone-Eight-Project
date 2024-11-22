import { addFavorite, getAllFavorites } from '../Utils/Index'
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductDetails from "../Components/ProductDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";



const GadgetDetails = () => {
   
    const handleWishlist=()=>{
        toast.success("Add to Wishlist!")
    }
    const data=useLoaderData()
    const {product_id}=useParams()
    const [gadget,setGadget]=useState({})
    useEffect(() =>{
        const singleData = data.find(gadget => gadget.product_id== product_id)
    setGadget(singleData || {})

    },[data,product_id])

    // eslint-disable-next-line no-unused-vars
    const [isFavorite, setIsFavorite] = useState(false)
  useEffect(() => {
    const singleData = data.find(gadget => gadget.product_id == product_id)
    setGadget(singleData)
    const favorites = getAllFavorites()
    const isExist = favorites.find(item => item.product_id == singleData.product_id)
    if (isExist) {
      setIsFavorite(true)
    }
  }, [data, product_id])


  const handleFavorite = gadget => {
    //toast.success("Add to card done!")
    addFavorite(gadget)
    setIsFavorite(true)
  }
    const { product_title, product_image, price, rating ,description,Specification=[]} = gadget
    const [one,two,three]=Specification
   
    return (
        <div className="mb-80">
          
            <Helmet>
            <title>Product | Gadget Heaven</title>
            </Helmet>
            <ProductDetails></ProductDetails>
            
            <div className="w-2/3 mx-auto border rounded-xl absolute -bottom-20 left-56 h-[450px] bg-white flex p-4">
              <div className='w-1/3'>
                <img className='w-full h-full rounded-xl' src={product_image} alt="" />
              </div>
              <div className="w-2/3 pl-4 flex flex-col gap-3">
                
                  <h1 className="text-xl font-bold">{product_title}</h1> 
                  Price : ${price} 
                  <button className=" border-green-500 bg-green-300 rounded-full w-28 h-8">In Stock</button>

                  <p>{description}</p>
                  <h4 className="font-bold">Specification:</h4>
                  <div>
                    1.{one} <br /> 
                    2.{two} <br />
                    3.{three} <br />  <br />
                  </div>
                 
                  <h4 className="font-bold">Rating:⭐</h4>
                  <div className="flex gap-3"> 
                     <div>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  <i className="fa-regular fa-star"></i>
                  </div>
                  <div>
                  <p>{rating}</p>
                  </div>
                  </div>
                 <div className="flex gap-2">
                    <button className="btn rounded-full bg-purple-700 text-white flex" onClick={()=>handleFavorite(gadget)}>
                        <h5>Add to card</h5>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                    <div className="border rounded-full p-2 bg-white h-10 w-10 text-center cursor-pointer mt-1" onClick={()=>handleWishlist()}>
                  <i className="fa-regular fa-heart text-red-700"></i>
                </div>
                 </div>

              </div>
            </div>
            <ToastContainer  position="top-center">
                
            </ToastContainer>
        </div>
    );
};

export default GadgetDetails;