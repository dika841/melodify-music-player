import { Sidebar } from "@/components/organisms";
import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";
export const DashboardLayout: FC = ():ReactElement => {
  return (
    <main className="flex w-full min-h-screen bg-zinc-950 overflow-hidden text-white">
      <Sidebar />
      <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
        <div className="max-w-screen-2xl p-4 md:p-6">
          <Outlet />
        </div>
      </div>
    </main>
  );
};
