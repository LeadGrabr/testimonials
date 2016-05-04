import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const TestimonialHeadshot = ({ img, imgSize }) =>
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

TestimonialHeadshot.propTypes = {
    img: PropTypes.string.isRequired,
    imgSize: PropTypes.number.isRequired
}

TestimonialHeadshot.defaultProps = {
    imgSize: 100
}

export default TestimonialHeadshot
