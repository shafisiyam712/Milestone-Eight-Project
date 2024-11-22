

const Footer = () => {
    return (
        <div>
            <div className="text-center my-5 mt-20">
                <h1 className="font-bold text-2xl mb-3">Gadget Heaven</h1>
                <p>Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <hr />
            <div className="flex flex-col md:flex-row justify-evenly  my-6">
                <div className="space-y-3 flex flex-col text-center">
                    <h2 className="font-bold text-xl">Services</h2>
                    <p>Product support</p>
                    
                      <p>Order Tracking</p>
                    
                    <p>Shipping & Delivery</p>
                    
                    <p>Returns</p>
                  
                </div>
                <div className="space-y-3  flex flex-col text-center">
                    <h2 className="font-bold text-xl">Company</h2>
                    <p>About Us</p>
                  
                    <p>Careers</p>
                 
                    <p>Contact</p>
                    
                </div>
                <div className="space-y-3  flex flex-col text-center">
                    <h2 className="font-bold text-xl">Legal</h2>
                 
                    <p>Terms of Service</p>
                   
                    <p>Privacy Policy</p>
                    
                    <p>Cookie Policy</p>
                 
                </div>
            </div>
        </div>
    );
};

export default Footer;