import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, Text } from 'rebass'

const Testimonial = ({ img, name, size, text, width }, { breakpoints: { small } }) => {
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
                        backgroundSize: 'cover',
                        height: size,
                        width: size
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
    breakpoints: PropTypes.object.isRequired
}

Testimonial.defaultProps = {
    imgSize: 100
}

const Testimonials = ({ testimonials, ...props }) =>
    <Flex wrap>
        {testimonials.map((testimonial, key) =>
            <Testimonial
                key={key}
                {...props}
                {...testimonial}
            />
        )}
    </Flex>

Testimonials.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Testimonials
