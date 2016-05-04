import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Heading, Text } from 'rebass'
import { Headshot } from '.'

const Testimonial = ({ hideImg, href, img, imgSize, name, text, width }, { breakpoints = {} }) => {
    const { small } = breakpoints
    const textAlign = width > small ? 'left' : 'center'
    return (
        <Flex
            align="center"
            column={!width || !(width > small)}
            mb={2}
        >
            <If condition={!hideImg}>
                <Box
                    mb={2}
                    px={2}
                >
                    <If condition={href}>
                        <a href={href}>
                            <Headshot
                                img={img}
                                imgSize={imgSize}
                            />
                        </a>
                        <Else/>
                        <Headshot
                            img={img}
                            imgSize={imgSize}
                        />
                    </If>
                </Box>
            </If>
            <Box px={2}>
                <Heading
                    level={4}
                    style={{ textAlign }}
                >
                    <If condition={href}>
                        <a href={href}>
                            {name}
                        </a>
                        <Else/>
                        {name}
                    </If>
                </Heading>
                <Text style={{ textAlign }}>
                    {text}
                </Text>
            </Box>
        </Flex>
    )
}

Testimonial.propTypes = {
    hideImg: PropTypes.bool.isRequired,
    href: PropTypes.string,
    img: PropTypes.string.isRequired,
    imgSize: PropTypes.number,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number
}

Testimonial.defaultProps = {
    hideImg: false
}

Testimonial.contextTypes = {
    breakpoints: PropTypes.object
}

export default Testimonial
