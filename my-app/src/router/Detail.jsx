import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Detail = props => (
    <div>
        This is detail page.
        Back to <Link to='/home'>home</Link>
    </div>
);

export default Detail;