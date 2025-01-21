export const reducerTest = (numberState = 1, action) => {
  if (action.type == "증가") {
    return numberState + 1;
  } else if (action.type == "감소") {
    return numberState - 1;
  } else {
    return numberState; // return은 꼭!s
  }
};
