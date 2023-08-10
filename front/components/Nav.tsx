import { SITE_NAME, SITE_SRC_CODE } from "../utils/constants.ts";
import IconHome from "tablerIcons/home.tsx";
import IconBrandGithub from "tablerIcons/brand-github.tsx";
import IconArrowGuide from "tablerIcons/arrow-guide.tsx";

type Props = {
  active: string;
};

export default function Nav({ active }: Props) {
  const menus = [
    { name: "Inicio", icon: IconHome, href: "/", newTab: false },
    {
      name: "<Código/>",
      icon: IconBrandGithub,
      href: SITE_SRC_CODE,
      newTab: true,
    },
  ];

  return (
    <div class="bg-blue-600 py-6 px-8 flex flex-col md:flex-row gap-1">
      <div class="flex items-center flex-1">
        <IconArrowGuide aria-hidden="true" />
        <div class="text-2xl ml-1 font-bold text-white">
          {SITE_NAME}
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              target={menu.newTab ? "_blank" : "_self"}
              class={"text-white hover:text-gray-300 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              <menu.icon class="inline-block w-5 h-5" />
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
