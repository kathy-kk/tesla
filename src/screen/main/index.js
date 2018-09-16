import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/actions';
import { getIsLoading } from '../../store/reducers';
import Header from '../../components/header';
import Dashboard from './containers/dashboard';
import IsLoading from './containers/isLoading';
import '../../root.css';


class MainScreen extends React.Component{
    componentDidMount(){
        const { fetchTesla } = this.props;
        fetchTesla();
    }
    render(){
        const { isLoading } = this.props;
        
        return isLoading? <IsLoading /> 
            : (<div>
                <Header />
                <Dashboard />
            </div>);
    }
}
const mapStateToProps = state => ({
    isLoading: getIsLoading(state)
});
export default connect(mapStateToProps, actions)(MainScreen);