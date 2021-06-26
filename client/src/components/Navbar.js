import Button from "./Button";
import { useHistory, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  return (
    <div className="Navbar">
      <div className="navbar-left">
        <p>Shopify Challenge</p>
      </div>
      <div className="navbar-right">
        <Button
          onClick={() => {
            history.push("/");
          }}
        >
          Home
        </Button>
        <Button
          onClick={() => {
            history.push("/new");
          }}
        >
          Add new picture
        </Button>
        <Button
          onClick={() => {
            history.push("/profile");
          }}
        >
          Profile
        </Button>
      </div>
    </div>
  );
}
export default withRouter(Navbar);
