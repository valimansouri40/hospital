import React, { Suspense, useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import Doctors from './components/Doctors/Doctors';
import MyDoctor from './components/MyDoctor/MyDoctor';
import Auth from './continar/Auth/Auth';
import HospitalBuilder from './continar/HospitalBuilder/HospitalBuilder';
import { connect } from 'react-redux';
import * as action from './store/action/index';
import OneDoctor from './components/Doctors/OneDoctor/OneDoctor';
import MyDoctorTime from './components/Doctors/MyDoctorTime/MyDoctorTime';
import MyMariz from './components/Doctors/MyMariz/MyMariz';

const BuildDoctor=React.lazy(()=>{
    return import('./components/BuildDoctor/BuildDoctor')
})

 function App(props){
     const {ondoctor, getdoctor, onuser, user, role}=props;
     
    useEffect(()=>{
    
        onuser();
        
    },[onuser])
    
    const routes= <Switch>
        <Route path='/' exact component={HospitalBuilder}/>
        <Route path='/Mydoctorstimes' exact component={MyDoctorTime}/>
        <Route path='/auth' component={Auth}/>
        <Route path='/doctors' component={Doctors}/>
        <Route path='/builddoctor' component={BuildDoctor}/>
        <Route path='/mydoctor' component={MyDoctor}/>
        <Route path= '/doctor/:id' component={OneDoctor}/>
        <Route path= '/mypatienttime' component={MyMariz}/>
    </Switch>
  return(

      <div>
          <Suspense fallback={<p1>loading...</p1>}>
              {routes}
          </Suspense>
      </div>
  );
 }
 const mapstatetoprops=state=>{
     return{
        getdoctor: state.get.data,
        user:state.get.user,
        role: state.get.role
     }
 }
 const mapdispatchtoprops=dispatch=>{
     return{
         ondoctor:(id)=>dispatch(action.getdoctorinit(id)),
         onuser:()=>dispatch(action.getUserInit()) 
     }
 }
 export default connect(mapstatetoprops, mapdispatchtoprops)(App);