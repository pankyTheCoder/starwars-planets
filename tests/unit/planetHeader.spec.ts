import { shallowMount } from "@vue/test-utils";
import PlanetsHeader from "@/components/PlanetsHeader.vue";

describe("PlanetsHeader.vue", () => {
  it("renders props.msg when passed", () => {
    const headerText = "Planets";
    const wrapper = shallowMount(PlanetsHeader, {
      propsData: { headerText },
    });
    expect(wrapper.text()).toMatch(headerText);
  });
});
