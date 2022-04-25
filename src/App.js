import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Navi from "./components/Navi";
import Category from "./components/Category";
import ProductList from "./components/ProductList";


class App extends Component {
    state = {
        categories: [],
        products:[],
        currentCatId :"",
        currentCategory: ""
    }

    changeCategory = category => {
        this.setState({currentCategory: category.categoryName});
        this.getProduct(category.id);
    }

    componentDidMount() { // COMPONENTLER YÜKLENDİKTEN SONRA OTOMATİK ÇALIŞIR -- LOAD EVENT MANTIĞI
        this.getCategory();
        this.getProduct(0);
    }


    getCategory = () => {
        fetch("http://localhost:3000/categories") // JSON DATANIN GELECEĞİ API YOLUNU YAZIYORUZ
            .then(response => response.json()) // GELEN CEVABI JSONA ÇEVİRİP RESPONSE OLARAK ALIYORUZ
            .then(data => this.setState({categories: data})); // GELEN DATAYI SETSTATE İLE CATEGORIES ARRAYINE AKTARIYORUZ
    }

    getProduct = (catId) => {
        let url="http://localhost:3000/products"
        if (catId != 0){
            url="http://localhost:3000/products?categoryId="+catId
        }
        fetch(url) // JSON DATANIN GELECEĞİ API YOLUNU YAZIYORUZ
            .then(response => response.json()) // GELEN CEVABI JSONA ÇEVİRİP RESPONSE OLARAK ALIYORUZ
            .then(data => this.setState({products: data})); // GELEN DATAYI SETSTATE İLE CATEGORIES ARRAYINE AKTARIYORUZ

    }


    render() {
        return (
            <div>
                <Container fluid>
                    <Navi/>
                    <Row>
                        <Col md='3' className='mt-2'>
                            <Category changeCategory={this.changeCategory} catList={this.state.categories}
                                      currentCategory={this.state.currentCategory}/>
                        </Col>
                        <Col md='9' className='mt-2'>
                            <ProductList productList={this.state.products} currentCategory={this.state.currentCategory}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

