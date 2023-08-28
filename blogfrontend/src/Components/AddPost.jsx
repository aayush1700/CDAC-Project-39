import { Button, Card,CardBody ,Container,Form,Input, Label} from "reactstrap";
import TrekAPIService from "../pages/TrekAPIService/TrekAPIService";
import { useEffect, useState } from "react";
const AddPost=()=>{

    const[categories,setCategories]=useState([])
    useEffect(
        ()=>{
              TrekAPIService.loadAllCategories().then((data) =>{
                console.log(data)
                setCategories(data)
              }).catch(error=>{
                console.log(error)
              })  
        },[]
    )

    return(
        <div className="wrapper">
            
            <Card className="shadow-sm border-2 mt-3">
                <CardBody>
                    <h3>What is going in your mind</h3>
                    <Form>
                        <div className="my-3">
                            <Label for="title">Post </Label>
                            <Input type="text" id="title" placeholder="Enter Title here" className="rounded-0"/>
                        </div>
                        <div className="my-3">
                            <Label for="content">Post Content </Label>
                            <Input type="textarea" id="content" placeholder="Enter Content here" className="rounded-0"
                            style={{height:'300px'}}
                            />
                        </div>
                        <div className="my-3">
                            <Label for="category">Post Category </Label>
                            <Input type="select" id="category"  className="rounded-0"
                           >
                           {
                            categories.map((category)=>{
                                <option value={category.category_Id}key={category.category_Id}>
                                    {category.title}
                                </option>
                            })
                           }
                           </Input>
                        </div>
                        <Container className="text-center">
                            <Button className="rounded-0"color="primary">Create Post</Button>
                            <Button className="rounded-0 ms-2"color="danger">Reset Content</Button>
                        </Container>
                    </Form>
                </CardBody>
            </Card>
        </div>
    )
}

export default AddPost;