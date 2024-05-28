import { useContext, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { AutenticacaoContexto } from "../../contexto/autenticacao/autenticacaoContexto";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import style from "./css/Sidebar.module.css";
 
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
 
    const showSidebar = () => setSidebar(!sidebar);

    const autenticacao = useContext(AutenticacaoContexto);
     
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <div className={style.nav}>
                    {autenticacao.usuario && <div className={style.navIcon} to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </div>}
                    <h1
                        style={{
                            display: "flex",
                            textAlign: "center",
                            justifyContent: "center",
                            color: "#rgb(13 81 76)",
                            width: "100%",
                        }} >
                        Sistema de Votação de Pautas
                    </h1>
                </div>
                <nav className={style.sideBarNav} data-open={sidebar}> 
                    <div className={style["sidebar-wrap"]}>
                        <div className={style.navIcon} to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </div>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </div>
                </nav>
            </IconContext.Provider>
        </>
    );
};
 
export default Sidebar;