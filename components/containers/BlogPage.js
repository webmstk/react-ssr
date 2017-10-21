import React, { Component, createElement } from 'react'

import { IMAGE_WIDTH, IMAGE_HEIGHT } from '../constants/blog'

import BlogList from '../elements/BlogList'

const width = IMAGE_WIDTH
const height = IMAGE_HEIGHT

const items = [
  {
    text: 'Правило 1. Следуйте стандартам оформления кода.',
    image: {
      src: 'images/1.png',
      alt: 'Правило 1',
      width,
      height
    }
  },
  {
    text: 'Правило 2. Давайте наглядные имена.',
    image: {
      src: 'images/2.png',
      alt: 'Правило 2',
      width,
      height
    }
  },
  {
    text: 'Правило 3. Комментируйте и документируйте.',
    image: {
      src: 'images/3.png',
      alt: 'Правило 3',
      width,
      height
    }
  }
]

class BlogPage extends Component {
  constructor (props) {
    super (props)

    this.state = { items }
  }

  render () {
    const { items } = this.state
    return createElement(BlogList, { items })
  }
}

export default BlogPage
