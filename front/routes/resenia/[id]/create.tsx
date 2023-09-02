import { postReseniaData } from "../../../utils/HelpersMethods.tsx";
import { Handlers, PageProps } from "$fresh/server.ts";
import { BackButton } from "../../../islands/BackButton.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    const { id } = ctx.params;
    const form = await req.formData();
    const resenia = form.get("resenia")?.toString();
    if (!resenia) {
      return await ctx.render();
    }
    await postReseniaData(id, resenia);
    return new Response(null, {
      status: 302,
      headers: {
        "Location": `/resenia/${id}`,
      },
    });
  },
};

export default function ReseniaForm(props: PageProps) {
  const { id } = props.params;
  const ruta = "/resenia/" + id;
  return (
    <div>
      <form method="POST" class="flex flex-col gap-4">
        <textarea
          required
          name="resenia"
          class="w-full h-24 rounded-xl border-2 border-gray-300"
          placeholder="Escribe tu reseña"
        />
        <button
          type="submit"
          class="bg-red-500 text-white rounded-xl py-2 px-4"
        >
          Enviar
        </button>
      </form>
      <BackButton ruta={ruta}/>
    </div>
  );
}
