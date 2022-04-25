import React, {Component} from 'react';

class ProductList extends Component {
    render() {
        return (
            <div>
                <h4>Product List - {this.props.currentCategory}</h4>
            </div>
        );
    }
}

export default ProductList;