import type { Meta, StoryObj } from "@storybook/react";
import FormField from "../formField";

const meta: Meta<typeof FormField> = {
  title: "FormField",
  component: FormField,
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: "Username",
    type: "text",
    name: "username",
    value: "",
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      console.log(e.target.value),
  },
};
