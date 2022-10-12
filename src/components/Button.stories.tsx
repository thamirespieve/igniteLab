import {Meta, StoryObj} from "@storybook/react"
import { Button, ButtonProps } from "./Button";

//Detalhes do componente
export default {
  title:"Components/Button",
  component:Button,
  args: {
    children:'Create account.'
  },
  argTypes:{
  
  }
} as Meta

//Variante do componente
export const Default: StoryObj <ButtonProps>= {}

