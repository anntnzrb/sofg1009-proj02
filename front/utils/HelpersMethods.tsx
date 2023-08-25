import { BACKEND_URL } from "../utils/constants.ts";
import type { Ruta } from "../types.d.ts";

type RutasList = Ruta[];

export const getCategoryData = async (categoria: string|undefined): Promise<RutasList> => {
    const res = await fetch(BACKEND_URL + categoria );
  
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