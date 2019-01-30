import React, { Component } from 'react';
import Cinema from '../../components/Movie/Movie';
import batmanImage from '../../assets/imgs/batman.jpg';

class Cinemas extends Component {
    render() {
        return (
            <Cinema img={batmanImage}
            title="Batman Dark Knight"
            prize="10" />
        );
    }
}

export default Cinemas;