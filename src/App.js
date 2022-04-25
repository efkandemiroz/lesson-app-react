import React, {Component} from 'react';
import {Col, Container, Row} from "reactstrap";
import Navi from "./components/Navi";
import Category from "./components/Category";
import ProductList from "./components/ProductList";



class App extends Component {
    changeCategory= category =>{
        this.setState({currentCategory:category.categoryName});
    }
    state = {
        categories:[
            {categoryId:1, categoryName:"Baverages"},
            {categoryId:2, categoryName:"Condiments"}
        ],
        currentCategory:""
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Navi/>
                    <Row>
                        <Col md='3' className='mt-2'>
                            <Category changeCategory={this.changeCategory} catList={this.state.categories}  currentCategory={this.state.currentCategory}/>
                        </Col>
                        <Col md='9' className='mt-2'>
                         <ProductList currentCategory={this.state.currentCategory}/>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default App;

