import axios from "axios";

export const login = async (
  teclogin: string,
  tecsenha: string
): Promise<void> => {
  const mockApiResponse = await fetch(
    `https://logicom.com.br:5001/tecnicologicom/login?teclogin=${teclogin}&tecsenha=${tecsenha}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const response = await mockApiResponse.json();
  const dataApi = JSON.stringify(response);
  if (response.teclogin == teclogin && response.tecsenha == tecsenha) {
    localStorage.setItem("user", dataApi);
    const funcodigoStorage = localStorage.getItem("user");
    if (funcodigoStorage) {
      const funcodigoJson = JSON.parse(funcodigoStorage);
      const ocotectipoApiResponse = await axios.get(
        `https://logicom.com.br:5001/funcao/getFuncaoByFuncodigo?funcodigo=${funcodigoJson.funcodigo}`
      );
      localStorage.setItem(
        "funcodigo",
        JSON.stringify(ocotectipoApiResponse.data)
      );
    }

    return;
  } else {
    throw new Error();
  }
};
