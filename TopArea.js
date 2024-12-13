import React from 'react';

function TopArea() {
    return (
        <div className='toparea' style={{
            fontFamily: 'monospace',
            backgroundColor: '#1D1D1B',
            color: 'white',
            height: '2.5em',
            fontSize: '1.2em',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            Welcome to Early Birds. We ship every Tuesday and Thursday. Free shipping above €25 in The Netherlands.
        </div>
    );
}

export default TopArea;