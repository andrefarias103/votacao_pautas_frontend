import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
 
export const SidebarData = [
    {
        title: "Cadastros",
        path: "/about-us",
        icon: <FaIcons.FaUserPlus />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
 
        subNav: [
            {
                title: "Usuários",
                path: "/usuarios/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Categorias",
                path: "/categorias/",
                icon: <IoIcons.IoIosCreate />,
            },
            {
                title: "Pautas",
                path: "/pautas/",
                icon: <IoIcons.IoIosCreate />,
            },            
        ],
    },
    // {
    //     title: "Pautas",
    //     path: "/pautas/",
    //     icon: <IoIcons.IoIosPaper />,
    //     iconClosed: <RiIcons.RiArrowDownSFill />,
    //     iconOpened: <RiIcons.RiArrowUpSFill />, 
    // },
    {
        title: "Votação",
        path: "/categorias/pautas/",
        icon: <FaIcons.FaCheck />,
    },
    {
        title: "Detalhes",
        path: "/",
        icon: <FaIcons.FaInfoCircle />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
    {
        title: "Sair",
        path: "/logout",
        icon: <FaIcons.FaSignOutAlt />,
 
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
    },
];