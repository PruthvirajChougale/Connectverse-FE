import {Row,Col, Card,Form,Input,Divider, Button,message} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";

const Signup = () =>{
    const navigateUser = useNavigate();
    const HandleSignup = async(v) =>{
        try{
        const values = {...v};
        console.log(values);
        const res = await axios.post("http://localhost:5000/signup",values);
        message.success("Signed up successfully");
        navigateUser("/login");
        console.log(res);
        }
        catch(error){
            console.log(error);
        }
    }
    return(
        <>
        <Form onFinish={HandleSignup}>
        <Row style={{justifyItems:"center",alignItems:"center"}}>
            <h1>Connect Verse</h1>
        </Row>
        <Row>
            <Card style={{height:"25rem",width:"20rem",boxShadow:"0px 0px 4px grey"}}>
            <Row>
                    <Col>
                    <h2>SIGNUP</h2>
                    </Col>
                </Row>
                <Divider />

                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="username"
                label={<span>Username</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Username",
                        unique:true,
                    }
                ]}>
                    <Input placeholder="Username"></Input>
                </Form.Item>
                </Col>
                </Row>

                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="email"
                label={<span>Email</span>}
                rules={[
                    {
                        required:true,
                        message:"Please enter your Email",
                        unique:true,
                    }
                ]}>
                    <Input placeholder="Email"></Input>
                </Form.Item>
                </Col>
                </Row>
               
                <Row>
                <Col xs={24} md={24}>
                <Form.Item
                name="password"
                label={<span>Password</span>}
                rules={[
                    {
                        type:Password,
                        required:true,
                        message:"Please enter your Password"
                    }
                ]}>
                    <Input.Password placeholder="Password"></Input.Password>
                </Form.Item>
                </Col>
                </Row>
                <Row>
                    <Button htmlType="submit">Signup</Button>
                </Row>
            </Card>
        </Row>
        </Form>
        </>
    )
}
export default Signup;