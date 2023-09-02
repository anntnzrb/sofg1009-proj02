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

        <div
          class="bg-white justify-center rounded-xl grid grid-cols-3 gap-4 place-items-center gap-5"
          style="width:700px; height: 80px;border-radius: 80px;"
        >
          <div></div>
          <div>
            Nombre
          </div>
        </div>
        <BackButton ruta={ruta} />
        <form
          method="POST"
          class="bg-white justify-center rounded-xl grid grid-cols-3 gap-4 place-items-center gap-5"
          style="width:700px; height: 80px;border-radius: 80px;"
        >
          <div></div>
          <div>
            <input
              type="text"
              name="resenia"
              placeholder="Reseña"
              class="bg-gray-100 rounded-xl w-3/5 h-10"
            />
          </div>
          <div>
            <button
              type="submit"
              class="bg-red-500 rounded-xl w-3/5 h-10"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
