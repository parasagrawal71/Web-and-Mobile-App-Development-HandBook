import React from 'react';

class SingleImage extends React.Component{
    constructor(props) {
        super(props);

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.imageRef);
        // console.log(this.imageRef.current.clientHeight); // if image doesn't get load, it will print 0

        this.imageRef.current.addEventListener('load', ()=> {
            console.log(this.imageRef.current.clientHeight);
        })
    }

    render() {
        const {src, alt} = this.props;
        
        return (
            <img ref={this.imageRef} src={src} alt={alt} />
        );
    }
};

export default SingleImage;