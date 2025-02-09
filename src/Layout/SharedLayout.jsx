import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const SharedLayout = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default SharedLayout;