import type { Meta, StoryObj } from "@storybook/react";
import FormSelect from "../formSelect";

const meta: Meta<typeof FormSelect> = {
  title: "FormSelect",
  component: FormSelect,
};

export default meta;
type Story = StoryObj<typeof FormSelect>;

export const Default: Story = {
  args: {
    label: "Select Option",
    options: [
      { label: "Option 1", value: "option1" },
      { label: "Option 2", value: "option2" },
      { label: "Option 3", value: "option3" },
    ],
    value: "option1",
    onChange: (e) => console.log(e.target.value),
  },
};
