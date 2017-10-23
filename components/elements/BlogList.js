import React, { createElement } from 'react'
import { map, assign } from 'lodash'

import BlogItem from './BlogItem'

const BlogList = ({ items }) => (
  createElement('div', null,
    map(items, (item, key) => (
      createElement(BlogItem, assign({}, { key }, item))
    ))
  )
)

export default BlogList
