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
      <div class=" flex justify-center items-center gap-8 max-h-max h-[10rem] ">
          <h3 class=" min-w-[92px] font-bold ">Comentario:</h3>
          <p class="min-w-[25rem] max-w-[25rem] ">{resenia}</p>
        <div class="">
          <ReseniaDeleteButton ruta_id={ruta_id} resenia_id={resenia_id} />
        </div>
      </div>
      <hr />
    </div>
  );
}
