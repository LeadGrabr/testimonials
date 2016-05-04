import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const Headshot = ({ img, imgSize }) =>
    <Base
        circle
        style={{
            backgroundImage: `url('${img}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: imgSize,
            width: imgSize
        }}
    />

Headshot.propTypes = {
    img: PropTypes.string.isRequired,
    imgSize: PropTypes.number.isRequired
}

Headshot.defaultProps = {
    imgSize: 100
}

export default Headshot
