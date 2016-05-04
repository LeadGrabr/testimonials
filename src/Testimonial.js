import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, Text } from 'rebass'

const Testimonial = ({ img, imgSize, name, text, width }, { breakpoints = {} }) => {
    const { small } = breakpoints
    const textAlign = width > small ? 'left' : 'center'
    return (
        <Flex
            align="center"
            column={!width || !(width > small)}
            mb={2}
        >
            <Box
                mb={2}
                px={2}
            >
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
            </Box>
            <Box px={2}>
                <Heading
                    level={4}
                    style={{ textAlign }}
                >
                    {name}
                </Heading>
                <Text style={{ textAlign }}>
                    {text}
                </Text>
            </Box>
        </Flex>
    )
}

Testimonial.propTypes = {
    img: PropTypes.string.isRequired,
    imgSize: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number
}

Testimonial.contextTypes = {
    breakpoints: PropTypes.object
}

Testimonial.defaultProps = {
    imgSize: 100
}

export default Testimonial
