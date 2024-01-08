import { createContext, useContext, useReducer } from "react";
import { ReducerFx } from "../ReducerFolder/Reducer";

export const Data = createContext(null);
export const Dispatch = createContext(null);

const initialState = {
  requisitionTitle : "",
  NumberOfOpening : null,
  gender: null,
  urgency : "",
  title : "",
  details : "",
  location : "",
  mode : "",
  duration : "",
  lang : "",
};

export function DataProvider({ children }) {
  const [state, dispatch] = useReducer(ReducerFx, initialState);
  return <Data.Provider value={state}>
    <Dispatch.Provider value={dispatch}>
      {children}
    </Dispatch.Provider>
  </Data.Provider>
};

// ! custom Hook:-
export function useData() {
  return useContext(Data);
};

export function useDispatch() {
  return useContext(Dispatch);
};