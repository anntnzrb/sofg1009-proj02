// interface Ruta {
//   ciudad: string;
//   nombre: string;
//   recomendado: string;
//   votos: string;
// }

interface Ruta {
  id: string;
  categoria: string;
  nombre: string;
  resenias: string[];
  sitios: Sitio[];
  votos: string;
}

interface Sitio {
  ciudad: string;
  nombre: string;
}
