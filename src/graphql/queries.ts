import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query getPages($first: Int) {
    pages(first: $first) {
      body {
        html
      }
      id
      slug
      heading
    }
  }
`

export const GET_PAGE_BY_SLUG = gql`
  query getPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_STACKS = gql`
  query getStacks($first: Int) {
    stacks(first: $first) {
      id
      name
      description {
        html
      }
      galleryStack {
        id
        url
        id
        height
        width
      }
      slug
      gallery {
        id
        url
        height
        width
      }
    }
  }
`

export const GET_STACKS_BY_SLUG = gql`
  query getStacksBySlug($slug: String) {
    stack(where: { slug: $slug }) {
      id
      name
      description {
        html
      }
      slug
      galleryStack {
        url
        width
        height
        id
      }
      gallery {
        id
        url
        height
        width
      }
    }
  }
`
