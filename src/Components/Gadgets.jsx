import { useLoaderData, useLocation, useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import GadgetsCard from "./GadgetsCard";


// eslint-disable-next-line react/prop-types
const Gadgets = () => {
    // const { product_id, product_title, product_image, category, price, description, Specification, availability, rating } = gadgets
    // const navigate = useNavigate()
  const {pathname}=useLocation();
  const data = useLoaderData()
  const { category } = useParams()
  const [gadgets, setGadgets] = useState([])
  useEffect(() => {
    if (category) {
      const filteredByCategory = [...data].filter(
        gadget => gadget.category === category
      )
      setGadgets(filteredByCategory)
    } else {
      setGadgets(data.slice(0, 9))
    }
  }, [category, data])
  console.log(data)
    return (
        // <div className="w-11/12 mx-auto flex mt-5 gap-3">
        //     <div className="w-1/4 border rounded-xl flex flex-col h-96 space-y-3 justify-center items-center">
        //         <button className="btn w-2/3 bg-purple-700 text-white">All Categorys</button>
        //         <button className="btn w-2/3 bg-purple-700 text-white">All Categorys</button>
        //         <button className="btn w-2/3 bg-purple-700 text-white">All Categorys</button>
        //         <button className="btn w-2/3 bg-purple-700 text-white">All Categorys</button>
        //         <button className="btn w-2/3 bg-purple-700 text-white">All Categorys</button>
        //     </div>
        //     <div className="w-3/4">
        //     <div className="grid grid-cols-3 gap-2">
        //          {
        //              // eslint-disable-next-line react/prop-types
        //              gadgets.map(card => (
        //         <GadgetsCard key={card.product_id} card={card}></GadgetsCard>))
        //         }
        //     </div>
        //     </div>

        // </div>
    

        <div className="grid grid-cols-1  md:grid-cols-3 gap-2">
          {
            pathname === '/category/smart%20watches' && (
              <div className="text-3xl text-center font-extrabold text-purple-700">
            <h1>Sorry this item is not available</h1>
        </div>
            )
           
          }
                 {
                     // eslint-disable-next-line react/prop-types
                     gadgets.map( gadget=> (
                <GadgetsCard key={gadget.product_id} gadget={gadget}></GadgetsCard>))
                }
            </div>
        //      <button className='btn btn-warning' onClick={() => navigate('/coffees')}>
        //      View All
        //    </button>
    );
};

export default Gadgets;