import {Meta, StoryObj} from "@storybook/react"
import {Envelope} from 'phosphor-react'
import { TextInput, TextInputRootProps } from "./TextInput";

//Detalhes do componente
export default {
  title:"Components/TextInput",
  component:TextInput.Root,
  args: {
   children:
   ( 
    <>
      <TextInput.Icon >
        <Envelope/>
      </TextInput.Icon>
      <TextInput.Input placeholder = 'Type your email address' />
    </>
   )
  }
  ,
  argTypes:{
    children:{
      table:{
        disable:true
      }
    }
  }
} as Meta<TextInputRootProps>

//Variante do componente
export const Default: StoryObj <TextInputRootProps>= {}

