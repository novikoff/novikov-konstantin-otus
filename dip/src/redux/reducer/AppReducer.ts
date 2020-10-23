import { IActionIncDec, Actions } from "../action/actions";

const initialState = {
  // full_cities_list: [],
  // rand_cities_list: [],
  // favorite_arr: localStorage.favorite
  //   ? JSON.parse(localStorage.favorite).map((el) => Number(el))
  //   : [],
  // dropDownFlag: false,
  testing_now: 1,
  body_type: "",
  target_body_type: "",
  problem_areas: [],
  fitness_level: "",
  tall: 0,
  weight: 0,
  age: 0,
  workout_location: "",
  email: "",
};

export default function AppReducer(
  state = initialState,
  action: IActionIncDec
) {
  switch (action.type) {
    case Actions.SET_BODY_TYPE:
      return {
        ...state,
        body_type: action.body_type,
      };
    case Actions.SET_TARGET_BODY_TYPE:
      return {
        ...state,
        target_body_type: action.target_body_type,
      };

    case Actions.SET_PROBLEM_AREAS:
      return {
        ...state,
        problem_areas: action.problem_areas,
      };
    case Actions.SET_FITNESS_LEVEL:
      return {
        ...state,
        fitness_level: action.fitness_level,
      };
    case Actions.SET_TALL:
      console.log("action.tall", action.tall);
      return {
        ...state,
        tall: action.tall,
      };
    case Actions.SET_WEIGHT:
      return {
        ...state,
        weight: action.weight,
      };
    case Actions.SET_AGE:
      return {
        ...state,
        age: action.age,
      };
    case Actions.SET_WORKOUT_LOCATION:
      return {
        ...state,
        workout_location: action.workout_location,
      };
    case Actions.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      };
    case Actions.NEXT_STEP:
      return {
        ...state,
        testing_now: action.next_step,
      };

    // case Actions.SELECT_SET_ITEM:
    //   return { state };
    //
    // case Actions.SET_API_KEY:
    //   return {
    //     ...state,
    //     ApiKey: action.ApiKey,
    //   };
    // case Actions.FETCH_INFO_SUCCESS:
    //   return {
    //     ...state,
    //     current_city_data: action.data,
    //   };
    default:
      return { ...state };
  }
  return state;
}
