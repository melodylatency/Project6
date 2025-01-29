"use client";

import { FaSquare, FaCircle } from "react-icons/fa";
import { SlActionUndo, SlActionRedo } from "react-icons/sl";
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { HiMagnifyingGlassMinus } from "react-icons/hi2";
import { PresentationToolbarProps } from "@/interfaces";
import { Button, SelectItem, Select } from "@nextui-org/react";
import { GoArrowUp } from "react-icons/go";
import { GiArrowCursor } from "react-icons/gi";
import { CiText } from "react-icons/ci";
import { FC } from "react";

export const Toolbar: FC<PresentationToolbarProps> = ({
  onUndo,
  onReundo,
  changeEditorMode,
  chageStrokeColor,
  state,
  exportToPDF,
}) => {
  return (
    <header className="w-full h-24 flex">
      <div className="border-b-2 border-gray-700 w-[15%] flex justify-center gap-6 items-center">
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          variant="faded"
          isDisabled={state.role === "viewer"}
          onPress={onUndo}
        >
          <SlActionUndo size={40} />
        </Button>

        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          variant="faded"
          isDisabled={state.role === "viewer"}
          onPress={onReundo}
        >
          <SlActionRedo size={40} />
        </Button>
      </div>
      <div className="w-[40%] border-b-2 border-gray-700 flex justify-center gap-3 items-center">
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          isDisabled={state.role === "viewer"}
          color={state.editorMode === "cursor" ? "primary" : "default"}
          className="p-2"
          variant={state.editorMode === "cursor" ? "shadow" : "faded"}
          onPress={() => changeEditorMode("cursor")}
        >
          <GiArrowCursor size={40} />
        </Button>

        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          isDisabled={state.role === "viewer"}
          variant={state.editorMode === "text" ? "shadow" : "faded"}
          color={state.editorMode === "text" ? "primary" : "default"}
          onPress={() => changeEditorMode("text")}
        >
          <CiText size={40} />
        </Button>

        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          isDisabled={state.role === "viewer"}
          variant={state.editorMode === "circle" ? "shadow" : "faded"}
          color={state.editorMode === "circle" ? "primary" : "default"}
          onPress={() => changeEditorMode("circle")}
        >
          <FaCircle size={40} />
        </Button>
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          isDisabled={state.role === "viewer"}
          variant={state.editorMode === "arrow" ? "shadow" : "faded"}
          color={state.editorMode === "arrow" ? "primary" : "default"}
          onPress={() => changeEditorMode("arrow")}
        >
          <GoArrowUp size={40} />
        </Button>
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          isDisabled={state.role === "viewer"}
          variant={state.editorMode === "rectangle" ? "shadow" : "faded"}
          color={state.editorMode === "rectangle" ? "primary" : "default"}
          onPress={() => changeEditorMode("rectangle")}
        >
          <FaSquare size={40} />
        </Button>
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          variant={state.editorMode === "zoomin" ? "shadow" : "faded"}
          color={state.editorMode === "zoomin" ? "primary" : "default"}
          onPress={() => changeEditorMode("zoomin")}
        >
          <HiOutlineMagnifyingGlassPlus size={40} />
        </Button>
        <Button
          radius="sm"
          isIconOnly
          size="lg"
          className="p-2"
          variant={state.editorMode === "zoomout" ? "shadow" : "faded"}
          color={state.editorMode === "zoomout" ? "primary" : "default"}
          onPress={() => changeEditorMode("zoomout")}
        >
          <HiMagnifyingGlassMinus size={40} />
        </Button>
        <Select
          isDisabled={state.role === "viewer"}
          aria-label="Stroke color"
          radius="sm"
          defaultSelectedKeys={["Blue"]}
          onChange={(e) => chageStrokeColor(e.target.value)}
          style={{ height: 48 }}
          className={"w-36"}
          endContent={
            <div
              className="text-sm w-20 h-7 rounded-sm"
              style={{
                backgroundColor: state.selectedStrokeColor,
              }}
            />
          }
          labelPlacement="inside"
          variant="faded"
        >
          <SelectItem key="Green">Green</SelectItem>
          <SelectItem key="Red">Red</SelectItem>
          <SelectItem key="Blue">Blue</SelectItem>
          <SelectItem key="Orange">Orange</SelectItem>
          <SelectItem key="Purple">Purple</SelectItem>
          <SelectItem key="Yellow">Yellow</SelectItem>
        </Select>
      </div>

      <div className="w-[25%] flex px-14 flex-col justify-center p-5 border-b-2 border-gray-700">
        <div className="flex justify-between items-start">
          <p>{state.presentationTopic}</p>
          <p>Presentation ID # {state.presentationId}</p>
        </div>
        <div className="flex justify-between">
          <div>By : {state.presentationCreator}</div>

          <div> Slide : {state.currentSlide}</div>
        </div>
      </div>
      <div className="w-[20%] flex justify-around items-center border-b-2 border-gray-700">
        <Button
          radius="sm"
          color="primary"
          variant="shadow"
          onPress={exportToPDF}
        >
          Export to PDF
        </Button>
      </div>
    </header>
  );
};
