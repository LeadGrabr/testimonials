import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { default as TestimonialHeadshot } from '../src/TestimonialHeadshot'
import { Base } from 'rebass'

const renderer = TestUtils.createRenderer()

describe('TestimonialHeadshot', () => {
    let tree

    beforeEach(() => {
        renderer.render(
            <TestimonialHeadshot
                img="foobar"
                imgSize={100}
            />
        )
        tree = renderer.getRenderOutput()
    })

    it('should render', () => {
        expect(tree.type).toEqual(Base)
    })
})
