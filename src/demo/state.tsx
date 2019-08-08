import * as React from 'react'

interface IProps {
  color?: string,
  size?: string,
}
interface IState {
  count: number,
}

export default class App extends React.Component<IProps, IState> {
  public readonly state: Readonly<IState> = {
    count: 1,
  }
  public render () {
    // this.state.count = 2
    return (
      <div>Hello world</div>
    )
  }
}