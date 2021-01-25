import { useRef, useState } from 'react';
import {
  Card, CardTitle, CardFooter,
  FormGroup, Form, Input, Label,
  Col, Row,
  Button,
  Modal, ModalHeader, ModalBody,
  Alert,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  CardBody,
  FormText,
  Spinner,
} from 'reactstrap';
import { atom, selector, useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import Axios from 'axios';
import {
  PersonBadgeFill, PersonSquare, Upload,
  TelephoneFill, EnvelopeFill, Building
} from 'react-bootstrap-icons';

// Axios.defaults.baseURL = 'http://localhost:5000';

const form_state = atom({
  key: 'form_state',
  default: {
    fullname: "",
    orgname: "",
    empid: "",
    mobnum: "",
    emailid: "",
    photo: null,
  }
});

const file_state = atom({
  key: 'file_state',
  default: ["warning", "Please select a png/jpg file (<1MB)"]
})

const form_valid = selector({
  key: 'form_valid',
  get: ({ get }) => {
    const form_sel = get(form_state);
    const out = {
      fullname_valid: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g.test(form_sel.fullname),
      orgname_valid: /[a-zA-Z0-9 -]/g.test(form_sel.orgname),
      empid_valid: /[A_Z0-9]/g.test(form_sel.empid),
      mobnum_valid: /^(\+\d{1,3}[- ]?)?\d{10}$/g.test(form_sel.mobnum),
      emailid_valid: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(form_sel.emailid),
      photo_valid: (form_sel.photo === null ? false : true)
    };
    if (Object.keys(out).every((val) => out[val])) out.all_valid = false;
    else out.all_valid = true;
    return out;
  }
});

export default function RegCard() {
  const [form, setForm] = useRecoilState(form_state);
  const [file, setFile] = useRecoilState(file_state);
  const form_validator = useRecoilValue(form_valid);
  const reset_form = useResetRecoilState(form_state);
  const reset_file = useResetRecoilState(file_state);

  const file_input = useRef(null);
  const [submit_state, setSubstatus] = useState(
    <Alert color="info" style={{ margin: "0px" }}>
      <Spinner color="info" style={{ width: '3rem', height: '3rem' }} /><br />
      <div>Please Wait, Your Patience is Appreciated</div>
    </Alert>
  )

  const [prevFlag, setPrev] = useState(false);
  const toggle = () => setPrev(!prevFlag);

  const [subFlag, setSub] = useState(false);
  const subtoggle = () => setSub(!subFlag);

  function setFormstate(e) {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function Prevmod() {
    return (
      <Modal isOpen={prevFlag} toggle={toggle} size="lg" centered={true}>
        <ModalHeader> Preview </ModalHeader>
        <ModalBody>
          <Row>
            <Col sm={5}>
              <Label>Full Name: {form.fullname}</Label><br />
              <Label>Organization Name: {form.orgname}</Label><br />
              <Label>Employment ID: {form.empid}</Label><br />
              <Label>Mobile Number: {form.mobnum}</Label><br />
              <Label>Email ID: {form.emailid}</Label>
            </Col>
            <Col sm={7}>
              <img width="70%" height="auto" id="profpic" src={form.photo} alt="profie_img" />
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    );
  };

  const Submit = () => {
    setSub(true);
    Axios.post("/api/register", form).then((resp) => {
      if (resp.data.status === "FAIL") {
        setSubstatus(
          <Alert color="warning" style={{ margin: "0px" }}
          isOpen={true} toggle={() => setSub(false)}>
            {resp.data.msg}
          </Alert>)
      }
      else if (resp.data.status === "SUCCESS") {
        setSubstatus(
          <Alert color="success" style={{ margin: "0px" }} 
          isOpen={true} toggle={() => setSub(false)}>
            Registered with Registration ID: {resp.data.msg}
          </Alert>)
        reset_form();
        reset_file();
      }
    }).catch((error) => {
      setSubstatus(
        <Alert color='danger' style={{ margin: "0px" }} 
        isOpen={true} toggle={() => setSub(false)}>
          Registration Failed
        </Alert>
      )
    });
  }

  const setPhotoFile = (e) => {
    const fi_name = e.target.files
    if (fi_name.length === 0) {
      setFile(["warning", "No file selected"]);
      setForm(prevState => ({ ...prevState, photo: null }));
    }
    else if (fi_name[0].size / 1024 > 1024) {
      setFile(["danger", "File size Violation"]);
      setForm(prevState => ({ ...prevState, photo: null }));
    }
    else if (fi_name[0].type === "image/png" || fi_name[0].type === "image/jpeg") {
      const reader = new FileReader();
      reader.addEventListener("loadend", () => {
        setFile(["success", "Upload Success"]);
        setForm(prevState => ({ ...prevState, photo: reader.result }));
      })
      reader.addEventListener("error", () => {
        setFile(["danger", "Error parsing file"]);
        setForm(prevState => ({ ...prevState, photo: null }));
      })
      reader.readAsDataURL(fi_name[0]);
    }
    else if (fi_name[0].type !== "image/png" || fi_name[0].type !== "image/jpeg") {
      setFile(["danger", "Not an Image file"]);
      setForm(prevState => ({ ...prevState, photo: null }));
    }
  }

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Register</CardTitle>
      </CardBody>
      <CardBody>
        <Form>
          <Row>
            <Col sm={8}>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText>
                    <PersonSquare size={24} />
                  </InputGroupText></InputGroupAddon>
                  <Input type="text" name="fullname"
                    placeholder="Full Name" value={form.fullname}
                    onChange={setFormstate}
                    valid={form_validator.fullname_valid}
                    invalid={!form_validator.fullname_valid} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText>
                    <Building size={24} />
                  </InputGroupText></InputGroupAddon>
                  <Input type="text" name="orgname"
                    placeholder="Organization Name" value={form.orgname}
                    onChange={setFormstate}
                    valid={form_validator.orgname_valid}
                    invalid={!form_validator.orgname_valid} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText>
                    <PersonBadgeFill size={24} />
                  </InputGroupText></InputGroupAddon>
                  <Input type="text" name="empid"
                    placeholder="Employee ID No" value={form.empid}
                    onChange={setFormstate}
                    valid={form_validator.empid_valid}
                    invalid={!form_validator.empid_valid} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText>
                    <TelephoneFill size={24} />
                  </InputGroupText></InputGroupAddon>
                  <Input type="text" name="mobnum"
                    placeholder="Mobile Number" value={form.mobnum}
                    onChange={setFormstate}
                    valid={form_validator.mobnum_valid}
                    invalid={!form_validator.mobnum_valid} />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend"><InputGroupText>
                    <EnvelopeFill size={24} />
                  </InputGroupText></InputGroupAddon>
                  <Input type="email" name="emailid"
                    placeholder="Email" value={form.emailid}
                    onChange={setFormstate}
                    valid={form_validator.emailid_valid}
                    invalid={!form_validator.emailid_valid} />
                </InputGroup>
              </FormGroup>
            </Col>
            <Col sm={4}>
              <FormGroup>
                <Button color={file[0]}
                  onClick={() => file_input.current.click()} size="lg">
                  <Upload size={56} />
                  <div>Upload ID Card</div>
                </Button>
                <Input type="file" id="idpic" style={{ display: 'none' }}
                  name="photo" label="Insert a JPG or PNG file"
                  accept="image/jpeg,image/png"
                  onChange={setPhotoFile} innerRef={file_input} />
                <FormText>{file[1]}</FormText>
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </CardBody>
      <CardFooter>
        <Row>
          <Col sm={6}>
            <Button outline type="primary" id="preview"
              onClick={toggle} disabled={form_validator.all_valid}>
              Preview
            </Button>
            <Prevmod />
          </Col>
          <Col sm={6}>
            <Button type="primary"
              onClick={Submit}
              disabled={form_validator.all_valid}>Submit</Button>
            <Modal isOpen={subFlag} toggle={subtoggle}
              centered={true} backdrop="static"
              keyboard={true} className='text-center'>
              <ModalBody style={{ padding: "0px" }}>{submit_state}</ModalBody>
            </Modal>
          </Col>
        </Row>
      </CardFooter>
    </Card>
  );
}