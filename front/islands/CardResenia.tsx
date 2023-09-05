type Props = {
  ruta_id: string;
  resenia_id: string;
  resenia: string;
};

export default function CardResenia(
  { ruta_id, resenia_id, resenia }: Props,
) {
  return (
    <>
      <form action={`/resenia/${ruta_id}`} method="POST">
        <div class=" flex justify-center items-center gap-8 max-h-max h-[10rem] ">
          <h3 class=" min-w-[92px] font-bold ">Comentario:</h3>
          <p class="min-w-[25rem] max-w-[25rem] ">{resenia}</p>
          <input name="resenia_id" type="hidden" value={resenia_id} />
          <div class="">
            <button
              type="submit"
              title="Eliminar comentario"
              /*onSubmit={async (event) => {
        event.preventDefault();
        try {
          await deleteReseniaData(ruta_id, resenia_id);
          console.log("Deleted resenia_id:", resenia_id);
          window.location.reload();
        } catch (error) {
          console.error("Error deleting resenia:", error);
        }
      }}*/
            >
              <svg
                style={{ pointerEvents: "none" }}
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="36"
                viewBox="0 0 32 36"
                fill="none"
              >
                <path
                  d="M15.975 0.00018675C15.5518 0.0065258 15.1486 0.173498 14.8537 0.464459C14.5588 0.755419 14.3965 1.1466 14.4023 1.55213V2.31764H5.61479C5.40315 2.31489 5.19305 2.35246 4.99668 2.42816C4.80032 2.50387 4.62161 2.6162 4.47093 2.75865C4.32025 2.90109 4.2006 3.07079 4.11894 3.25791C4.03728 3.44503 3.99522 3.64584 3.99522 3.84866H1.62048C1.40876 3.84579 1.19856 3.88327 1.00209 3.95892C0.805623 4.03458 0.626804 4.14689 0.476027 4.28935C0.32525 4.4318 0.205523 4.60155 0.123803 4.78872C0.0420829 4.9759 0 5.17678 0 5.37968C0 5.58257 0.0420829 5.78345 0.123803 5.97063C0.205523 6.1578 0.32525 6.32755 0.476027 6.47C0.626804 6.61246 0.805623 6.72477 1.00209 6.80043C1.19856 6.87608 1.40876 6.91356 1.62048 6.91069H30.3795C30.5912 6.91356 30.8014 6.87608 30.9979 6.80043C31.1944 6.72477 31.3732 6.61246 31.524 6.47C31.6748 6.32755 31.7945 6.1578 31.8762 5.97063C31.9579 5.78345 32 5.58257 32 5.37968C32 5.17678 31.9579 4.9759 31.8762 4.78872C31.7945 4.60155 31.6748 4.4318 31.524 4.28935C31.3732 4.14689 31.1944 4.03458 30.9979 3.95892C30.8014 3.88327 30.5912 3.84579 30.3795 3.84866H28.0048C28.0048 3.64584 27.9627 3.44503 27.8811 3.25791C27.7994 3.07079 27.6797 2.90109 27.5291 2.75865C27.3784 2.6162 27.1997 2.50387 27.0033 2.42816C26.807 2.35246 26.5968 2.31489 26.3852 2.31764H17.5977V1.55213C17.6007 1.3473 17.5607 1.14399 17.4801 0.954232C17.3996 0.764478 17.2801 0.592141 17.1288 0.447428C16.9775 0.302714 16.7974 0.188566 16.5992 0.111744C16.401 0.0349221 16.1888 -0.00301248 15.975 0.00018675ZM1.62048 9.97272L4.48515 33.2968C4.67368 34.8385 6.03554 36 7.65563 36H24.3444C25.9645 36 27.3247 34.8385 27.5148 33.2968L30.3795 9.97272H1.62048Z"
                  fill="black"
                />
              </svg>
            </button>
          </div>
        </div>
        <hr />
      </form>
    </>
  );
}
