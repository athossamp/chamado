import { ChangeEventHandler } from "react";

type TextareaProps = {
  nome: string;
  placeholder: string;
  inputValue: string | number | readonly string[] | undefined;
  classNameProps?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement>;
};
export default function TextareaModel(props: TextareaProps) {
  return (
    <textarea
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      name={props.nome}
      style={{
        backgroundColor: "#1A1B1F",
        borderRadius: "8px",
        height: "80px",
        fontFamily: "Nunito",
        fontSize: "14px",
        color: "white",
        padding: "8px 12px 8px 12px",
        border: "none",
        resize: "none",
      }}
      value={props.inputValue}
      className={props.classNameProps}></textarea>
  );
}
