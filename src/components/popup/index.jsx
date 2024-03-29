import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './popup.css'
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addGroupData, setGroupData } from '../../store/features/groupListReducer';
import axios from 'axios';

export function Popup(props) {
  const [addEmp, setAddEmp] = useState(false)
  const [employees, setEmployees] = useState([])
  const [groupDetails, setGroupDetails] = useState({
    employees: [],
    messages: []
  })
  const [employeeList, setEmployeeList] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    setGroupDetails({ ...groupDetails, "employees": employeeList })
  }, [employeeList])

  const handleChange = (e) => {
    const data = e.target
    setGroupDetails({ ...groupDetails, [data.name]: data.value })
  }

  const addEmployee = (val) => {
    setEmployeeList(oldArray => [...oldArray, val])
  }
  const createGroup = async () => {
    try {
      let data = { ...groupDetails }
      const res = await axios.post("http://44.203.55.138:2222/api/User/CreateGroup", groupDetails)
      dispatch(addGroupData(groupDetails))
      props.setGroupDetail(groupDetails)
      setAddEmp(false)
      props.onHide()
    }
    catch (error) {
      console.log(error);
    }
  }
  const nextPage = () => {
    if (groupDetails.groupName) {
      setAddEmp(true)
    }
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Group
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Employees</h4>
        <div id="popupBody">
          {/* {
            addEmp ?          */}
          {
            addEmp && employees?.map((val, i) => (
              <div id='empList'>
                <div key={i}>{val.name}</div>
                <input type="checkbox" name="emp" className='groupCheck' id={val.id} onChange={() => addEmployee(val.name)} />
              </div>
            ))
          }
          {!addEmp && <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="text" name='groupName' placeholder="Enter group name" onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name='groupDescription' placeholder="Enter group description" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" onClick={nextPage} >
              Add employees
            </Button>
          </Form>
          }

        </div>
      </Modal.Body>
      <Modal.Footer style={{ justifyContent: "center" }}>
        {addEmp && <Button onClick={createGroup}>Create Group</Button>}
        {!addEmp && <Button onClick={props.onHide} >Close</Button>}
      </Modal.Footer>
    </Modal>
  );
}