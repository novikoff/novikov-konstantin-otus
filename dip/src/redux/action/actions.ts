export enum Actions {
  NEXT_STEP = "NEXT_STEP",
  SET_BODY_TYPE = "SET_BODY_TYPE",
  SET_TARGET_BODY_TYPE = "SET_TARGET_BODY_TYPE",
  SET_PROBLEM_AREAS = "SET_PROBLEM_AREAS",
  SET_FITNESS_LEVEL = "SET_FITNESS_LEVEL",
  SET_TALL = "SET_TALL",
  SET_WEIGHT = "SET_WEIGHT",
  SET_AGE = "SET_AGE",
  SET_WORKOUT_LOCATION = "SET_WORKOUT_LOCATION",
  SET_EMAIL = "SET_EMAIL",

  ADD_NUMBER = "ADD_NUMBER",
  LOAD_CITIES = "LOAD_CITIES",

  SELECT_LOAD_CITIES = "SELECT_LOAD_CITIES",
  SELECT_DROP_DOWN_SWITCH = "SELECT_DROP_DOWN_SWITCH",
  SELECT_CHANGE_VALUE = "SELECT_CHANGE_VALUE",
  SELECT_SET_ITEM = "SELECT_SET_ITEM",

  FETCH_INFO_SUCCESS = "FETCH_INFO_SUCCESS",
  SET_API_KEY = "SET_API_KEY",

  ADD_TO_FAVORITE = "ADD_TO_FAVORITE",
  REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE",
}

export interface IActionIncDec {
  testing_now: number;
  next_step: number;
  type?: Actions;
  body_type: string;
  target_body_type: string;
  problem_areas: [string];
  fitness_level: string;
  tall: number;
  weight: number;
  age: number;
  workout_location: string;
  email: string;

  // payload?: any;
  // data?: { [key: string]: any };
  // value?: any;
  // id?: number;
  // flag?: boolean;
  // ApiKey?: string;
}

export function SET_BODY_TYPE(body_type: string) {
  return {
    type: Actions.SET_BODY_TYPE,
    body_type,
  };
}
export function SET_TARGET_BODY_TYPE(target_body_type: string) {
  return {
    type: Actions.SET_TARGET_BODY_TYPE,
    target_body_type,
  };
}
export function SET_PROBLEM_AREAS(problem_areas: [string]) {
  return {
    type: Actions.SET_PROBLEM_AREAS,
    problem_areas,
  };
}
export function SET_FITNESS_LEVEL(fitness_level: string) {
  return {
    type: Actions.SET_FITNESS_LEVEL,
    fitness_level,
  };
}
export function SET_TALL(tall: number) {
  return {
    type: Actions.SET_TALL,
    tall,
  };
}
export function SET_WEIGHT(weight: number) {
  return {
    type: Actions.SET_WEIGHT,
    weight,
  };
}
export function SET_AGE(age: number) {
  return {
    type: Actions.SET_AGE,
    age,
  };
}
export function SET_WORKOUT_LOCATION(workout_location: string) {
  return {
    type: Actions.SET_WORKOUT_LOCATION,
    workout_location,
  };
}
export function SET_EMAIL(email: string) {
  return {
    type: Actions.SET_EMAIL,
    email,
  };
}

export function NEXT_STEP(next_step: number) {
  return {
    type: Actions.NEXT_STEP,
    next_step,
  };
}

export function addNumber(payload) {
  return {
    type: Actions.ADD_NUMBER,
    payload: payload,
  };
}
export function addAsync(payload) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(addNumber(payload));
    }, 2000);
  };
}

export function LoadCities(json_list) {
  return {
    type: Actions.LOAD_CITIES,
    data: json_list,
  };
}

export function SelectLoadCities() {
  return {
    type: Actions.SELECT_LOAD_CITIES,
  };
}

export function dropDownSwitch(flag?) {
  return {
    type: Actions.SELECT_DROP_DOWN_SWITCH,
    flag: flag,
  };
}
export function selectChangeValue(value) {
  return {
    type: Actions.SELECT_CHANGE_VALUE,
    value: value,
  };
}

export function selectSelectCity(id) {
  return {
    type: Actions.SELECT_SET_ITEM,
    id: id,
  };
}
export function setApiKey(ApiKey) {
  return {
    type: Actions.SET_API_KEY,
    ApiKey,
  };
}

const dateConverter = (unix_utc: number) => {
  const date = new Date(unix_utc * 1000);
  return (
    date.getUTCDate() +
    "." +
    (date.getUTCMonth() + 1) +
    "." +
    date.getUTCFullYear()
  );
};
export const asyncGetCityInfo = (id, api_key) => (dispatch) => {
  let city_key = "city_" + id;
  if (localStorage.getItem(city_key)) {
    dispatch({
      type: "FETCH_INFO_SUCCESS",
      data: JSON.parse(localStorage.getItem(city_key)),
    });
  } else {
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?id=" +
        id +
        "&appid=" +
        api_key +
        "&units=metric"
    )
      .then((res) => res.json())
      .then((json_data) => {
        let city = json_data.city;
        let prev_day = "";
        let list = json_data.list.filter((el) => {
          let now_day = dateConverter(el.dt);
          if (now_day != prev_day) {
            prev_day = now_day;
            return el;
          }
        });
        localStorage.setItem(city_key, JSON.stringify({ city, list }));
        dispatch({ type: "FETCH_INFO_SUCCESS", data: { city, list } });
      })
      .catch((e) => {
        dispatch({ type: "FETCH_INFO_ERROR", payload: [] });
      });
  }
};

export function addToFavorite(id) {
  return {
    type: "ADD_TO_FAVORITE",
    id,
  };
}

export function removeFromFavorite(id) {
  return { type: "REMOVE_FROM_FAVORITE", id: id };
}
