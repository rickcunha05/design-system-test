import { styled } from "./styles"

const Button = styled('button',{
  fontFamily: '$default',
  backgroundColor: '$purple500',
  borderRadius: '$md'
})
export function App(){
  return <Button> Hello World </Button>
}