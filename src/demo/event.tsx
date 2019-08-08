import * as React from 'react'

interface IProps {

  onClick (event: React.MouseEvent<HTMLDivElement>): void
  onKeyDown (event: React.KeyboardEvent<HTMLInputElement>) : void
  onChange (event: React.ChangeEvent<HTMLInputElement>): void

}

type Partial<T> = {
  [P in keyof T]?: T[P];
}

export default class EventComponent extends React.Component<Partial<IProps>> {
  public render() {
    return (
      <>
      <p>click event</p>
      <div onClick={this.props.onClick}>点击事件</div>

      <p>change Event</p>
      <input type="text" onKeyDown={this.props.onKeyDown} onChange={this.props.onChange} />

      </>
    )
  }
}