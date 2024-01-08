
export function ReducerFx(state, action) {
  switch (action.type) {

    case "RequisitionTitle":
      return {
        ...state,
        requisitionTitle: action.requisitionValue
      };

    case "OpeningNumber":
      return {
        ...state,
        NumberOfOpening: action.openingsNumber
      };

    case "SetGender":
      return {
        ...state,
        gender: action.genderOption
      };

    case "setUrgency":
      return {
        ...state,
        urgency: action.optionUrgency
      };

    case "setJobTitle":
      return {
        ...state,
        title: action.title
      };

    case "setJobDetails":
      return {
        ...state,
        details: action.details
      };

    case "setJobLocation":
      return {
        ...state,
        location: action.location
      };

    case "setInterviewMode":
      return {
        ...state,
        mode: action.mode
      };

    case "setInterviewDuration":
      return {
        ...state,
        duration: action.duration
      };

    case "setJobLanguage":
      return {
        ...state,
        lang: action.lang
      };

    case "EmptyInput":
      return {
        ...state,
        requisitionTitle: "",
        NumberOfOpening: "",
        gender: "",
        urgency: "",
        title: "",
        details: "",
        location: "",
        mode: "",
        duration : "",
        lang: "",
      };
    
    default:
      return state;
  }
};