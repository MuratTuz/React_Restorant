import React from 'react';

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
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

const DishDetail = (props) => {
    const dish = props.dish;
    if (dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>
        );


}

export default DishDetail;