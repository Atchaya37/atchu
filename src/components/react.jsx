import { Link } from "react-router-dom";

function First(){
   
    return(
        <>
        <div className="ecommerce">
            </div>    
      <header>
        <h1>My E-Commerce Store</h1>

        <button><Link to='/log'>login</Link></button>
        <button><Link to='/sign'>signin</Link></button>
        <nav>
      
       
            <ul>
                <li><a href="#products">Products</a></li>
                <li><a href="#cart">Cart</a></li>
            </ul>
            </nav>
    
    </header>
   
    <main>
   
    <form>
            <input type="text" placeholder="Search..." />
            <button type="submit"><i class="fa fa-search"></i></button>
        </form>
  
        <section id="product">

            <h2>mens items</h2>
            <div class="product" id="product1">
            
                <h3>shirts</h3>
                <img src="https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg" width="190px" alt="shirt" />
                <p>Price: $300.00</p>
                <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
            </div>
            <div class="product" id="product1">
            
                <h3>shirts</h3>
                <img src="https://assets.ajio.com/medias/sys_master/root/20240507/mdc0/663a557116fd2c6e6af0ef6f/-473Wx593H-467293008-brown-MODEL.jpg" width="190px" alt="shirt" />
                <p>Price: $300.00</p>
                <button onclick="addToCart('Product 1', 10)">Add to Cart</button>
            </div>
            <div class="product" id="product2">
                <h3>pant</h3>
                <img src="https://www.beyours.in/cdn/shop/files/eveeryday-pant--black-1.jpg?v=1688369505" width="160px" alt="pant" />
          
                <p>Price: $250.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>t-shirt</h3>
                <img src="https://5.imimg.com/data5/XA/ZR/BQ/SELLER-11193145/91cd5e21-cacb-4cce-b9c4-c29a3c56c1301569927420112-seven-rocks-men-tshirts-9081569927419182-1.jpg" width="180px" alt="tshirt" />
          <p>Price: $200.00</p>
         <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>vesti shirt combo</h3>
                <img src="https://i.etsystatic.com/17334704/r/il/40e089/5287401140/il_fullxfull.5287401140_lnff.jpg"  width="180px" alt="vesti shirt" />
                <p>Price: $1000.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
            </section>
            <section id="product">
            <h2>womens items</h2>
            
          <div class="product" id="product2">
                <h3>saree</h3>
                <img src="https://www.vastranand.in/cdn/shop/files/1_9f2964cc-6f27-4415-bf91-648c34e0fd36.jpg?v=1705127062" width="180px" alt="saree" />
                <p>Price: $1000.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>frag</h3>
                <img src="https://m.media-amazon.com/images/I/61gGDUn9O3L._AC_UY1100_.jpg" width="160px" alt="frag" />
                <p>Price: $800.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>chudi sets</h3>
                <img src="https://i.pinimg.com/236x/59/eb/27/59eb274dcbcb2a1ad5d3bc0c0e2934e1.jpg" width="196px" alt="frag" />
                <p>Price: $700.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>pant shirt</h3>
                <img src="https://www.hancockfashion.com/cdn/shop/files/16116BlackS_5_1800x1800.jpg?v=1690526591" width="180px" alt="pant shirt" />
                <p>Price: $1500.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
            </section>
            <section id="product">
            <h2>kids items</h2>
          <div class="product" id="product2">
                <h3>frag</h3>
                <img src="https://liandli.in/cdn/shop/files/LICD120_1_-min_800x.jpg?v=1696415763" width="160" alt="frag" />
                <p>Price: $500.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>shorts </h3>
                <img src="https://www.okboss.co.in/assets/img/home/boys%20summer%20casual%20wear/boys%20tshirt%20with%20open%20shirt%20short%20set.jpg" width="134" alt="short" />
                <p>Price: $200.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
            <div class="product" id="product2">
                <h3>tshirt</h3>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevPUFUy83IHEw8xDcWa490NObTP-5g5zeKw&s"  width="110" alt="frag" />
                <p>Price: $150.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
            </div>
          <div class="product" id="product2">
                <h3>kids saree</h3>
                <img src="https://static3.azafashions.com/tr:w-317/uploads/product_gallery/1722854615298_1.jpg" width="135" alt="saree" />
                <p>Price: $500.00</p>
                <button onclick="addToCart('Product 2', 15)">Add to Cart</button>
             </div>
        </section>

        <section id="cart">
            <h2>Your Cart</h2>
            <ul id="cartItems"></ul>
            <p>Total: $<span id="totalPrice">0.00</span></p>
            <button onclick="checkout()">Checkout</button>
        </section>
    </main>
 
    <section class="user-account">
        <h1>User Account</h1>
        <div class="account-info">
            <h2>Account Information</h2>
            <p>Name: atchaya</p>
            <p>Email: r3002913@gmail.com</p>
            <p>Phone: 123-456-7890</p>
        </div>
        <div class="order-history">
            <h2>Order History</h2>
            <ul>
                <li>Order #1 - $100</li>
                <li>Order #2 - $200</li>
                <li>Order #3 - $300</li>
            </ul>
        </div>
    </section>
        </>
    )
}
export default First;
