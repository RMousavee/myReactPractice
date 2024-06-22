import React, { Component } from 'react';


class Accordion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
        }
    }

    changeHeart = () => {
        this.setState({
            flag: !this.state.flag,
        });
    }

    render() {
        const { name, img, price, content } = this.props;
        return (
            <div className='product-box'>
                <img src={img} />
                <h3>{name}</h3>
                <mark>{price}$</mark>
                <p>{content}</p>

                <div onClick={this.changeHeart}>{!this.state.flag ? <i className='fa fa-heart-o'></i> : <i className='fa fa-heart'></i>}</div>

            </div>
        );
    }
}

export default Accordion;