import React from 'react';
import Counter from '../../../../components/counter';

class Speed extends React.Component{
    render() {
        const title = 'Speed';
        const symbol = 'MPH';
        const value = 60;
        
        return <Counter title = {title} symbol = {symbol} value = {value}/>;
    }
}
export default Speed;