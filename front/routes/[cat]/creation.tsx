import { asset } from "$fresh/runtime.ts";
import { BackButton } from "../../islands/BackButton.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { getRutaData, postRutaData } from "../../utils/HelpersMethods.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const form = await req.formData();
    const nombre = form.get("nombre")?.toString();
    const resenia: Resenia[] = [];

    if (!nombre || !resenia) {
      return await ctx.render();
    }
    await postRutaData(nombre, resenia);
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `/${ctx.params.cat}`,
      },
    });
  },
};

export default function Creation(props: PageProps) {
  console.log(props);
  return (
    <>
      <main
        class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100"
        style={`background-image: url(${asset("/travelImg.png")})`}
      >
        <h1 class="text-3xl text-white font-bold">Turismo en Ecuador</h1>

        <div class="bg-white w-[56rem] h-[40rem] rounded-lg mb-[5rem] justify-items-center ">
          <div class="grid grid-rows-2 grid-cols-1 justify-items-center h-[8rem] mt-8">
            <h1 class="text-2xl font-bold text-gray-700 w-max col-span-2 h-lg">
              Añadir Ruta
            </h1>
            <form
              method="POST"
              class="grid grid-rows-4 grid-cols-1 place-items-center h-[32rem] w-[48rem] font-semibold text-[20px] "
              style=""
            >
              <div class="flex w-[50rem] justify-around">
                <label htmlFor="nombre-ruta">Ruta</label>
                <p name="nombre-ruta">nombreRuta</p>
              </div>
              <div class="flex w-[50rem] justify-around">
                <label htmlFor="comentario">Comentario</label>
                <textarea
                  name="resenia"
                  class="w-[300px] border-2 border-green-400"
                />
              </div>

              <button
                type="submit"
                class="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
