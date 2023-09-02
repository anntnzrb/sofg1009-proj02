import { PageProps } from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../components/Nav2.tsx";
import Nav from "../components/Nav.tsx";
import Card from "../components/Card.tsx";
import { getCategoryData } from "../utils/HelpersMethods.tsx";

export default async function AreasPage(props: PageProps) {
  const rutasResult: Ruta[] = await getCategoryData("/categoria/area");
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
          <a href="/ciudad">
            <button
              class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300  flex gap-3 justify-center items-center"
              style="border-radius: 80px;
width: 200px;
height: 50px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill="none"
              >
                <path
                  d="M25.65 6.44444H20.25V1.61111C20.25 0.720167 19.6466 0 18.9 0H8.1C7.35345 0 6.75 0.720167 6.75 1.61111V12.8889H1.35C0.60345 12.8889 0 13.6091 0 14.5V27.3889C0 28.2798 0.60345 29 1.35 29H6.75H13.5H20.25H25.65C26.3966 29 27 28.2798 27 27.3889V8.05556C27 7.16461 26.3966 6.44444 25.65 6.44444ZM5.4 25.7778H2.7V22.5556H5.4V25.7778ZM5.4 19.3333H2.7V16.1111H5.4V19.3333ZM12.15 25.7778H9.45V22.5556H12.15V25.7778ZM12.15 19.3333H9.45V16.1111H12.15V19.3333ZM12.15 12.8889H9.45V9.66667H12.15V12.8889ZM12.15 6.44444H9.45V3.22222H12.15V6.44444ZM17.55 25.7778H14.85V22.5556H17.55V25.7778ZM17.55 19.3333H14.85V16.1111H17.55V19.3333ZM17.55 12.8889H14.85V9.66667H17.55V12.8889ZM17.55 6.44444H14.85V3.22222H17.55V6.44444ZM24.3 25.7778H21.6V22.5556H24.3V25.7778ZM24.3 19.3333H21.6V16.1111H24.3V19.3333ZM24.3 12.8889H21.6V9.66667H24.3V12.8889Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
              Ciudad
            </button>
          </a>
          <a href="/bosque">
            <button
              class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300  flex gap-3 justify-center items-center"
              style="border-radius: 80px;
width: 200px;
height: 50px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="29"
                viewBox="0 0 22 29"
                fill="none"
              >
                <path
                  d="M21.54 22.976L16.155 15.796H20.1938L14.8088 8.616H17.5013L10.77 0L4.03875 8.616H6.73125L1.34625 15.796H5.385L0 22.976H9.42375V28.72H12.1163V22.976H21.54Z"
                  fill="black"
                  fill-opacity="0.4"
                />
              </svg>
              Bosques
            </button>
          </a>
          <a href="/area">
            <button
              class=" px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300 flex gap-3 justify-center items-center"
              style="border-radius: 80px;
background: var(--navi, #7483BD);
width: 200px;
height: 50px;"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="29"
                viewBox="0 0 23 29"
                fill="none"
              >
                <path
                  d="M22.4517 2.36778C22.2848 2.23278 22.0898 2.1369 21.881 2.08719C21.6722 2.03747 21.4549 2.03518 21.2451 2.08049C19.7102 2.40217 18.1256 2.40627 16.589 2.09253C15.0525 1.77879 13.5964 1.15386 12.3104 0.256199C12.0699 0.0893874 11.7843 0 11.4916 0C11.199 0 10.9133 0.0893874 10.6728 0.256199C9.38686 1.15386 7.93075 1.77879 6.39417 2.09253C4.85759 2.40627 3.27305 2.40217 1.73811 2.08049C1.5283 2.03518 1.31101 2.03747 1.1022 2.08719C0.893388 2.1369 0.698375 2.23278 0.531494 2.36778C0.364837 2.50298 0.230588 2.6738 0.138615 2.86769C0.0466407 3.06158 -0.000721371 3.27361 8.30481e-06 3.48821V14.1898C-0.00126875 16.2493 0.489512 18.2793 1.43148 20.1107C2.37345 21.9422 3.73934 23.5221 5.41542 24.7189L10.6585 28.4537C10.9017 28.6269 11.193 28.72 11.4916 28.72C11.7902 28.72 12.0815 28.6269 12.3247 28.4537L17.5678 24.7189C19.2439 23.5221 20.6098 21.9422 21.5517 20.1107C22.4937 18.2793 22.9845 16.2493 22.9832 14.1898V3.48821C22.9839 3.27361 22.9366 3.06158 22.8446 2.86769C22.7526 2.6738 22.6184 2.50298 22.4517 2.36778ZM20.1103 14.1898C20.1114 15.7911 19.7301 17.3695 18.998 18.7936C18.2659 20.2178 17.2043 21.4465 15.9015 22.3775L11.4916 25.5233L7.0817 22.3775C5.7789 21.4465 4.71729 20.2178 3.98522 18.7936C3.25315 17.3695 2.87181 15.7911 2.87291 14.1898V5.14013C5.88432 5.39787 8.90031 4.69917 11.4916 3.14346C14.0829 4.69917 17.0989 5.39787 20.1103 5.14013V14.1898ZM13.7037 10.9003L9.83969 14.7787L8.56125 13.4859C8.29076 13.2154 7.9239 13.0634 7.54137 13.0634C7.15884 13.0634 6.79198 13.2154 6.52149 13.4859C6.251 13.7564 6.09904 14.1233 6.09904 14.5058C6.09904 14.8883 6.251 15.2552 6.52149 15.5257L8.81981 17.824C8.95335 17.9586 9.11222 18.0655 9.28726 18.1384C9.46231 18.2113 9.65006 18.2489 9.83969 18.2489C10.0293 18.2489 10.2171 18.2113 10.3921 18.1384C10.5672 18.0655 10.726 17.9586 10.8596 17.824L15.801 12.9257C16.0714 12.6552 16.2234 12.2883 16.2234 11.9058C16.2234 11.5233 16.0714 11.1564 15.801 10.8859C15.5305 10.6154 15.1636 10.4635 14.7811 10.4635C14.3985 10.4635 14.0317 10.6154 13.7612 10.8859L13.7037 10.9003Z"
                  fill="black"
                />
              </svg>
              Areas Protegidas
            </button>
          </a>
        </div>
        <button
          class="px-3 py-2 bg-[#bef264]  border(gray-500 2) hover:bg-[#d9f99d]  flex gap-3 justify-center items-center"
          style="border-radius: 48px ;
width: 217px;
height: 67.005px;"
        >
          Añadir ruta +
        </button>
        <div class="overflow-y-scroll bg-white w-3/5 max-h-[26rem] min-h-[24em] rounded-2xl">
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
