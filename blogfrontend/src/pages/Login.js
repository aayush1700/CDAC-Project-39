
import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";
import Base from "../Components/Base";
import '../pages/LoginPage.css';
const Login = () => {
  
  return (
    <Base>
    <div className="login-page">
      
        <Row className="mt-4">
          <Col
            sm={{size: 5, offset: 2,}}
          >
            <Card color="dark" inverse>
              <CardHeader>
                <h3>Login Here !!</h3>
              </CardHeader>

              <CardBody>
                <Form >
                  {/* Email field */}

                  <FormGroup>
                    <Label for="email">Enter Email</Label>
                    <Input
                      type="text"
                      id="email"
                     
                    />
                  </FormGroup>

                  {/* password field */}

                  <FormGroup>
                    <Label for="password">Enter password</Label>
                    <Input
                      type="password"
                      id="password"
                     
                    />
                    <div className="button-container ">
                    <Button color="light" outline>Login</Button>
                    <Button className="ms-2" outline color="secondary" >Reset </Button>
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

export default Login;
