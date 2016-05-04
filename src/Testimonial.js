import { default as React, PropTypes } from 'react'
import { Flex, Box } from 'reflexbox'
import { Heading, Text } from 'rebass'
import { Headshot } from '.'

const Testimonial = ({ headshot, href, img, imgSize, name, text, truncateTextAt, width }, { breakpoints = {} }) => { // eslint-disable-line max-len
    const { small } = breakpoints
    const textAlign = width > small ? 'left' : 'center'
    return (
        <Flex
            align="center"
            column={!width || !(width > small)}
            mb={2}
        >
            <If condition={headshot}>
                <Box
                    mb={2}
                    px={2}
                >
                    <If condition={href}>
                        <a href={href}>
                            <Headshot
                                size={imgSize}
                                src={img}
                            />
                        </a>
                        <Else/>
                        <Headshot
                            size={imgSize}
                            src={img}
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
                    <If condition={text.length > truncateTextAt}>
                        {text.substring(0, truncateTextAt)}...
                        <Else/>
                        {text}
                    </If>
                </Text>
            </Box>
        </Flex>
    )
}

Testimonial.propTypes = {
    headshot: PropTypes.bool.isRequired,
    href: PropTypes.string,
    img: PropTypes.string,
    imgSize: PropTypes.number,
    name: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    truncateTextAt: PropTypes.number.isRequired,
    width: PropTypes.number
}

Testimonial.defaultProps = {
    headshot: true,
    truncateTextAt: Infinity
}

Testimonial.contextTypes = {
    breakpoints: PropTypes.object
}

export default Testimonial
