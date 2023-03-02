
    import React from "react"; 
    import { Button,Modal,ModalHeader,ModalBody,ModalFooter, Form } from 'reactstrap';

    const createTask =(modal,toggle)=>{
        return(

    <Modal isOpen={modal} toggle={toggle}>
    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    <ModalBody>
    <Form>
        <div  className="form group">
            <label>Task Name</label>
            <input type="text" className="form-control" placeholder="Enter Task Name" />

        </div>
        <div className="form-group">
            <label>description</label>
            <textarea rows="5" className="form-control" placeholder="description" />
        </div>


    </Form>
    </ModalBody>
    <ModalFooter>
    <Button color="primary" onClick={toggle}>
        create
    </Button>{' '}
    <Button color="secondary" onClick={toggle}>
        Cancel
    </Button>
    </ModalFooter>
    </Modal>
    
        
    )


    }