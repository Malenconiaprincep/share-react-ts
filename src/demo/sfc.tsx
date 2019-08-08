import { SFC } from 'react'
import { MouseEvent } from 'react'
import * as React from 'react'
interface IProps {
  onClick (event: MouseEvent<HTMLDivElement>): void,
}
const App: SFC<IProps> = ({onClick, children}) => {
  return (
    <div onClick={onClick}>
      { children }
    </div>
  )
}
export default App