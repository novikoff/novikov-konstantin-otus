import React from "react";
import { shallow } from "enzyme";

import City from "../src/components/City/City";

describe("City", () => {
  test("should render", () => {
    const wrapper = shallow(<City />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
