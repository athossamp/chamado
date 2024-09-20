import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";
import { RowsType } from "../../types/Components/rowsType";

export function DatagridOcorrencia() {
  const [rows, setRows] = useState<RowsType[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/ocorrencia/getOcorrencias`)
      .then((response) => {
        try {
          const gridRows = response.data.map((row: RowsType) => ({
            id: row.ococodigo,
            ocorrencia: row.ococodigo,
            descrição: row.ocodescricao,
            solução: row.ocosolucao,
            rotina: row.lgrcodigo,
            cliente: row.clicodigo,
            funcionário: row.clifuncodigo,
            tecnico: row.teccodigo,
            problema: row.tipprocodigo,
            "tipo solução": row.tipsolcodigo,
            status: row.ocostatus,
            desenvolvimento: row.ocodesenvolvimento,
            "usuario incluido": row.inclusaoUsucodigo,
            usuário: row.usucodigo,
          }));
          setRows(gridRows);
        } catch (error) {
          console.log("erro consumindo api: ", error);
        }
        console.log(rows);
      });
  }, []);
  function handleEditButtonClick(ococodigo: number) {
    navigate(`/updateOcorrencia/${ococodigo}`);
  }
  return (
    <DataGrid
      sx={{ color: "white", maxHeight: "600px" }}
      columns={[
        { field: "ocorrencia", width: 80 },
        { field: "descrição", width: 270 },
        { field: "solução", width: 280 },
        { field: "rotina", width: 80 },
        { field: "cliente", width: 80 },
        { field: "funcionário", width: 85 },
        { field: "tecnico", width: 80 },
        { field: "problema", width: 80 },
        { field: "tipo solução", width: 90 },
        { field: "status", width: 80 },
        { field: "desenvolvimento", width: 120 },
        { field: "usuario incluido", width: 120 },
        { field: "usuário", width: 80 },
        {
          field: "edit",
          headerName: "Edit",
          sortable: false,
          width: 100,
          renderCell: (params) => (
            <Button
              nome="Edit"
              theme="laranja"
              type="submit"
              onClick={() => handleEditButtonClick(params.row.ocorrencia)}
            />
          ),
        },
      ]}
      rows={rows}
      slots={{ toolbar: GridToolbar }}
    />
  );
}
