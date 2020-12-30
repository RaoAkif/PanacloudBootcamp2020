import React from "react"
import { shallow, mount, render } from "enzyme"
import Timer from "./Timer"
import Toggle from "./Timer"

describe('App', () => {

  const wrapper = render(<Toggle />)

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toBeGreaterThan(1);
	});
});

