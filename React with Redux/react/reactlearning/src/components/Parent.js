import React from 'react';

const Parent = (props) => {
    console.log(props);
    console.log(typeof props.children, Array.isArray(props.children));
    console.log(props.children);
    return (
        <div>
            Hey! Parent Here
            {props.children}
        </div>
    );
};

export default Parent;