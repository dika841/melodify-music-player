import { FC, ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import clsx from "clsx";
export const Sidebar: FC = (): ReactElement => {
  const { pathname } = useLocation();

  const className = (url: string) =>
    clsx("flex gap-x-2 items-center text-white hover:text-blue-400", {
      "text-blue-400": pathname === url,
    });
  const sidebarMenu = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "#" },
    { name: "Library", path: "#" },
  ];
  const collectionList = [
    { name: "Mixes and Radio", path: "#", icon: "lucide:radio" },
    { name: "Playlist", path: "#", icon: "tabler:playlist" },
    { name: "Album", path: "#", icon: "material-symbols-light:album-outline" },
    { name: "Track", path: "#", icon: "hugeicons:music-note-square-01" },
    { name: "Artists", path: "#", icon: "zondicons:artist" },
    { name: "Videos", path: "#", icon: "ri:video-line" },
  ];
  return (
    <aside className="flex flex-col left-0 top-0 text-white z-[9999] w-1/6 min-h-screen p-4 bg-zinc-900 overflow-auto overflow-y-hidden ease-linear lg:static gap-y-5 shadow-md lg:translate-x-0">
      <section className="flex justify-between items-center">
        <h1>User</h1>
        <span className="text-lg font-bold">...</span>
      </section>
      <section className="pl-4">
        <ul className="flex flex-col gap-y-2 mt-8">
          {sidebarMenu.map((item, idx) => (
            <Link key={idx} to={item.path}>
              <li className={className(item.path)}>
                <h4>{item.name}</h4>
              </li>
            </Link>
          ))}
        </ul>
      </section>
      <section className="">
        <div className="mb-2">
          <h3 className="text-gray-600">My Collection</h3>
        </div>
        <ul className="pl-4 flex flex-col gap-y-4">
          {collectionList.map((item, idx) => (
            <Link key={idx} to={item.path}>
              <li className={className(item.path)}>
                <Icon icon={item.icon} width={20} />
                <h4>{item.name}</h4>
              </li>
            </Link>
          ))}
        </ul>
      </section>
    </aside>
  );
};
