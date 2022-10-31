import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { employees } from '../../utils/employees'
import './popup.css'
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from 'react';

export function Popup(props) {
  const [addEmp, setAddEmp]=useState(false)
  const [groupDetails,setGroupDetails]= useState({
    employees:[]
  })
  const [employeeList,setEmployeeList] = useState([])

  useEffect(()=>{
    setGroupDetails({...groupDetails, "employees": employeeList})
  },[employeeList])

  const handleChange=(e)=>{
    const data = e.target
      setGroupDetails({...groupDetails, [data.name]: data.value})
  }

  const addEmployee=(val)=>{
    setEmployeeList(oldArray => [...oldArray, val])
      
  }

  const createGroup=()=>{
       props.setGroupDetail(groupDetails)
       setAddEmp(false)
       props.onHide()
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
                  <input type="checkbox" name="emp" className='groupCheck' id={val.id} onChange={()=>addEmployee(val.name)} />
                </div>
              ))
            }
            { !addEmp && <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Group Name</Form.Label>
              <Form.Control type="text" name='groupName' placeholder="Enter group name" onChange={handleChange} />
              {/* <Form.Text className="text-muted"> */}
                {/* We'll never share your email with anyone else.
              </Form.Text> */}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name='groupDescription' placeholder="Enter group description" onChange={handleChange}/>
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="primary" onClick={()=>setAddEmp(true)} >
              Add employees
            </Button>
          </Form>
}

        </div>
      </Modal.Body>
      <Modal.Footer style={{justifyContent:"center"}}>
        {addEmp &&<Button onClick={createGroup}>Create Group</Button>}
        {!addEmp &&<Button onClick={props.onHide} >Close</Button>}
      </Modal.Footer>
    </Modal>
  );
}