import { Link, useLoaderData, useLocation } from "react-router-dom";



// eslint-disable-next-line react/prop-types
const GadgetsCard = ({gadget}) => {
    const {pathname}=useLocation()
    // eslint-disable-next-line react/prop-types
    const { product_id, product_title, product_image, category, price, availability, rating } = gadget || {}
    console.log(gadget);
    
    return (
          


       
        <div className="">
             
            <div className='card border border-rounded-xl transition  hover:scale-105 shadow-xl overflow-hidden p-4 mb-2 w-72'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src={product_image} alt={`Cover picture of the title`} />
    </div>  
      <div className='flex gap-2'>
      <h4 className='font-extrabold text-xl'>{product_title}</h4>
      </div>
      

            <div className='mt-3 flex flex-col gap-3 mb-2'>
                
                <h5 className='font-bold mt-2'>Price : {price}$</h5>
                <Link to={`/data/${product_id}`}>
                     <button className='btn font-bold border border-purple-700 rounded-full text-purple-700 w-1/2 hover:text-white hover:bg-purple-700'>view Details</button>
                </Link>
               
            </div>
        </div>


        </div>
   
    );
};

export default GadgetsCard;