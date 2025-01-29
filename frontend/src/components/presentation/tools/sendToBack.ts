import { Action } from "@/interfaces";
import { initialState } from "..";
import { RefObject } from "react";
import { clearCanvas } from "./clearCanvas";
import { updateZindex } from "@/sockets/updateZindex";

export const sendToBack = (
	state: typeof initialState,
	ctx: CanvasRenderingContext2D | undefined | null,
	canvasRef: RefObject<HTMLCanvasElement>,
	dispatch: (value: Action) => void,
) => {
	if (!state.clickedCanvasElement) return;

	const newElements = state.drawnElements.filter(
		(elementDrawn) => elementDrawn.id !== state.clickedCanvasElement?.id,
	);
	const newElementsWithElement = [state.clickedCanvasElement, ...newElements];

	dispatch({
		type: "SET_DRAWN_ELEMENTS",
		payload: newElementsWithElement,
	});

	updateZindex(
		newElementsWithElement,
		state.currentSlide,
		state.presentationId,
	);

	clearCanvas(state, ctx, canvasRef, newElementsWithElement);
};
