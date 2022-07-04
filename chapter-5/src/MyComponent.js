import React from 'react';

class MyComponent extends React.Component {

  state = {
    count: 0,
  };

  constructor(props) {
    super(props);
    this.onClickInc = this.onClickInc.bind(this);
  }

  // this 가 없기 때문에 함수 바인딩이 필요없다.
  onClickHello(e){
    e.preventDefault();
    alert('Hello World');
  }


  // 메서드 내부에서 바인딩을 하고 있다.
  onClickDec(e){
    const {count} = this.state;
    this.setState({count: count - 1});
  }

  // 생성자안에서 바인딩한다.
  onClickInc(e){
    const {count} = this.state;
    this.setState({count: count + 1});
  }

  render() {
    return (
        <div>
          카운트 : {this.state.count}
            <button onClick={this.onClickHello}>Hello</button>
            <button onClick={this.onClickDec.bind(this)}>onClickDec</button>
            <button onClick={this.onClickInc}>onClickInc</button>
        </div>
    )
  }
}

export default MyComponent;
