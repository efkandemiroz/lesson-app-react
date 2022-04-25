import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Category extends Component {


        render() {
        return (
            <div>
                <h4>Category Lists</h4>
                <ListGroup>
                    {this.props.catList.map(category=>(
                        <ListGroupItem
                            onClick={()=>this.props.changeCategory(category)}
                            key={category.id}
                            id={category.id}
                        >
                            {category.categoryName}
                        </ListGroupItem>
                    ))}



                </ListGroup>

            </div>
        );
    }
}

export default Category;