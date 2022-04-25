import React, {Component} from 'react';
import {Table} from "reactstrap";

class ProductList extends Component {
    render() {
        return (
            <div>
                <h4>Product List - {this.props.currentCategory}</h4>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Ürün Adı</th>
                        <th>Birim Fiyat</th>
                        <th>Stok Miktarı</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.productList.map(product => (
                        <tr>
                            <td key={product.id}>{product.id}</td>
                            <td>{product.productName}</td>
                            <td>{product.unitPrice}</td>
                            <td>{product.unitsInStock}</td>
                        </tr>
                    ))}


                    </tbody>
                </Table>
            </div>
        );
    }
}

export default ProductList;