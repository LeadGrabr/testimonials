import { default as React } from 'react'
import { default as TestUtils } from 'react-addons-test-utils'
import { default as expect } from 'expect'
import { Headshot } from '../src'
import { Base } from 'rebass'

const renderer = TestUtils.createRenderer()

describe('Headshot', () => {
    let tree

    beforeEach(() => {
        renderer.render(
            <Headshot
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
