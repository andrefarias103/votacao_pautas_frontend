// import React from "react";
import { ButtonHTMLAttributes } from "react";
import style from "./botao.module.css";

interface BotaoProps extends ButtonHTMLAttributes<HTMLElement> {
    className?: string; // Defina uma propriedade opcional para a classe CSS
    children?: React.ReactNode;
  }

// class Botao extends React.Component < { children: React.ReactNode }> {
const Botao: React.FC<BotaoProps> = ({ className, children, type, onClick, ...rest }) => {
    return (
              <button className={`${style.botao} ${className}`} onClick={onClick}> 
                  { children }
              </button>);
}
export default Botao;