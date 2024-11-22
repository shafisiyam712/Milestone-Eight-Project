import { useNavigate } from "react-router-dom";


const AboutBanner = () => {
    const navigate = useNavigate()
    const GoHome = () => {
        navigate('/')
    }
    return (
        <div>
            <div className="bg-[#9538E2] mt-4 h-40 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-white">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

            </div>
            <div className="bg-[#9538E2]  h-40 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-white">Provides you the latest and old classic fashionable gadgets that you are looking for.This is a huge hub of gadgets <br />so dont be late just grab your tec and drive to explore the modern world with us</p>

            </div>
            <div className="bg-[#9538E2]  h-32 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Gadget Heaven</h1>
                <p className="text-white">Currently have 4 categories of product.We ensure you that we will add more in it.Our categories are:</p>
            </div>
            <div className="bg-[#9538E2]  h-60 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Phones</h1>
                <h1 className="text-white text-2xl font-bold">Laptops</h1>
                <h1 className="text-white text-2xl font-bold">MacBooks</h1>
                <h1 className="text-white text-2xl font-bold">I-Phones</h1>

            </div>
            <div className="bg-[#9538E2]  h-60 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">Our Outlets are in</h1>
                <h1 className="text-white text-2xl font-bold">Narayangonj 23/2 BB Road</h1>
                <h1 className="text-white text-2xl font-bold">Tangail Sontosh</h1>
                <h1 className="text-white text-2xl font-bold">Mirpur 12 </h1>
                <h1 className="text-white text-2xl font-bold">Chandpur City Hall</h1>

            </div>
            <div className="bg-[#9538E2]  h-60 flex flex-col justify-center text-center w-full space-y-3">
                <h1 className="text-white text-2xl font-bold">So Hurry up! grab your product</h1>
                <div>
                    <button onClick={GoHome} className="btn w-40 rounded-full bg-white text-purple-700 hover:bg-purple-700 hover:text-white ">Lets Shop</button>
                </div>

            </div>
        </div>
    );
};

export default AboutBanner;