import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  const errMsg = "404 - Página no existe!";
  return (
    <>
      <Head>
        <title>{errMsg}</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-[#86efac]">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">{errMsg}</h1>
          <p class="my-4">
            Lo que sea que estabas buscando no se encuentra aquí...
          </p>
          <a href="/" class="underline">Regresar a página principal</a>
        </div>
      </div>
    </>
  );
}
