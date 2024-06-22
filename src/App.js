import React, { Component } from 'react';
import Accordion from './components/Accordion';
import "./styles/style.scss";

import img1 from "./images/01.jpg";
import img2 from "./images/02.jpg";
import img3 from "./images/03.jpg";
import img4 from "./images/04.jpg";

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            products: [
                { id: 1, name: "product_1", img: img1, price: 180, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { id: 2, name: "product_2", img: img2, price: 350, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { id: 3, name: "product_3", img: img3, price: 280, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                { id: 4, name: "product_4", img: img4, price: 210, content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ]
        }
    }

    changeIconStat = () => {
        this.setState({
            flag: !this.state.flag,
        });
    }

    render() {
        return (
            <div className='container'>
                <div onClick={this.changeIconStat} className='title' flag={this.state.flag}>
                    <div>Digital products</div>
                    <div>{!this.state.flag ? <i className='fa fa-chevron-up'></i> : <i className='fa fa-chevron-down'></i>}</div>

                </div>

                <div id='myId' className='accordion-item'>
                    {
                        !this.state.flag ? this.state.products.map((product) => (
                            <Accordion key={product.id} name={product.name} img={product.img} price={product.price} content={product.content} />
                        )) : ""
                    }
                </div>
            </div>
        );
    }
}

export default App1;