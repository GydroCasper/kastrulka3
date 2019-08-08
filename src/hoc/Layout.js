import React from 'react';
import HeaderComponent from '../Header/components/headerComponent';

function layout(props) {
    return (
        <React.Fragment>
            <HeaderComponent/>
            <main>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default layout;