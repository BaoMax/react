import React from 'react';
import {render} from 'react-dom';
class TodoCreate extends React.Component{
	constructor(props){
		super(props);
		this.state={
			error:false
		};
	}
	render(){
		return (
				<form onSubmit={this.createTask.bind(this)}>
					<input type="text" placeholder="what do you want to do?" ref="inputTask"/>
					<button type="submit">Create</button>
					{this.renderError()}
				</form>
			);
	}
	createTask(e){
		e.preventDefault();
		const task = this.refs.inputTask.value;
		const error = this.testTask(task);
		if(error){
			this.setState({
				error:error
			});
			return ;
		}
		this.props.createTask(task);
		this.refs.inputTask.value = "";
	}
	testTask(task){
		if(task == ""){
			return "taskName不能为空";
		}else if(_.find(this.props.todos,(item)=>item.task == task)){
			return "task已存在";
		}
		return "";
	}
	renderError(){
		return (
			<p>{this.state.error}</p>
			);
	}
}
export default TodoCreate;