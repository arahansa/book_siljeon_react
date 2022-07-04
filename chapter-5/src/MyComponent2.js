import React from 'react';

class MyComponent2 extends React.Component {

  state = {
    count: 0,
  };

  onClickHello  = e => {
    e.preventDefault();
    alert('Hello World');
  }


  onClickDec = () => {
    const {count} = this.state;
    this.setState({count: count - 1});
  }

  onClickInc = () => {
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

export default MyComponent2;
