import { Head } from "$fresh/runtime.ts";

import Nav from "../components/Nav.tsx";
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
    </>
  );
}
