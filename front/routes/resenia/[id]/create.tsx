import {
  getRutaData,
  postReseniaData,
} from "../../../utils/HelpersMethods.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BackButton } from "../../../islands/BackButton.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../../../components/Nav2.tsx";

export const handler: Handlers = {
  async GET(req, ctx) {
    const { id } = ctx.params;
    const rutaData: Ruta = await getRutaData(id);
    return ctx.render({ rutaData });
  },
  async POST(req, ctx) {
    const { id } = ctx.params;
    const form = await req.formData();
    const resenia = form.get("resenia")?.toString();
    if (!resenia) {
      return await ctx.render();
    }
    await postReseniaData(id, resenia);
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `/resenia/${id}`,
      },
    });
  },
};

export default function ReseniaForm(props: PageProps) {
  const id = props.params.id;
  const ruta = "/resenia/" + id;
  const nombreRuta: Ruta = props.data.rutaData.nombre;

  return (
    <>
      <Head>
        <title>Turismo Ecuador</title>
      </Head>

      <Nav2 active="/" />
      <main
        class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100"
        style={`background-image: url(${asset("/travelImg.png")})`}
      >
        <h1 class="text-3xl text-white font-bold">Turismo en Ecuador</h1>

        <BackButton ruta={ruta} />
        <div class="bg-white w-[56rem] h-[40rem] rounded-lg mb-[5rem] justify-items-center ">
          <div class="grid grid-rows-2 grid-cols-1 justify-items-center h-[8rem] mt-8">
            <h1 class="text-2xl font-bold text-gray-700 w-max col-span-2 h-lg">
              Añadir comentario
            </h1>
            <form
              method="POST"
              class="grid grid-rows-4 grid-cols-1 place-items-center h-[32rem] w-[48rem] font-semibold text-[20px] "
              style=""
            >
              <div class="flex w-[50rem] justify-around">
                <label htmlFor="nombre-ruta">Ruta</label>
                <p name="nombre-ruta">{nombreRuta}</p>
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
