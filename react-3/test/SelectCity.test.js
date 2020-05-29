import React from "react";
import { shallow } from "enzyme";

import SelectCity from "../src/components/SelectCity/SelectCity";

describe("SelectCity", () => {
  test("should render", () => {
    const wrapper = shallow(<SelectCity />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
