import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const Headshot = ({ src, size }) =>
    <Base
        circle
        style={{
            backgroundImage: `url('${src}')`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: size,
            width: size
        }}
    />

Headshot.propTypes = {
    size: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired
}

Headshot.defaultProps = {
    size: 100
}

export default Headshot
