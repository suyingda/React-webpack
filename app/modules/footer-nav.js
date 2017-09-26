import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom';

const FooterNav = () => (
    <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/order'>Order</Link></li>
        <li><Link to='/cart'>Cart</Link></li>
        <li><Link to='/my'>My</Link></li>
    </ul>
)

export default FooterNav;