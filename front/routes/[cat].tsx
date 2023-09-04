import { Handlers,PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../components/Nav2.tsx";
import Nav from "../components/Nav.tsx";
import Card from "../components/Card.tsx";
import { getCategoryData } from "../utils/HelpersMethods.tsx";
import { CatButton } from "../islands/CatButton.tsx";
import { useState } from 'preact/hooks';

export const handler: Handlers = {
  async GET(request,context){
    const { cat } = context.params;
    const rutasResult: Ruta[] = await getCategoryData("/categoria/"+cat);
    return context.render(rutasResult);
  }
}

export default  function CatPage(props: PageProps) {
  const  rutasResult: Ruta[]  = props.data;
  const ruta = props.params.cat;
  
  return (
    <>
      <Head>
        <title>Turismo Ecuador</title>
      </Head>

      <div class="bg-red-100">
        <Nav active="/" />
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
            <CatButton currentRuta={ruta} ruta="Ciudad" path="/ciudad" />
            <CatButton currentRuta={ruta} ruta="Bosques"  path="/bosque"/>
            <CatButton currentRuta={ruta} ruta="Áreas Protegidas"  path="/area"/>
          
        </div>
        <button
          class="px-3 py-2 bg-[#bef264]  border(gray-500 2) hover:bg-[#d9f99d]  flex gap-3 justify-center items-center"
          style="border-radius: 48px ;
width: 217px;
height: 67.005px;"
        >
          Añadir ruta +
        </button>
        <div class="overflow-y-scroll bg-white max-h-[26rem] w-3/5 min-h-[24em] rounded-2xl">
          {rutasResult && rutasResult.map((ruta) => (
            <Card
              id={ruta.id}
              title={ruta.nombre}
              category={ruta.categoria}
              place1={ruta.sitios[0]?.nombre || ""}
              place2={ruta.sitios[1]?.nombre || ""}
              place3={ruta.sitios[2]?.nombre || ""}
            />
          ))}
        </div>
      </main>
    </>
  );
}
