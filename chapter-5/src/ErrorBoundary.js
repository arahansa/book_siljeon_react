import React from 'react';

class ErrorBoundary extends React.Component{
    state = {error:null};
    static getDerivedStateFromError(error){
        return {error};
    }
    componentDidCatch(error, info){
        this.sendErrorToServer(error, info);
    }

    sendErrorToServer(error, info){
        console.log('I am sendErrorToServer : ', error, info);
    }

    render(){
        const {error} = this.state;
        if(error){
            return <div>{error.toString()}</div>;
        }
        return this.props.children;
    }
}


export default ErrorBoundary;
