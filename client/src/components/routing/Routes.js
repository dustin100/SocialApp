import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Alert from '../layout/Alert';
import Register from '../auth/Register';
import Login from '../auth/Login';
import Dashboard from '../dashboard/Dashboard';
import PrivateRoute from '../routing/PrivateRoute';
import CreatProfile from '../profile-forms/CreateProfile';
import EditProfile from '../profile-forms/EditProfile';
import AddExperience from '../profile-forms/AddExperience';
import Profiles from '../Profiles/Profiles';
import Profile from '../Profile/Profile';
import Posts from '../Posts/Posts';
import Post from '../Post/Post';
import NotFound from '../layout/NotFound';
import AddEducation from '../profile-forms/AddEducation';

const Routes = () => {
	return (
		<section className='container'>
			<Alert />

			<Switch>
				<Route exact path='/register' component={Register} />
				<Route exact path='/login' component={Login} />
				<Route exact path='/profiles' component={Profiles} />
				<Route exact path='/profile/:id' component={Profile} />

				<PrivateRoute exact path='/dashboard' component={Dashboard} />
				<PrivateRoute exact path='/create-profile' component={CreatProfile} />
				<PrivateRoute exact path='/edit-profile' component={EditProfile} />
				<PrivateRoute exact path='/add-experience' component={AddExperience} />
				<PrivateRoute exact path='/add-education' component={AddEducation} />
				<PrivateRoute exact path='/posts' component={Posts} />
				<PrivateRoute exact path='/posts/:id' component={Post} />
				<Route component={NotFound} />
			</Switch>
		</section>
	);
};

export default Routes;
