import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import Courses from "./Components/Courses/Courses";
import Carts from "./Components/Carts/Carts";
export const totalCredit = 15;
function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartCredit, setCartCredit] = useState(0);
  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelected = (course, credit, price) => {
    const totalCartCredit = cartCredit + credit;
    const totalCartPrice = cartPrice + price;
    const newCart = [...cart, course];
    const alreadyExists = cart.find((c) => c.id === course.id);
    if (totalCartCredit > totalCredit) {
      return alert("Total Credit limit is : 15");
    } else if (!alreadyExists) {
      setCartCredit(totalCartCredit);
      setCartPrice(totalCartPrice);
      setCart(newCart);
    }
  };

  return (
    <>
      <div className="bg-base-200  p-4">
        <h1 className="text-2xl font-bold text-center">
          Course Registration: {courses.length}
        </h1>
        <div className="flex gap-4">
          <Courses
            courses={courses}
            handleSelected={handleSelected}
            className="col-span-9"
          ></Courses>
          <div>
            <Carts
              cart={cart}
              cartCredit={cartCredit}
              cartPrice={cartPrice}
            ></Carts>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
