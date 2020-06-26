import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Media } from 'reactstrap';



class DishDetail extends React.Component {

    renderDish(dish) {

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
    renderComments(dish) {
        const dishComment = dish.comments.map((comment) => {
            return (
                <li key={"comment" + comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: '2-digit' }).format(new Date(comment.date))}
                    </p>
                </li>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h3>Comments</h3>
                <ul className="list-unstyled">
                    {dishComment}
                </ul>
            </div>
        );
    }

    render() {
        const dish = this.props.dish;
        if (dish != null)
            return (
                <div className="container" style={{ textAlign: 'left' }}>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>

                        {this.renderComments(dish)}

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