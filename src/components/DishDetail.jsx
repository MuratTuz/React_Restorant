import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';


function renderDish(dish) {

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

function renderComments(dish) {
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
        <div className="col-12 col-md-5 m-1">
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
            <div className="container" style={{ textAlign: 'left' }}>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {renderDish(dish)}
                    </div>

                    {renderComments(dish)}

                </div>
            </div>
        );
    else
        return (
            <div></div>
        );


}

export default DishDetail;