import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Base, Heading, Text } from 'rebass'

const imgSize = 100

const Testimonial = ({ img, name, text }) =>
    <Flex
        align="center"
        column
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
                    height: imgSize,
                    width: imgSize
                }}
            />
        </Box>
        <Box px={2}>
            <Heading
                level={4}
                style={{
                    textAlign: 'center'
                }}
            >
                {name}
            </Heading>
            <Text
                style={{
                    textAlign: 'center'
                }}
            >
                {text}
            </Text>
        </Box>
    </Flex>

Testimonial.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

const Testimonials = ({ testimonials }) =>
    <Flex wrap>
        {testimonials.map((props, key) =>
            <Testimonial
                key={key}
                {...props}
            />
        )}
    </Flex>

Testimonials.propTypes = {
    testimonials: PropTypes.array.isRequired
}

export default Testimonials
