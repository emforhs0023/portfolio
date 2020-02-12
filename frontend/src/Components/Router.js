import React from "react";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";
import Home from "../Routes/Home";
import Main from "../Routes/Main";
import Detail from "../Routes/Detail";
import Homepage from "../Routes/Homepage";

export default () => (
	<Router>
		<div>
			<div>
				<Switch>
					<Route path="/" exact component={Home} /> 
					<Route path="/page" exact component={Homepage} />
					<Route path="/main" exact component={Main} /> 
					<Route path="/:id" component={Detail} />
					<Redirect from="*" to="/" />
				</Switch>	
			</div>
		</div>
	</Router>
)
