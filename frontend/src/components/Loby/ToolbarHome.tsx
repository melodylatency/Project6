"use client";

import { ToolbarHomeProps } from "@/interfaces/ToolBarProps";
import { Button } from "@nextui-org/react";
import type { FC } from "react";

export const ToolbarHome: FC<ToolbarHomeProps> = ({ onNewPresentation }) => {
  return (
    <section className="w-[85%] mx-auto mt-8 flex justify-end gap-6">
      <Button
        onPress={onNewPresentation}
        radius="sm"
        variant="ghost"
        color="primary"
        className="py-3 px-3 text-lg"
      >
        New Presentation
      </Button>
    </section>
  );
};
