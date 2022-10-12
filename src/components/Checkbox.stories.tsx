import {Meta, StoryObj} from "@storybook/react"
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from "./Text";

//Detalhes do componente
export default {
  title:"Components/Checkbox",
  component:Checkbox,
  args: {},
  argTypes:{},
  decorators:[
    (Story)=>{
      return(
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembre de mim por 30 dias</Text>
        </div>
      )
    }
  ]
  
} as Meta

//Variante do componente
export const Default: StoryObj <CheckboxProps>= {}

