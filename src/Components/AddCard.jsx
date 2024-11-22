/* eslint-disable react/prop-types */


const AddCard = ({ gadget, handleRemove }) => {
    if (!gadget) return null;
    const { product_id, product_title, product_image, price, rating, description, Specification = [] } = gadget
    return (
        <div className="border rounded-xl p-2 flex gap-2 h-36 mt-3">
            <div>
                <img className="w-full h-full" src={product_image} alt="" />
            </div>
            <div className="flex justify-between   w-full">
                <div className="flex flex-col gap-3">
                    <h1 className="font-bold">{product_title}</h1>
                    <p>{description}</p>
                    <p>${price}</p>
                </div>
                <div className="mt-10 mr-3">
                    <i className="fa-solid fa-trash-can cursor-pointer" onClick={() => handleRemove(product_id)}></i>
                </div>

            </div>

        </div>
    );
};

export default AddCard;