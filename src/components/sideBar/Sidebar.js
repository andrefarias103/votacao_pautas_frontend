import { useContext, useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { AutenticacaoContexto } from "../../contexto/autenticacao/autenticacaoContexto";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
 
const Nav = styled.div`
    background-color: #adc7ef;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 2px solid black;

`;
 
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
 
const SidebarNav = styled.nav`
    //background: #15171c;
    background: #2e3b74;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
    transition: 350ms;
    z-index: 10;
`;
 
const SidebarWrap = styled.div`
    width: 100%;
`;
 
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
 
    const showSidebar = () => setSidebar(!sidebar);

    const autenticacao = useContext(AutenticacaoContexto);
     
    return (
        <>
            <IconContext.Provider value={{ color: "#fff" }}>
                <Nav>
                    {autenticacao.usuario && <NavIcon to="#">
                        <FaIcons.FaBars
                            onClick={showSidebar}
                        />
                    </NavIcon>}
                    <h1
                        style={{
                            display: "flex",
                            textAlign: "center",
                            marginLeft: "400px",
                            justifyContent: "center",
                            color: "#rgb(13 81 76)",
                        }} >
                        Sistema de Votação de Pautas
                    </h1>
                </Nav>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <NavIcon to="#">
                            <AiIcons.AiOutlineClose
                                onClick={showSidebar}
                            />
                        </NavIcon>
                        {SidebarData.map((item, index) => {
                            return (
                                <SubMenu
                                    item={item}
                                    key={index}
                                />
                            );
                        })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
        </>
    );
};
 
export default Sidebar;