import { default as React, PropTypes } from 'react'
import { Base } from 'rebass'

const Headshot = ({ src, size, style, ...props }) =>
    <Base
        style={{
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            ...style,
            backgroundImage: `url('${src}')`,
            height: size,
            width: size
        }}
        {...props}
    />

Headshot.propTypes = {
    circle: PropTypes.bool,
    size: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    style: PropTypes.object
}

Headshot.defaultProps = {
    circle: true,
    size: 100
}

export default Headshot
