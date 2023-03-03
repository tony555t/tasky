import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { useState } from 'react';

const CreateTask = ({ modal, toggle, save }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <Form>
          <div className="form-group">
            <label>Task Name</label>
            <input
              type="text"
              className="form-control"
              value={taskName}
              placeholder="Enter Task Name"
              onChange={handleChange}
              name="taskName"
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              rows="5"
              className="form-control"
              value={description}
              placeholder="description"
              onChange={handleChange}
              name="description"
            />
          </div>
        </Form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={() => save({ taskName, description })}>
          Create
        </Button>{' '}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTask;
