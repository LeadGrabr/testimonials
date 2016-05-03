import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Testimonial } from '../src'
import { Flex } from 'reflexbox'

const renderer = TestUtils.createRenderer()

describe('Testimonial', () => {
    let tree

    beforeEach(() => {
        renderer.render(
            <Testimonial
                img="foobar"
                imgSize={100}
                name="foo"
                text="bar"
            />
        )
        tree = renderer.getRenderOutput()
    })

    it('should render', () => {
        expect(tree.type).toEqual(Flex)
    })
})
