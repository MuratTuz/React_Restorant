import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Media } from 'reactstrap';



class DishDetail extends React.Component {


    render() {
        const dish = this.props.dish;
        if (dish != null)
            return (
                <div className="container" style={{ textAlign: 'left' }}>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card key={"card" + dish.id}>
                                <CardImg top src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <Media key={"key" + dish.id}>
                                <Media body>
                                    <Media heading>
                                        Comments
                                    </Media>
                                    {dish.comments.map((comment) =>
                                        <div key={"comment" + comment.id}>
                                            <p>{comment.comment}</p>
                                            <p>-- {comment.author}  {comment.date}</p>
                                        </div>
                                    )}
                                </Media>
                            </Media>
                        </div>
                    </div>
                </div>
            );
        else
            return (
                <div></div>
            );

    }
}

export default DishDetail;