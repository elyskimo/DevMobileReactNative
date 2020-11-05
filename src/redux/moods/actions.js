import moodsActions from "./constants";

export function setMoods() {
    const moods = {
        id: 2,
        mood: 2,
        title: "Bof"
    };

    return async function (dispatch) {
        dispatch({
            type: moodsActions.SET_MOODS,
            moods: moods
        })
    }
}