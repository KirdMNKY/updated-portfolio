import React from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';
import "./ContactCard.css";

import ResumesCard from "../ResumesCard/ResumesCard";

const Cardbody = () =>
    {

    function handleInputChange(event){
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

    function validTrue (){
        document.write(
            <div>
            <Input valid />
            <FormFeedback valid>Email Format is Valid.</FormFeedback>
            </div>
            );
            
    }

    function validFalse (){
        document.write(
            <div>
            document.write(
            <Input invalid />
            <FormFeedback>Not a Valid Email Format</FormFeedback>
            </div>
            );
            
    }

    

    function checkValid(event){
        {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(document.getElementById("email").value))
             {
                return(true)
             }else {
                 return(false)
             }
           }
      }

      
    function sendemail()
    {
        var email = document.getElementById("email").value;
        var name = document.getElementById("name").value;
        var message = document.getElementById("message").value;
        var subject = ('Message From: ' + name);
        var body = (message);
        document.write('<a href="mailto:' + "mr.mike.soto@gmail.com" + '?subject=' +subject+ '&body= Email from:' + email + ' ' +body+ '">' + 'Click here to send email as well' + '<'+'/a>');
    }
     
        return (

        <div className="ContactCard">
            <div className="contactIntro">
                <h1>contact</h1>
            </div>

            <Form>
                <FormGroup>
                    <Label for="exampleText">Name</Label>
                    <Input type="name" name="text" id="name" placeholder="Your Name"/>
                    <br />
                    <Label for="email">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="example@example.com" OnChange= { this.handleInputChange } />
                    {/* OnInput={ this.checkValid ? validTrue() : validFalse() } /> */}
                    <br />
                    <Label for="message">Text Area</Label>
                    <Input type="textarea" name="text" id="message" placeholder="Please leave me a message and I will get back to you as soon as possilbe."/>
                </FormGroup>
                <Button className="submitBtn" OnClick={ this.sendemail }>Submit</Button>
            </Form>
            <br /><br /><br />
            <ResumesCard />

        </div>
        )
}
export default Cardbody;