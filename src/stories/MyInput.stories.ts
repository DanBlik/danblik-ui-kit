import type { Meta, StoryObj } from "@storybook/react"

import { MyInput } from "../components/MyInput"

const meta = {
  title: "Example/Input",
  component: MyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyInput>

export default meta
type Story = StoryObj<typeof meta>

export const BaseInput: Story = {
  args: {
    padding: "12px 24px",
    placeholder: "Some text of input",
  },
}
