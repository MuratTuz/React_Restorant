import React, { Component } from 'react';

import {
    Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem,
    Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Col, FormFeedback
} from 'reactstrap';


import { Link } from 'react-router-dom';


function RenderDish({ dish }) {
    //const { dish: _dish } = xdish; //object destructuring
    return (
        <Card key={"card" + dish.id}>
            <CardImg top src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
    );
}

function RenderComments(dish) {
    const dishComment = dish.comments.map((comment) => {
        return (  // the return of the variable
            <li key={"comment" + comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}
                </p>
            </li>
        );
    });

    return (  // the return of the func.
        <div>
            <h3>Comments</h3>
            <ul className="list-unstyled">
                {dishComment}
            </ul>
        </div>
    );
}

class DishDetail extends Component {
    constructor(props) {
        super(props);

        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            isModelOpen: false,
            errors: ''
        };
    }

    /* validate(value) {
         let error;
         if (this.state.yourNameTouched && value.length === 0) error = ' Required ';
         if (this.state.yourNameTouched && value.length > 0 && value.length < 2) error = ' Must be greater than 2 characters ';
         if (this.state.yourNameTouched && value.length > 15) error = ' Must be 15 characters or less ';
 
         return error;
     }*/


    handleInputChange(event) {
        let error, value = event.target.value;

        if (value.length === 0) error = ' Required '
        else if (value.length > 0 && value.length < 2) error = ' Must be greater than 2 characters '
        else if (value.length > 15) error = ' Must be 15 characters or less '
        else error = '';

        this.setState({
            errors: error
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Your rating: " + this.rating.value + " Your name: " + this.yourname.value
            + " Your commets: " + this.comment.value);
        event.preventDefault();

    }

    render() {
        const yourNameError = this.state.errors;
        return (

            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{this.props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={this.props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={this.props.comments} />
                        <Button outline onClick={this.toggleModal}><span className="fa fa-pencil-square fa-lg">
                        </span> Submit Commit</Button>
                    </div>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                        <ModalBody>
                            <Form onSubmit={this.handleLogin}>
                                <FormGroup row>
                                    <Col md={10}>
                                        <Label htmlFor="rating">Rating</Label>
                                        <Input type="select" id="rating" name="rating"
                                            innerRef={(input) => this.rating = input} >
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option> </Input>
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md={10}>
                                        <Label htmlFor="yourName">Your Name</Label>
                                        <Input type="text" id="yourName" name="yourName"
                                            innerRef={(input) => this.yourname = input}
                                            // value={this.state.lastname}
                                            valid={yourNameError === ''}
                                            invalid={yourNameError !== ''}
                                            onChange={this.handleInputChange} />
                                        <FormFeedback>{yourNameError}</FormFeedback>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Your Comments</Label>
                                    <Input type="textarea" name="comment" id="comment" rows="6"
                                        innerRef={(input) => this.comment = input} />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </Form>
                        </ModalBody>
                    </Modal>
                </div >
            </div >
        );
    }

}

export default DishDetail;