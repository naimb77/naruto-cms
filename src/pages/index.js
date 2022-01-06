import * as React from 'react'
import Layout from '../components/layout'
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
  CTA,
  section,
  subtitle,
  uchihas,
} from "../page.module.css"
import Uchiha from '../components/uchiha'


const IndexPage = ({
  data: {
    wpPage: { homepage },
  },
}) => { const image = getImage(homepage.headerHome.picture.localFile)

  return (
    <Layout>
      <div className={header}>
        <div className={headerInfo}>
          <h1 className={headerTitle}>{homepage.headerHome.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: homepage.headerHome.description,
            }}
          />
          <a className={CTA} target="__blank" href={homepage.callToAction.link}>
            {homepage.callToAction.linkText}
          </a>
        </div>
        <div>
          <GatsbyImage
            image={image}
            className={headerPicture}
            alt={homepage.headerHome.picture.altText}
          />
        </div>
      </div>
      
      <div className={section}>
    <h2 className={subtitle}>{homepage.featuredUchihas.title}</h2>
    <p >{homepage.featuredUchihas.description}</p>
    <div className={uchihas}>
      {homepage.featuredUchihas.uchihas.map(uchiha => (
            <Uchiha slug={`uchihas/${uchiha.slug}`} key={uchiha.id} uchiha={uchiha} />
          ))}
    </div>
  </div>
    </Layout>
  )
  
}

export const query = graphql`
query {
  wpPage(slug: {eq: "home"}) {
    homepage {
      headerHome {
        description
        title
        picture {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 500, height: 500)
            }
          }
        }
      }
      callToAction {
        linkText
        link
      }
      featuredUchihas {
        uchihas {
          ... on WpUchiha {
            id
            uchihaFields {
              firstName
              lastName
              picture {
                localFile {
                  childImageSharp {
                    gatsbyImageData(placeholder: BLURRED)
                  }
                }
                
              }
            }
            slug
          }
        }
        
    title
    description
      }
    }
  }
}
`
export default IndexPage