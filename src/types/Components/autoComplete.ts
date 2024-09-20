import { AutocompleteChangeReason } from "@mui/material";
import { ChangeEvent } from "react";

export interface AutoCompleteProps {
  options: { itemName: string; itemValue: string | number }[];
  labelProps: string;
  classNameProps?: string;
  onChange?: (
    event: ChangeEvent<{}>,
    newValue: { itemName: string; itemValue: string | number } | null,
    reason: AutocompleteChangeReason,
    details?:
      | {
          option?: { itemName: string; itemValue: string | number };
        }
      | undefined
  ) => void;
  onClickProps?: (value: number | string) => void;
  nome: string;
}
