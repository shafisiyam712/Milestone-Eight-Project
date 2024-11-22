import { useEffect, useState, useRef } from 'react'
import { getAllFavorites, removeFavorite } from '../Utils/Index'
import AddCard from "./AddCard";
import modalimg from '../assets/Group.png'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const navigate = useNavigate()

   
    const [isPurchased, setIsPurchased] = useState(false);

    const modalRef = useRef(null);

    const [totalCost, setTotalCost] = useState(0);
    const [gadget, setGadget] = useState([])
    useEffect(() => {
        const favorites = getAllFavorites()
        setGadget(favorites)
    }, [])

    useEffect(() => {
        const calculateTotalCost = () => {
            const total = gadget.reduce((sum, item) => sum + item.price, 0);
            setTotalCost(total);
        };
        calculateTotalCost();
    }, [gadget]);

    const handleRemove = id => {
        removeFavorite(id)
        const favorites = getAllFavorites()
        setGadget(favorites)
    }
    //const [sort,setSort]=useState(data)
    // const [isSorted, setIsSorted] = useState(true);
    const handleSort = () => {
        console.log('sort calllleddd');
        const sorted = [...gadget].sort((a, b) => b.price - a.price)
        setGadget(sorted)
    }

    const [purchaseCost, SetPurchaseCost] = useState(0)
    const handlepurchaseClick = () => {
        SetPurchaseCost(totalCost)
        setTotalCost(0)
        setIsPurchased(true);
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }

    const modalclick = () => {
        navigate('/')
        localStorage.clear()
    }
    return (
        <div>
            <div className="w-11/12 mx-auto mt-5">
                <div className="flex justify-between ">
                    <h1 className="font-extrabold text-xl mt-2">Cart</h1>
                    <div className="flex gap-3">
                        <h1 className="font-extrabold text-xl mt-2">Total Cost : {totalCost}</h1>
                        <button className="flex btn bg-white text-purple-700 rounded-full border-purple-700" onClick={handleSort} disabled={isPurchased} >
                            Sort by price
                            <i className="fa-solid fa-chart-line"></i>
                        </button>
                        <button className="btn bg-purple-700 text-white rounded-full"
                            onClick={handlepurchaseClick} disabled={isPurchased}
                        >
                            Purchase
                        </button>
                        {/* <button onClick={handleSort} >checked</button> */}
                    </div>
                </div>
                {
                    gadget.map(gadget => (<AddCard key={gadget.product_id} gadget={gadget} handleRemove={handleRemove} ></AddCard>))
                }
            </div>
            {/* modal */}
            <dialog id="my_modal_1" ref={modalRef} className="modal">
                <div className="modal-box">
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <div className='w-36 h-36'>
                            <img className='w-full h-full' src={modalimg} alt="" />
                        </div>

                        <h3 className="font-bold text-lg">Payment Successful!!</h3>
                        <hr />
                        <p className="">Thanks for purchasing</p>
                        <p>Total {purchaseCost}$</p>
                        <div className="modal-action">
                            <form method="dialog">
                               
                                <button className="btn rounded-full w-64" onClick={modalclick}>
                                    Close
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Cart;