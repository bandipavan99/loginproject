import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Your Orders</h2>
      <p>No orders found. (You can fetch order data from the backend here.)</p>
      <button onClick={() => navigate("/dashboard")}>Return to Home</button>
    </div>
  );
};

export default Orders;
