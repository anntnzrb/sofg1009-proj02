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
  const resenias: Resenia[] = Object.entries(data).map(([id, comentario]) => ({
    id,
    comentario,
  }));
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

export const postRutaData = async (
  nombre: string,
  categoria: string,
  resenias: string[],
  sitios: Sitio[],
  votos: string,
): Promise<void> => {
  const res = await fetch(BACKEND_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nombre, categoria, resenias, sitios, votos }),
  });

  if (!res.ok) {
    throw new Error(`Failed to post ruta data with status: ${res.status}`);
  }
};

export const deleteReseniaData = async (
  id: string,
  reseniaId: string,
): Promise<void> => {
  const res = await fetch(BACKEND_URL + `/${id}/resenia/${reseniaId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(
      `Failed to delete resenia data with status: ${res.status}`,
    );
  }
};

export const deleteRutaData = async (id: string): Promise<void> => {
  const res = await fetch(BACKEND_URL + `/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error(`Failed to delete ruta data with status: ${res.status}`);
  }
};
