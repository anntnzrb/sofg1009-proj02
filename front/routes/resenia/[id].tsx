import { RouteContext } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../../components/Nav2.tsx";
import Nav from "../../components/Nav.tsx";
import { getReseniaData, getRutaData } from "../../utils/HelpersMethods.tsx";
import CardResenia from "../../components/CardResenia.tsx";

export default async function ReseniaPage(req: Request, ctx: RouteContext) {
  const { id } = ctx.params;
  const ruta: Ruta = await getRutaData(id);
  const resenia: string[] = await getReseniaData(id);

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
        <a href="/areas">
          <button
            class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300  flex gap-3 justify-center items-center"
            style="border-radius: 80px;
width: 200px;
height: 50px;"
          >
            Atrás
          </button>
        </a>
        <h1 class="text-3xl text-white font-bold">Turismo en Ecuador</h1>

        <div
          class="bg-white justify-center rounded-xl grid grid-cols-3 gap-4 place-items-center gap-5"
          style="width:700px; height: 80px;border-radius: 80px;"
        >
          <div></div>
          <div>
            {ruta.nombre}
          </div>
        </div>
        <button
          class="px-3 py-2 bg-[#bef264]  border(gray-500 2) hover:bg-[#d9f99d]  flex gap-3 justify-center items-center"
          style="border-radius: 48px ;
width: 217px;
height: 67.005px;"
        >
          Añadir comentarios +
        </button>
        <div class="overflow-y-scroll bg-white w-3/5 min-h-[24em] rounded-2xl">
          {resenia.map((r) => <CardResenia resenia={r} />)}
        </div>
      </main>
    </>
  );
}
