import Button from "./Button";
import { useHistory, withRouter } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const history = useHistory();
  return (
    <div className="Navbar">
      <Button
        onClick={() => {
          history.push("/new");
        }}
      >
        Add new picture
      </Button>
      <Button
        onClick={() => {
          history.push("/");
        }}
      >
        Home
      </Button>
      <p>Shopify Challenge</p>
    </div>
  );
}
export default withRouter(Navbar);
