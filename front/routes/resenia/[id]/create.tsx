import { postReseniaData } from "../../../utils/HelpersMethods.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BackButton } from "../../../islands/BackButton.tsx";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../../../components/Nav2.tsx";
import Nav from "../../../components/Nav.tsx";

export const handler: Handlers = {
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
  const { id } = props.params;
  const ruta = "/resenia/" + id;
  return (
    <>
      <Head>
        <title>Turismo Ecuador</title>
      </Head>
      <div class="bg-red-100">
        <Nav active="/" />

        <div>
          Hello!
          {/* {rutas.map((r) => <h1 class="text-2xl">{r.ciudad}</h1>)} */}
        </div>
      </div>
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
                <label htmlFor="nombre-ruta"> Ruta </label>
                <p name="nombre-ruta" >Nombre de la ruta </p>
                </div>
                <div class="flex w-[50rem] justify-around">
                <label class="font-semibold" htmlFor="autor">Autor</label>
                <input type="text" name="autor" class=" border-2 border-green-400"/>
                </div>
                <div class="flex w-[50rem] justify-around">
                <label htmlFor="comentario">Comentario</label>
                <textarea name="comentario" class="w-[300px] border-2 border-green-400"/>
                </div>
                <div class="flex w-[50rem] justify-around">
                <label htmlFor="calificacion">Calificación</label>
                <input type="number" name="calificacion" min="1" max="5" class="border-2 border-green-400" />
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
