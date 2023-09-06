import { asset } from "$fresh/runtime.ts";
import { BackButton } from "../../islands/BackButton.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getRutaData, postRutaData } from "../../utils/HelpersMethods.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const categoria = form.get("categoria")?.toString();
    const sitios: Sitio[] = [];
    const nombre = form.get("nombre-ruta")?.toString();
    const votos = "0";
    const resenias: string[] = [];
    if (
      form.get("sitio1")?.toString() != null &&
      form.get("sitio2")?.toString() != null &&
      form.get("sitio3")?.toString() != null
    ) {
      const sitio1: Sitio = {
        nombre: form.get("sitio1")?.toString() as string,
        ciudad: "sdsdadsad",
      };
      const sitio2: Sitio = {
        nombre: form.get("sitio2")?.toString() as string,
        ciudad: "sdsdadsad",
      };
      const sitio3: Sitio = {
        nombre: form.get("sitio3")?.toString() as string,
        ciudad: "sdsdadsad",
      };

      sitios.push(sitio1);
      sitios.push(sitio2);
      sitios.push(sitio3);
    }
    resenias.push(form.get("resenia")?.toString() as string);

    if (!nombre || !categoria || !sitios || !votos) {
      return await ctx.render();
    }
    await postRutaData(nombre, categoria, resenias, sitios, votos);
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `/${ctx.params.cat}`,
      },
    });
  },
};

export default function Creation(props: PageProps) {
  return (
    <>
      <main
        class="w-full flex px-8 py-10 min-h-screen justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100"
        style={`background-image: url(${asset("/travelImg.png")})`}
      >
        <h1 class="text-3xl text-white font-bold">Turismo en Ecuador</h1>

        <div class="bg-white max-w-max max-h-max rounded-lg  ">
          <div class="">
            <h1 class="text-2xl font-bold text-gray-700 text-center mt-[20px]">
              Añadir Ruta
            </h1>
            <form
              method="POST"
              class=""
              style=""
            >
              <div class="flex w-[50rem] justify-around mt-[50px]">
                <label class="font-bold" htmlFor="nombre-ruta">
                  Nombre de Ruta
                </label>
                <input
                  class="border-4"
                  required
                  type="text"
                  name="nombre-ruta"
                />
              </div>
              <div class="flex gap-[350px] mt-[50px] justify-center ">
                <label class="font-bold" htmlFor="categoria">Categoria</label>
                <select id="categorias" name="categoria">
                  <option value="ciudad">Ciudad</option>
                  <option value="bosque">Bosque</option>
                  <option value="area">Área</option>
                </select>
              </div>
              <div class="grid grid-cols-2 grid-rows-3 mt-[80px] justify-items-center gap-8 mr-[50px]">
                <label class="font-bold" htmlFor="sitio1">Sitio 1</label>
                <input
                  class="border-4 max-w-[200px]"
                  required
                  type="text"
                  name="sitio1"
                />
                <label class="font-bold" htmlFor="sitio2">Sitio 2</label>
                <input
                  class="border-4 max-w-[200px]"
                  required
                  type="text"
                  name="sitio2"
                />
                <label class="font-bold" htmlFor="sitio3">Sitio 3</label>
                <input
                  class="border-4 max-w-[200px]"
                  required
                  type="text"
                  name="sitio3"
                />
              </div>
              <div class=" flex mt-[50px] gap-[100px] justify-center">
                <label class="font-bold" htmlFor="resenia">Reseña</label>
                <br />
                <textarea
                  class="border-4"
                  required
                  name="resenia"
                  id=""
                  cols={30}
                  rows={2}
                >
                </textarea>
              </div>
              <div class="flex justify-center ">
                <button
                  type="submit"
                  class=" my-[50px] bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
