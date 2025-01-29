import { Action, CanvasElement } from "@/interfaces";

import { LocalStoragePresentation } from "@/interfaces/LocalStoragePresentation";
import { joinPresentation } from "@/Services/joinPresentation";
import { clearCanvas } from "./clearCanvas";
import { RefObject } from "react";
import { initialState } from "../state";

export const setInitialData = async (
	state: typeof initialState,
	dispatch: (value: Action) => void,
	userName: string,
	id: string,
	ctx: CanvasRenderingContext2D | undefined | null,
	canvasRef: RefObject<HTMLCanvasElement>,
) => {
	const data = await joinPresentation(id, userName ?? "Anonymous");

	dispatch({ type: "SET_TOPIC", payload: data.topic });
	dispatch({ type: "SET_CREATOR", payload: data.creator });
	dispatch({ type: "SET_ID", payload: id });
	dispatch({ type: "SET_TOTAL_SLIDES", payload: data.totalOfSlides });
	dispatch({ type: "SET_ROLE", payload: data.role });
	dispatch({ type: "SET_IS_LOADING", payload: false });
	dispatch({ type: "SET_PARTICIPANT_NAME", payload: String(userName) });

	const newSlides = data.slidesData.map((slide) => {
		return {
			id: slide.id.toString(),
			position: slide.position,
			slidePreview: slide.previewImage,
		};
	});

	if (data.slidesData[0].canvasElements === null) return;
	const canvasElements = data.slidesData[0].canvasElements as CanvasElement[];

	dispatch({ type: "SET_CURRENT_SLIDE", payload: newSlides[0].position });
	dispatch({ type: "SET_DRAWN_ELEMENTS", payload: canvasElements });
	dispatch({ type: "SET_SLIDES_PREVIEWS", payload: newSlides });

	clearCanvas(state, ctx, canvasRef, canvasElements);
};
