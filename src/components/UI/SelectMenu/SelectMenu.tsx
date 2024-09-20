import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  SxProps,
  Theme,
} from "@mui/material";
import s from "./SelectMenu.module.css";

type SelectMenuProps = {
  itemMenu: {
    itemName: string;
    itemValue: number | string;
  }[];
  nome: string;
  changeHandler?: (event: SelectChangeEvent<string>) => void;
  onClickProps?: (value: number | string) => void;
  valor?: number[] | number | string;
  labelProps?: string;
  sx?: SxProps<Theme>;
};

export default function SelectMenu(props: SelectMenuProps) {
  return (
    <div className={s.selectMenu}>
      <FormControl fullWidth>
        <InputLabel style={{ color: "#838896" }}>{props.labelProps}</InputLabel>
        <Select
          MenuProps={{
            style: {
              maxHeight: "300px",
            },
          }}
          sx={props.sx}
          className={s.selectMenuSelect}
          label={props.labelProps}
          name={props.nome}
          defaultValue=""
          onChange={props.changeHandler}>
          {props.itemMenu.map((item, index) => (
            <MenuItem
              sx={{ maxHeight: "300px" }}
              key={index}
              value={item.itemValue}
              onClick={() =>
                props.onClickProps && props.onClickProps(item.itemValue)
              }>
              {item.itemName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
