import { ChangeEventHandler } from "react";
type InputModelProps = {
  nome: string;
  placeholder: string;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  inputValue?: string | number | readonly string[] | undefined;
  classNameProps?: string;
  type?: "file" | "password";
  autoComplete?: "off";
  defaultValue?: string | number;
};

export function InputModel(props: InputModelProps) {
  return (
    <input
      className={props.classNameProps}
      style={{
        borderRadius: "8px",
        backgroundColor: "#1A1B1F",
        fontSize: "14px",
        padding: "8px 12px",
        fontFamily: "Nunito",
        fontWeight: 400,
        lineHeight: "19.6px",
        border: "none",
        color: "white",
      }}
      placeholder={props.placeholder}
      onChange={props.onChangeHandler}
      name={props.nome}
      value={props.inputValue}
      autoComplete={props.autoComplete}
      defaultValue={props.defaultValue}
    />
  );
}
