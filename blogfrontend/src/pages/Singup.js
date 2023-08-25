
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import Base from "../Components/Base";
import '../pages/SignupPage.css';
const Signup = () => {

  return (
    <Base >
        <div className="signup-page" >
        <Row className="mt-4" >
        

          <Col sm={{ size: 5, offset: 2 }}>
            <Card color="dark" inverse>
              <CardHeader>
                <h3> Fill Information to Register !!</h3>
              </CardHeader>

              <CardBody>
                {/* creating form */}

                <Form >
                  {/* Name field */}
                  <FormGroup>
                    <Label for="name">Enter Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter here"
                      id="name"
                    />
                  </FormGroup>

                  {/* email field */}
                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter here"
                      id="email"
                    />
                  </FormGroup>

                  {/* password field */}
                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      placeholder="Enter here"
                      id="password"
                    />
                  </FormGroup>

                  {/* about field */}
                  <FormGroup>
                    <Label for="about">Write something about yourself</Label>
                    <Input
                      type="textarea"
                      placeholder="Enter here"
                      id="about"
                      style={{ height: "250px" }}
                    />
                     <br></br>
                     <br></br>
                     <div className="button-container ">
                     <Button >Register </Button>
                    
                    <Button type="reset" className="ms-2" > Reset </Button>
                    </div>
                  </FormGroup>

                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        </div>
    </Base>
  );
};

export default Signup;
