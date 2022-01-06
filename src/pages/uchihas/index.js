import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Uchiha from '../../components/uchiha'
import {
  hero,
  section,
  subtitle,
  uchihas,
  description,
} from "../../page.module.css"

const UchihasPage = ({
  data: {
    allWpUchiha: {edges},
    wpPage: {uchihaPageFields},
  }
}) => {
  const image = getImage(uchihaPageFields.headerUchiha.picture.localFile)
  return (
    <Layout pageTitle="Uchiha's from Naruto">
      <GatsbyImage
        className={hero}
        image={image}
        alt={uchihaPageFields.headerUchiha.picture.altText}
      />
      <div className={section}>
        <h2 className={subtitle}>{uchihaPageFields.headerUchiha.title}</h2>
        <div
          className={description}
          dangerouslySetInnerHTML={{
            __html: uchihaPageFields.headerUchiha.description,
          }}
        />
        <div className={uchihas}>
          {edges.map(({ node: uchiha }) => (
            <Uchiha key={uchiha.id} slug={uchiha.slug} uchiha={uchiha} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
query {
  wpPage(slug: {eq: "uchihas"}) {
    uchihaPageFields {
      headerUchiha {
        title
        description
        picture {
          localFile {
            childImageSharp {
              gatsbyImageData(quality: 100, placeholder: BLURRED, layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
    allWpUchiha {
      edges {
        node {
          uchihaFields {
            firstName
            lastName
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED, transformOptions: {grayscale: true})
                }
              }
              altText
            }
          }
          id
          slug
        }
      }
    }
}
`
export default UchihasPage