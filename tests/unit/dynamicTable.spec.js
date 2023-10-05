import { mount } from "@vue/test-utils";
import DynamicTable from "@/components/DynamicTable.vue";

describe("DynamicTable.vue", () => {
  it("renders props.headers in table ", () => {
    const wrapper = mount(DynamicTable, {
      props: {
        headers: [
          {
            text: "Id",
            sortable: false,
          },
          {
            text: "Name",
            sortable: true,
          },
          {
            text: "Email",
            sortable: false,
          },
          {
            text: "Phone",
            sortable: false,
          },
          {
            text: "Company",
            sortable: true,
          },
        ],
      },
    });

    const tHeadCells = wrapper.findAll("table thead th");
    expect(tHeadCells.length).toBe(5);
  });
});
