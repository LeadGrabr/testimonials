import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Heading, Text } from 'rebass'
import { default as TestimonialHeadshot } from './TestimonialHeadshot'

const Testimonial = ({ href, img, imgSize, name, text, width }, { breakpoints = {} }) => {
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
                <If condition={href}>
                    <a href={href}>
                        <TestimonialHeadshot
                            img={img}
                            imgSize={imgSize}
                        />
                    </a>
                    <Else/>
                    <TestimonialHeadshot
                        img={img}
                        imgSize={imgSize}
                    />
                </If>
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
    href: PropTypes.string,
    img: PropTypes.string.isRequired,
    imgSize: PropTypes.number,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number
}

Testimonial.contextTypes = {
    breakpoints: PropTypes.object
}

export default Testimonial
