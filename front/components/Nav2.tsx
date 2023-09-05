import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/lemon-2.tsx";

type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Ciudades", href: "/" },
    { name: "Bosques", href: "/components" },
    { name: "Areas", href: "/docs" },
  ];

  return (
    <div class="flex flex-col sm:flex-row gap-4 justify-between items-center max-w-screen-xl mx-auto w-full px-4 sm:px-6 md:px-8 p-4">
      <div class="text-gray-600 text-center">
        <span>Tour EC</span>
      </div>
      <div class="flex items-center gap-8">
        <a
          href="ciudad"
          class="text-gray-600 hover:underline"
        >
          Ciudad
        </a>
        <a
          href="/bosque"
          class="text-gray-600 hover:underline"
        >
          Bosques
        </a>
        <a
          href="/area"
          class="text-gray-600 hover:underline"
        >
          Areas Protegitas
        </a>
      </div>
      <div>
        <h1>Contáctanos</h1>
        <p>0988954818</p>
      </div>
    </div>
  );
}
