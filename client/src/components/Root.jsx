import React, { Component } from 'react';
import About from './About.jsx';
import Headband from './Headband.jsx'
import HeaderInner from './HeaderInner.jsx'

class Root extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Headband />
                <div className='container'>
                    <HeaderInner />
                </div>
            </div>
        );
    }
}

export default Root;