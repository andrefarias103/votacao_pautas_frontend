import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./css/SubMenu.module.css";

   
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);
 
    const showSubnav = () => setSubnav(!subnav);
 
    return (
        <>
            <Link 
                to={item.path}
                className={style["sidebar-link"]}
                onClick={item.subNav && showSubnav}
            >
                <div>
                    {item.icon}
                    <label>
                        {item.title}
                    </label>
                </div>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </Link>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <Link
                            to={item.path}
                            className={style["dropdown-link"]}
                            key={index}
                        >
                            {item.icon}
                            <label >
                                {item.title}
                            </label>
                        </Link>
                    );
                })}
        </>
    );
};
 
export default SubMenu;