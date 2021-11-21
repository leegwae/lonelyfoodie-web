export interface Events {
	[index: string]: (() => void) | undefined;
	mouseover?: () => void;
	mouseout?: () => void;
	click?: () => void;
}

const addEventsOnMarker = (marker: any, events: Events) => {
	Object.keys(events).forEach((event) => {
		window.kakao.maps.event.addListener(marker, event, events[event]);
	});
};

export default addEventsOnMarker;
