import React from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import Dashboard from './dashboard';
function Submission(loadDashboard,name){
	if(loadDashboard)
		ReactDOM.render(<Dashboard name={name} />,document.getElementById('app'));
}

ReactDOM.render(<Form SubmitForm={Submission} />,document.getElementById('app'));
