import type { Meta, StoryObj } from "@storybook/react";
import ReturnButton from "../returnButton";

const meta: Meta<typeof ReturnButton> = {
  title: "ReturnButton",
  component: ReturnButton,
};

export default meta;
type Story = StoryObj<typeof ReturnButton>;

export const Default: Story = {
  args: {
    onClick: () => console.log("Return button clicked"),
  },
};
