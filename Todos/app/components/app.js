import React from 'react';
import {render} from 'react-dom';
import TodoList from 'components/todo-list';
import TodoCreate from 'components/todo-create';
const todos = [
	{'task':'BaoMax','isComplete':true},
	{'task':'WeiBaoB','isComplete':false},
	{'task':'Baby','isComplete':true}
];
class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			todos:todos
		};
	}
	render(){
		return (
			<div>
				<h1>React App Todos</h1>
				<TodoCreate createTask={this.createTask.bind(this)} todos={this.state.todos}/>
				<TodoList todos={this.state.todos} saveTask={this.saveTask.bind(this)} deleteTask={this.deleteTask.bind(this)}/>
			</div>
		);
	}
	createTask(task){
		this.state.todos.push({
			'task':task,
			'isComplete':false
		});
		this.setState({
			todos:this.state.todos
		});
	}
	saveTask(oldTask,newTask){
		const task = _.find(this.state.todos,(item => item.task == oldTask));
		task.task = newTask;
		this.setState({
			todos:this.state.todos
		});
	}
	deleteTask(currtask){
		const task = _.remove(this.state.todos,(item => item.task == currtask));
		this.setState({
			todos:this.state.todos
		});
	}
}
export default App;