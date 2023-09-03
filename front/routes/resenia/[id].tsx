import { RouteContext } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../../components/Nav2.tsx";
import Nav from "../../components/Nav.tsx";
import { getReseniaData, getRutaData } from "../../utils/HelpersMethods.tsx";
import CardResenia from "../../components/CardResenia.tsx";
import { ReseniaCreateButton } from "../../islands/ReseniaCreateButton.tsx";
import { BackButton } from "../../islands/BackButton.tsx";

export default async function ReseniaPage(req: Request, ctx: RouteContext) {
  const { id } = ctx.params;
  const id_ruta = id;
  const ruta: Ruta = await getRutaData(id);
  const resenia: Resenia[] = await getReseniaData(id);
  const redireccionamiento = "/" + ruta.categoria;

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
          class="bg-white justify-center rounded-xl grid  gap-4 place-items-center gap-5"
          style="width:700px; height: 80px;border-radius: 80px;"
        >
          <div class="text-2xl font-bold text-gray-700">
            {ruta.nombre}
          </div>
        </div>
        <div class ="flex justify-center items-center gap-8">
          <BackButton ruta={redireccionamiento} />
          <ReseniaCreateButton id={id} />
        </div>
      
        <div class="overflow-y-scroll bg-white w-3/5 min-h-[24em] max-h-[26rem] rounded-2xl">
          {resenia.map((r) => (
            <CardResenia
              ruta_id={id_ruta}
              resenia_id={r.id}
              resenia={r.comentario}
            />
          ))}
        </div>
      </main>
    </>
  );
}
