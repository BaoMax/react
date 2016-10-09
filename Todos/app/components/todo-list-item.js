import React from 'react';
import {render} from 'react-dom';
class TodoListItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			isEditing:false,
			error:null
		};
	}
	reanderAction(){
		if(this.state.isEditing){
			return (
					<td>
						<button onClick={this.saveHandle.bind(this)}>Save</button>
						<button onClick={this.cancelHandle.bind(this)}>Cancel</button>
						{this.renderError()}
					</td>
				);
		}else{
			return (
					<td>
						<button onClick={this.editHandle.bind(this)}>Edit</button>
						<button onClick={this.deleteHandle.bind(this)}>Delete</button>
					</td>
				);
		}
	}
	reanderTask(){
		if(this.state.isEditing){
			return (
					<td>
						<input type="text" defaultValue={this.props.task} ref="editInput"/>
					</td>
				);
		}
		if(this.props.isComplete){
			return <td><s>{this.props.task}</s></td>
		}else{
			return <td>{this.props.task}</td>;
		}
	}
	renderError(){
		return (
				<span>{this.state.error}</span>
			);
	}
	render(){
		return (
				<tr>
					{this.reanderTask()}	
					{this.reanderAction()}
				</tr>
			);
	}
	testTask(task){
		if(task == ""){
			return "TaskName不能为空";
		}else if(_.find(this.props.todos,(item)=>item.task == task)){
			return "Task已经存在";
		}else{
			return "";
		}
	}
	cancelHandle(){
		this.setState({
			isEditing:false
		});
	}
	editHandle(){
		this.setState({
			isEditing:true
		});
	}
	saveHandle(){
		const oldTask = this.props.task;
		const newTask = this.refs.editInput.value;
		const error = this.testTask(newTask);
		if(error){
			this.setState({
				error:error
			});
			return ;
		}
		this.props.saveTask(oldTask,newTask);
		this.setState({
			isEditing:false
		});
	}
	deleteHandle(){
		const task = this.props.task;
		this.props.deleteTask(task);
	}
}
export default TodoListItem;