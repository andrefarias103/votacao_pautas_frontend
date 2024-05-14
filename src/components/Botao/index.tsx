// import React from "react";
import style from "./botao.module.css";

interface BotaoProps {
    className?: string; // Defina uma propriedade opcional para a classe CSS
    children: React.ReactNode;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: React.MouseEventHandler<HTMLButtonElement>|void;
  }

// class Botao extends React.Component < { children: React.ReactNode }> {
const Botao: React.FC<BotaoProps> = ({ className, type, children, onClick }) => {
    return (
              <button className={`${style.botao} ${className}} type=${type} onClick=${onClick}`}> 
                  { children }
              </button>);
}
export default Botao;