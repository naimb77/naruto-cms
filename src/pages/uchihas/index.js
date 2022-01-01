import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const UchihasPage = ({data: {allWpUchiha: {edges}}}) => {
  return (
    <Layout pageTitle="Uchiha's from Naruto">
      {edges.map((item) => {
        const uchiha = item.node.uchihaFields;
        const slug = item.node.slug;
        return <Link to={`/uchihas/${slug}`}>
          <p key={item.node.id}>{uchiha.firstName} {uchiha.lastName}</p>
        </Link>
      })}
    </Layout>
  )
}

export const query = graphql`
query{
  allWpUchiha {
    edges {
      node {
        uchihaFields {
          firstName
          lastName
        }
        id
        slug
      }
    }
  }
}
`
export default UchihasPage