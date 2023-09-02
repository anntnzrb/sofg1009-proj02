import { ReseniaDeleteButton } from "../islands/ReseniaDeleteButton.tsx";

type Props = {
  ruta_id: string;
  resenia_id: string;
  resenia: string;
};

export default function Card(
  { ruta_id, resenia_id, resenia }: Props,
) {
  return (
    <div>
      <div class="grid grid-cols-3 gap-2 h-36 max-h-max place-items-center ">
        <div class="grid grid-cols-3 col-span-2 gap-2  max-w-lg ">
          <h3 class="place-self-center font-bold ">Comentario:</h3>
          <p class="justify-self-start col-span-2 ">{resenia}</p>
        </div>
        <div class="flex gap-7 ">
          <ReseniaDeleteButton ruta_id={ruta_id} resenia_id={resenia_id} />
        </div>
      </div>
      <hr />
    </div>
  );
}
