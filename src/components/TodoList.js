import React, { useState } from "react";
import CreateTask from '../modals/CreateTask'

const TodoList = () => {

  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    setTaskList([...taskList, taskObj]);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setModal(false);
  };

  return (
    <>
      <div className="header text-center">
        <h3>Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={toggle}>Create Task</button>
      </div>

      <div className="task-container">
        {taskList.map((obj) => <li>{obj.taskName}</li>)}
      </div>

      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </>
  );
};

export default TodoList;
