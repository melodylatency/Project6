import { Action } from "@/interfaces";
import { MouseEvent, RefObject } from "react";
import { initialState } from "..";
import { getClickedElement } from ".";

export const onMouseDown = (
	e: MouseEvent<HTMLCanvasElement>,
	state: typeof initialState,
	dispatch: (value: Action) => void,
	canvasRef: RefObject<HTMLCanvasElement>,
	ctx: CanvasRenderingContext2D | undefined | null,
) => {
	if (!canvasRef.current || state.role === "viewer") return;

	const rect = canvasRef.current.getBoundingClientRect();

	const x = e.clientX - (rect.left || 0);
	const y = e.clientY - (rect.top || 0);
	const clickedElement = getClickedElement(ctx, state, x, y);

	if (state.editorMode === "text") return;

	if (state.editorMode === "cursor") {
		if (clickedElement) {
			dispatch({ type: "SET_CLICKED_CANVAS_ELEMENT", payload: clickedElement });
			dispatch({ type: "SET_START_X", payload: x });
			dispatch({ type: "SET_START_Y", payload: y });
			return;
		}

		dispatch({ type: "SET_IS_DROP_DOWN_MENU_OPEN", payload: false });
		dispatch({ type: "SET_CLICKED_CANVAS_ELEMENT", payload: null });
		return;
	}

	dispatch({ type: "SET_IS_DRAWING", payload: true });
	dispatch({ type: "SET_START_X", payload: e.clientX - (rect?.left || 0) });
	dispatch({ type: "SET_START_Y", payload: e.clientY - (rect?.top || 0) });
};
