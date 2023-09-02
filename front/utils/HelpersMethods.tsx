import { BACKEND_URL } from "../utils/constants.ts";
import type { Resenia, Ruta } from "../types.d.ts";

type RutasList = Ruta[];
type RutaData = Ruta;

export const getCategoryData = async (
  categoria: string | undefined,
): Promise<RutasList> => {
  const res = await fetch(BACKEND_URL + categoria);

  if (!res.ok) {
    throw new Error(`Failed to fetch areas data with status: ${res.status}`);
  }

  const data: { [key: string]: Omit<Ruta, "id"> } = await res.json();
  const rutasList: RutasList = Object.entries(data).map(([id, ruta]) => ({
    ...ruta,
    id,
  }));

  return rutasList;
};

export const getRutaData = async (id: string): Promise<Ruta> => {
  const res = await fetch(BACKEND_URL + `/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch ruta data with status: ${res.status}`);
  }

  const data: { [key: string]: Omit<Ruta, "id"> } = await res.json();
  const ruta: RutaData = Object.entries(data).map(([id, ruta]) => ({
    ...ruta,
    id,
  }));

  return ruta[0];
};

export const getReseniaData = async (id: string): Promise<Resenia[]> => {
  const res = await fetch(BACKEND_URL + `/resenia/${id}`);

  if (!res.ok) {
    throw new Error(`Failed to fetch resenia data with status: ${res.status}`);
  }
  const data = await res.json();

  const resenias: Resenia[] = Object.keys(data).map(key => {
    return {
      id: key,
      comentario: data[key]
    };
  });

  return resenias;
  
};

export const postReseniaData = async (
  id: string,
  resenia: string,
): Promise<void> => {
  const res = await fetch(BACKEND_URL + `/${id}/resenia`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ resenia }),
  });

  if (!res.ok) {
    throw new Error(`Failed to post resenia data with status: ${res.status}`);
  }
};
