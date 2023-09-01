import {
  RouteContext,
} from "$fresh/server.ts";
import { asset, Head } from "$fresh/runtime.ts";
import Nav2 from "../../components/Nav2.tsx";
import Nav from "../../components/Nav.tsx";
import { getRutaData } from "../../utils/HelpersMethods.tsx";

export default async function ReseniaPage(req: Request, ctx: RouteContext) {
  const { id } = ctx.params;
  const ruta: Ruta = await getRutaData(id);

  return (
    <div>
      {ruta.votos}
    </div>
  );
}
