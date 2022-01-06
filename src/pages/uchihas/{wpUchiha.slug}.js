import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'
import {
  header,
  headerInfo,
  uchihaName,
  headerPicture,
  fullName,
  uchihaEyes,
  uchihaDescription,
  uchihaInfo,
  uchihaPicture,
  uchihaPictures,
} from "../../page.module.css"


const UchihaPage = ({
  data: {
    wpUchiha: {
      uchihaFields: uchiha,
      eyes: {nodes: eyes},
    },
  },
}) => {
  const image = getImage(uchiha.picture.localFile)
  const picture1 = getImage(uchiha.pictures.picture1.localFile)
  const picture2 = getImage(uchiha.pictures.picture2.localFile)
  const picture3 = getImage(uchiha.pictures.picture3.localFile)
  return (
    <Layout pageTitle="Uchiha Template">
    <div className={header}>
      <div className={headerInfo}>
      {uchiha.firstName && <h3 className={uchihaName}>{uchiha.lastName}</h3>}
          <div className={uchihaEyes}>
            {eyes.map((eye, i) => (
              <span key={i}>
                {eye.name} {i + 1 < eyes.length && "- "}
              </span>
            ))}
          </div>
      <h1 className={fullName}>{uchiha.firstName} {uchiha.lastName}</h1>
      <div
        className={uchihaDescription} 
        dangerouslySetInnerHTML={{__html: uchiha.description}} />
      <p><span className={uchihaInfo}>Age:</span> {uchiha.age}</p>
      <p><span className={uchihaInfo}>Weight:</span> {uchiha.weight}</p>
      <p><span className={uchihaInfo}>Height:</span> {uchiha.height}</p>
      <p><span className={uchihaInfo}>Jutsu Speciality:</span> {uchiha.jutsuSpeciality}</p>
      <p><span className={uchihaInfo}>Status:</span> {uchiha.status}</p>
      </div>
      <GatsbyImage 
        className={headerPicture}
        image={image} alt={uchiha.picture.altText} />
    </div>
    <div className={uchihaPictures}>
        <GatsbyImage className={uchihaPicture} image={picture1} alt={uchiha.pictures.picture1.altText} />
        <GatsbyImage className={uchihaPicture} image={picture2} alt={uchiha.pictures.picture2.altText} />
        <GatsbyImage className={uchihaPicture} image={picture3} alt={uchiha.pictures.picture3.altText} />
      </div>
    </Layout>
  )
}

export const query = graphql`
query ($id: String) {
  wpUchiha(id: {eq: $id}) {
    uchihaFields {
      firstName
      lastName
      age
      description
      height
      weight
      status
      jutsuSpeciality
      fieldGroupName
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
      pictures {
        picture1 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture2 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        picture3 {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
    }
    eyes {
      nodes {
        name
      }
    }
  }
}


`

export default UchihaPage