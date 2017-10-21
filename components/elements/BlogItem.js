import React, { createElement } from 'react'

import Image from '../ui/Image'
import TextBox from '../ui/TextBox'

const BlogItem = ({ text, image }) => (
  createElement('div', null,
    createElement(Image, image),
    createElement(TextBox, null, text)
  )
)

export default BlogItem
