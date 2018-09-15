import React from 'react';
import Speed from './speed';
import Climate from './climate';
import Wheels from './wheels';
import styles from './controlBoard.css';

class ControlBoard extends React.Component{
    render(){
        return  <div className = {styles.container}>
            <Speed />
            <Climate/>
            <Wheels/>
            <div>''</div>
        </div>;
    }
}
export default ControlBoard;