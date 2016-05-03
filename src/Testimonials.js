import { default as React, PropTypes } from 'react'
import { Flex } from 'reflexbox'
import { default as Testimonial } from './Testimonial'

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
