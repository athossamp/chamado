import s from "./Chamado.module.css";
import { FormEvent, useEffect, useState } from "react";
import SelectMenu from "../components/UI/SelectMenu/SelectMenu";
import axios from "axios";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { useNavigate } from "react-router-dom";
import { InsertChamado } from "../types/Insert/insertChamado";
import { InsertOcorrenciaXTecnico } from "../types/Insert/insertOcorrenciaXTecnico";
import Button from "../components/UI/Button/Button";

export function Chamado() {
  const ococodigoValue = localStorage.getItem("ocorrencia");
  const dataLocalStorage = localStorage.getItem("user");
  const dataLocalStorageFuncodigo = localStorage.getItem("funcodigo");
  const statusChamado = [
    {
      itemName: "Aberto",
      itemValue: "A",
    },
    {
      itemName: "Finalizado",
      itemValue: "F",
    },
  ];

  const navigate = useNavigate();
  const [insertChamado, setInsertChamado] = useState<InsertChamado>({
    ococodigo: 0,
    chastatus: "",
    teccodigo: 0,
    usucodigo: 0,
    inclusaoUsucodigo: 0,
  });
  const [insertOcorrenciaXTecnico, setInsertOcorrenciaXTecnico] =
    useState<InsertOcorrenciaXTecnico>({
      ococodigo: 0,
      chacodigo: 0,
      teccodigo: 0,
      ocotectipo: "string",
      inclusaoUsucodigo: 0,
    });

  useEffect(() => {
    if (ococodigoValue) {
      const ocodigo = JSON.parse(ococodigoValue);
      if (dataLocalStorage) {
        const userData = JSON.parse(dataLocalStorage);
        setInsertChamado((prevState) => ({
          ...prevState,
          ococodigo: ocodigo,
          usucodigo: userData.usucodigo,
          teccodigo: userData.teccodigo,
          inclusaoUsucodigo: userData.inclusaoUsucodigo,
        }));
        if (dataLocalStorageFuncodigo) {
          const userFuncodigo = JSON.parse(dataLocalStorageFuncodigo);
          setInsertOcorrenciaXTecnico((prevState) => ({
            ...prevState,
            ococodigo: ocodigo,
            inclusaoUsucodigo: userData.inclusaoUsucodigo,
            teccodigo: userData.teccodigo,
            ocotectipo: userFuncodigo.funtipo,
          }));
        }
      }
    }
  }, [dataLocalStorage, ococodigoValue, dataLocalStorageFuncodigo]);

  function handleChangeChamado(event: SelectChangeEvent<string>) {
    const { name, value } = event.target;
    setInsertChamado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  console.log(insertChamado);
  async function handleSubmitChamado(event: FormEvent) {
    event.preventDefault();

    if (ococodigoValue !== null && dataLocalStorage) {
      setInsertChamado({
        ococodigo: insertChamado.ococodigo,
        chastatus: insertChamado.chastatus,
        teccodigo: insertChamado.teccodigo,
        usucodigo: insertChamado.usucodigo,
        inclusaoUsucodigo: insertChamado.inclusaoUsucodigo,
      });
      console.log(insertChamado);

      try {
        const data = axios.post<InsertChamado>(
          `${import.meta.env.VITE_API_URL}/chamado/insertChamado`,
          insertChamado,
          {
            headers: {
              "content-type": "text/json",
            },
          }
        );
        await data.then((response) => {
          try {
            const chacodigo = response.data;

            if (typeof chacodigo === "number") {
              setInsertOcorrenciaXTecnico((prevState) => ({
                ...prevState,
                chacodigo: chacodigo,
              }));
              console.log(insertOcorrenciaXTecnico);
            }
          } catch (error) {
            console.log("Erro no submit de ocorrenciaxtecnico: ", error);
          }
        });
      } catch (error) {
        console.log("Não enviou dados para o banco de chamado: ", error);
      }
    } else {
      console.log("A chave 'ocorrencia' não foi encontrada no localStorage.");
    }
  }

  function finalizarOcorrencia() {
    navigate("/");
    localStorage.removeItem("ocorrencia");
  }
  return (
    <div>
      <form onSubmit={handleSubmitChamado} className={s.chamadoForm}>
        <span className={s.chamadoTitle}>Chamado</span>
        <SelectMenu
          labelProps="Status Chamado"
          changeHandler={handleChangeChamado}
          itemMenu={statusChamado.map((item) => ({
            itemName: item.itemName,
            itemValue: item.itemValue,
          }))}
          nome="chastatus"
          sx={{
            color: "white",
            backgroundColor: "#1A1B1F",
            fontSize: "14px",
            marginBottom: "8px",
            borderRadius: "8px",
            width: "400px",
          }}
        />
        <Button nome="Abrir Chamado" theme="vermelho" type="submit" />
        <Button
          nome="Finalizar Ocorrencia"
          theme="preto"
          type="submit"
          onClick={finalizarOcorrencia}
        />
      </form>
    </div>
  );
}
