import React from 'react';
import {render} from 'react-dom';
import _ from 'lodash'
import TodoHeader from 'components/todo-header';
import TodoListItem from 'components/todo-list-item';
class TodoList extends React.Component{
	renderItem(){
		return _.map(this.props.todos,(item,index)=>{
			return (
					<TodoListItem {...item} {...this.props}/>
				);
		});
	}
	render(){
		return (
				<table>
					<TodoHeader />
					<tbody>
						{this.renderItem()}
					</tbody>
				</table>
			);
	}
}
export default TodoList;