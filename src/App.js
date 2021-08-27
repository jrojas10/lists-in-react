
import './App.css';
import { Component } from 'react';
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: '',
        id: uniqid()
      },
      tasks: [],
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
        text: '',
        id: uniqid()
      },
    });
  };


  //deconstructing

  render() {
    const { task, tasks } = this.state;

    return (
      <div className="container-fluid">
        <form onSubmit={this.onSubmitTask}>
          <div className="col col-md-2 mb-3">
            <label className="form-label" htmlFor="taskInput">Enter Task</label>
            <input className="form-control" type="text" id="taskinput" onChange={this.handleChange} value={task.text} id="taskInput" />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Task
          </button>
        </form>
        <Overview tasks={tasks} />
      </div>
    );
  }
}


export default App;
