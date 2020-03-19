import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import Landing from './Landing';

// const Landing = ()=> <h2>Landing</h2>
const Dashboard=()=><h2>Dashboard </h2>
// const SurveyNew = ()=><h2>Survey</h2>

class  App extends React.Component {


    componentDidMount(){  
         this.props.fetchUser();
        
    }
   
    render() {
        return (
            <div className="container">
               <BrowserRouter>
               <div>
                   <Header/>
                  <Route exact path="/"  component={Landing} />
                  <Route exact path="/surveys" component={Dashboard}  />
                  {/* <Route path="/surveys/new" component={SurveyNew} /> */}
                 </div>
               </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);