import { Head } from "$fresh/runtime.ts";
import Nav from "../components/Nav.tsx";
import Nav2 from "../components/Nav2.tsx";
import Button from "../components/button.tsx";
import type { Ruta } from "../types.d.ts";

import { h } from "preact";

export default async function Home() {
  // const resp = await fetch(
  //   `http://localhost:9292/api/ciudad`,
  // );

  // if (!resp.ok) {
  //   return <h1>An Error occurred</h1>;
  // }

  // const rutas: Ruta[] = await resp.json();

  return (
    <>
      <Head>
        <title>lol</title>
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
        style="background-image: url('/static/travelImg.png')"
      >
        <h1 class="text-3xl text-white-300 font-bold">Turismo en Ecuador</h1>
        <div
          class="bg-white justify-center rounded-xl grid grid-cols-3 gap-4 place-items-center gap-5"
          style="width:700px; height: 80px;border-radius: 80px;"
        >
          <Button style="border-radius: 80px;
background: var(--navi, #7483BD);
width: 200px;
height: 50px;">
            Turistico
          </Button>
          <Button style="border-radius: 80px;
width: 200px;
height: 50px;">
            Bosques
          </Button>
          <Button style="border-radius: 80px;
width: 200px;
height: 50px;">
            Areas Protegidas
          </Button>
        </div>
        <Button style="border-radius: 48px;
background: var(--green, #BCFD49); width: 217px;
height: 67.005px;">
          Añadir ruta +
        </Button>
        <div class="overflow-y-scroll bg-white w-full min-h-[24em] rounded-2xl">
        </div>
      </main>
    </>
  );
}
