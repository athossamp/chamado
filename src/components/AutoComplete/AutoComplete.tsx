import { Autocomplete, TextField } from "@mui/material";
import { AutoCompleteProps } from "../../types/Components/autoComplete";

export function AutoComplete(props: AutoCompleteProps) {
  return (
    <div>
      <Autocomplete
        className={props.classNameProps}
        isOptionEqualToValue={(option, value) =>
          option.itemValue === value?.itemValue
        }
        options={props.options}
        getOptionLabel={(option) => option.itemName || ""}
        onChange={(event, value, reason, details) => {
          if (props.onChange) {
            props.onChange(event, value, reason, details);
          }
        }}
        componentName={props.nome}
        onClick={() => {
          if (props.onClickProps) {
            props.onClickProps("value");
          }
        }}
        sx={{
          color: "white",
          borderColor: "white",
          backgroundColor: "#1A1B1F",
          borderRadius: "8px",
          marginBottom: "8px",
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            sx={{
              "& input": {
                color: "white",
              },
              "& .MuiInputLabel-root": {
                color: "inherit",
              },
            }}
            label={props.labelProps}
          />
        )}
      />
    </div>
  );
}
