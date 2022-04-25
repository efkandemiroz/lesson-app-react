import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from "reactstrap";

class Category extends Component {

    state = {
        // categories:[
        //     {categoryId:1, categoryName:"Baverages"},
        //     {categoryId:2, categoryName:"Condiments"}
        // ]

    }
    render() {
        return (
            <div>
                <h4>{this.props.currentCategory}</h4>
                <ListGroup>
                    {this.props.catList.map(category=>(
                        <ListGroupItem
                            onClick={()=>this.props.changeCategory(category)}
                            key={category.categoryId}
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