import React from 'react';
//import axios from 'axios';
//import logo from './logo.svg';
//import { Link, Switch, Route, Router } from 'react-router';
import Header from "./components/Header/header"; 
import Footer from "./components/Footer/footer"; 
import Main from "./views/Main/main";
//import Plan from "./views/Main/plan";
import './App.css';



class App extends React.Component {
/*	constructor(props) {
	  super(props);
	  this.state = { apiResponse: "" };
	}

	/*state = {
		persons: []
	}*/

/*	callApi(){
		/*axios.get("http://127.0.0.1:8080/api/users")
			.then(res => { 
				const persons = res.data;
				this.setState( { persons });
			})*/
/*	   fetch("http://127.0.0.1:8080/api/users")
		.then(res => res.text())
		.then(res => this.setState({ apiResponse: res }))
		.catch(err => err);
        }
        
 	componentDidMount() {
		this.callApi();   
    }
*/
  render() {
    return (
	    <div>	
	    	<Header/>
			<Main/>
			<Footer/>
	   </div>
    );
 }
}

export default App;