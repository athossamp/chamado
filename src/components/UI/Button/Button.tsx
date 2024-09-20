import { ButtonProps } from "../../../types/UI/buttonProps";
import s from "./Button.module.css";

export default function Button(props: ButtonProps) {
  return (
    <button
      className={`${s.button} ${s[props.theme]}`}
      type={props.type}
      onClick={props.onClick}>
      {props.nome}
    </button>
  );
}
