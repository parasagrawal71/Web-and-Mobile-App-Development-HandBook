import React from 'react';
import {Link} from 'react-router-dom';

import GoogleAuth from '../components/GoogleAuth';

const Header = () => {
    return <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <div>
            <Link to="/streams/show">Streamer</Link>
        </div>
        {/* <div>
            <Link to="/">Login</Link>
        </div> */}
        <GoogleAuth />
    </div>;
}

export default Header;