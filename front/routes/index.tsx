import { AppProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>TurEC</title>
      </head>
      <body>
        <main
          class="w-full flex min-h-[60rem] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100"
          style={`background-image: url(${asset("/travelImg.png")})`}
        >
          <h1 class="text-3xl text-white font-bold">Turismo en Ecuador</h1>
          <a class="hover:scale-125 transition-all" href="/ciudad">
            <button
              class="px-3 py-2 bg-[#bef264]  border(gray-500 2) hover:bg-[#d9f99d]  flex gap-3 justify-center items-center"
              style="border-radius: 48px ;
width: 217px;
height: 67.005px;"
            >
              Empieza tu camino
            </button>
          </a>
        </main>
      </body>
    </html>
  );
}
