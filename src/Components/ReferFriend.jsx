import { useNavigate } from "react-router-dom";

function ReferFriend() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Refer a Friend</h2>
      <p>Share your referral code:</p>
      <h3 style={{ backgroundColor: "#eee", padding: "0.5rem" }}>BOOKAR123</h3>
      <button onClick={() => navigate("/dashboard")}>Return to Home</button>
    </div>
  );
}

export default ReferFriend;
