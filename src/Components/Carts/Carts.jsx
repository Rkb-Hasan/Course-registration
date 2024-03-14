import Product from "../Product/Product";
import { totalCredit } from "../../App";
const Carts = ({ cart, cartCredit, cartPrice }) => {
  return (
    <div className="p-4 rounded-lg bg-white w-[280px]">
      <div>
        <h1 className="text-xl text-blue-600 text-opacity-80 bg-blue-400  bg-opacity-60 rounded-lg p-2 font-bold border border-blue-600">
          Credit Remaining : {totalCredit - cartCredit}
        </h1>
      </div>
      <h1 className="text-xl  font-bold">Course Name</h1>
      <ul className=" list-inside list-decimal space-y-2 ">
        {cart.map((product, idx) => (
          <Product key={idx} product={product}></Product>
        ))}
      </ul>
      <hr />
      <p>Total Credit Hour : {cartCredit} </p>
      <hr />
      <p>Total Price : {cartPrice} </p>
    </div>
  );
};

export default Carts;
