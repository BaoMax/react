import React from 'react';
import {render} from 'react-dom';
class TodoHeader extends React.Component{
	render(){
		return (
				<thead>
					<tr>
						<th>Task</th><th>Action</th>
					</tr>
				</thead>
			);
	}
}
export default TodoHeader;