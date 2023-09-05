type Props = {
  ruta: string;
};

export function BackButton(
  { ruta }: Props,
) {
  return (
    <button
      title="Atrás"
      onClick={() => {
        window.location.href = ruta;
      }}
      class="hover:scale-105 transition-all px-3 py-2 bg-[#bef264]  border(gray-500 2) hover:bg-[#d9f99d]  flex gap-3 justify-center items-center"
      style="border-radius: 48px ;
width: 217px;
height: 67.005px;"
    >
      Atrás
    </button>
  );
}
