import error from "../assets/404.jpeg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="container text-center mt-4">
      <img className="w-75" src={error} alt="" />
      <div>
        <button
          onClick={() => navigate("/home")}
          className="btn btn-success me-2"
        >
          Home
        </button>
        <button onClick={() => navigate(-1)} className="btn btn-warning">
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
