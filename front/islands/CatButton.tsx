import { JSX } from 'preact';
import { useState } from 'preact/hooks';
import { handler } from '../routes/[cat].tsx';

interface Props {
    ruta: string;
    currentRuta: string;
  }

export function CatButton( {ruta, currentRuta}: Props ) { 
    const [isSelected, setIsSelected] = useState(false);
    const relleno = isSelected ? "border-radius: 80px;background: var(--navi, #7483BD);width: 200px;height: 50px;" : "border-radius: 80px;width: 200px;height: 50px;";
 
    const opacidad = isSelected ? "1" : "0.4";


    return (
        <>
        <button onClick={() => setIsSelected(!isSelected)}
              class="px-3 py-2 bg-white rounded border(gray-500 2) hover:bg-gray-200 active:bg-gray-300  flex gap-3 justify-center items-center"
              style={relleno}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="29"
                viewBox="0 0 27 29"
                fill= "none"
              >
                <path
                  d="M25.65 6.44444H20.25V1.61111C20.25 0.720167 19.6466 0 18.9 0H8.1C7.35345 0 6.75 0.720167 6.75 1.61111V12.8889H1.35C0.60345 12.8889 0 13.6091 0 14.5V27.3889C0 28.2798 0.60345 29 1.35 29H6.75H13.5H20.25H25.65C26.3966 29 27 28.2798 27 27.3889V8.05556C27 7.16461 26.3966 6.44444 25.65 6.44444ZM5.4 25.7778H2.7V22.5556H5.4V25.7778ZM5.4 19.3333H2.7V16.1111H5.4V19.3333ZM12.15 25.7778H9.45V22.5556H12.15V25.7778ZM12.15 19.3333H9.45V16.1111H12.15V19.3333ZM12.15 12.8889H9.45V9.66667H12.15V12.8889ZM12.15 6.44444H9.45V3.22222H12.15V6.44444ZM17.55 25.7778H14.85V22.5556H17.55V25.7778ZM17.55 19.3333H14.85V16.1111H17.55V19.3333ZM17.55 12.8889H14.85V9.66667H17.55V12.8889ZM17.55 6.44444H14.85V3.22222H17.55V6.44444ZM24.3 25.7778H21.6V22.5556H24.3V25.7778ZM24.3 19.3333H21.6V16.1111H24.3V19.3333ZM24.3 12.8889H21.6V9.66667H24.3V12.8889Z"
                  fill="black"
                    fill-opacity={opacidad}
                />
              </svg>
              {ruta}
            </button>
        </>
    );
}