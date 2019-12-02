import React, { Component } from 'react'

class ImageHeader extends Component {

    render() {
        const logoPath = "/ieee-tedu.jpg";
        const logo = <img className="logo img-fluid" alt="IEEE TEDU Computer Society" src={logoPath}></img>
        return (
            logo
        );
    }

}

export default ImageHeader;