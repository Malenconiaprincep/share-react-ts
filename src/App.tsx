import * as React from 'react'
import EventComponent from './demo/event'
import { http1 } from './demo/fetch/fetch1';
import { http2 } from './demo/fetch/fetch2';
import { http3 } from './demo/fetch/fetch3';
import { get, post } from './demo/fetch/fetch4';
import SfcComponent from './demo/sfc'
import StateComponent from './demo/state'

interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default class App extends React.Component {

  public clickHandler() {
    alert('我是无状态组件')
  }

  public clickEvent() {
    alert('点击事件')
  }

  public changeEvent(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('change', event.target.value)
  }

  public async loadData() {
    const api = `/api/list`
    const res = await http1(api)
    console.log('fetch1 >>> 输出')
    console.log(res)

    const res1 = await http2<ITodo[]>(api)
    console.log('fetch2 >>> 输出')
    console.log(res1)
    // console.log(res1[0].aa)

    const res2 = await http3<ITodo[]>(api)
    console.log('fetch3 >>> 输出')
    console.log(res2.parsedBody)


    const res3 = await get<ITodo[]>(api)
    console.log('get >>> 输出')
    console.log(res3.parsedBody)

    const res4 = await post<ITodo[]>('/api/detail/3', {})
    console.log('post >>> 输出')
    console.log(res4.parsedBody)
  }

  public render() {
    return (
      <>
      <div>
        有状态组件: 
        <StateComponent />
      </div>
      <div>
        无状态组件:
        <SfcComponent onClick={this.clickHandler}>
          <button type="submit" name="点击我" />
        </SfcComponent>
      </div>
      <div>
        事件：
        <EventComponent 
          onClick={this.clickEvent} 
          onChange={this.changeEvent} 
        />
      </div>

      <div>
        加载数据:
        <button onClick={this.loadData}>点击加载数据</button>
      </div>

      </>
    )
  }
}