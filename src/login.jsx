import {Row,Col, Card,Form,Input,Divider, Button,message} from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Password from "antd/es/input/Password";

const Login = () =>{
    const navigateUser = useNavigate();
    const Login = async(v) =>{
        try{
        const values = {...v};
        console.log(values)
        const res= await axios.post("http://localhost:5000/login",values);
        if(res){
            message.success("logged in");
        }
       
        navigateUser("/home")
        }
        catch(error){
            console.log(error.response.data.message);
            message.error(error.response.data.message)
           
        }
    }
    return(
        <>
        <Form onFinish={Login}>
        <Row style={{justifyItems:"center",alignItems:"center"}}>
            <h1>Connect Verse</h1>
        </Row>
        <Row>
            <Card style={{height:"25rem",width:"20rem",boxShadow:"0px 0px 4px grey"}}>
            <Row>
                    <Col>
                    <h2>LOGIN</h2>
                    </Col>
                </Row>
                <Divider />

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
                    <Button htmlType="submit">Login</Button>
                </Row>
                <br />
                <span>Don't have an account</span>
                <a href="/signup">Signup here</a>
            </Card>
        </Row>
        </Form>
        </>
    )
}

export default Login;