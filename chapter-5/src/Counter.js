import React from 'react';

class Counter extends React.Component{
    state = {
        count: 0,
    };
    onClick = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }
    render(){
        const {count} = this.state;
        if(count >= 3){
            throw new Error('에러발생!!');
        }
        return (
            <div onClick={this.onClick}>
                {`클릭하세요 (${count})`}
            </div>
        );
    }
}

export default Counter;
