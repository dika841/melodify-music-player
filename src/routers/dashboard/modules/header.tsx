import { Icon } from "@iconify/react/dist/iconify.js";
import { FC, ReactElement } from "react";

export const Header: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-between">
      <h1 className="text-3xl font-bold">Melodify</h1>
      <div className="flex items-center bg-zinc-800 rounded-lg px-2 py-1 gap-x-1">
        <Icon icon='iconamoon:search' width={20}/>
      <input type="search" className="bg-transparent rounded-r-lg p-1 outline-none" placeholder="Search..." />
      </div>
    </div>
  );
};
