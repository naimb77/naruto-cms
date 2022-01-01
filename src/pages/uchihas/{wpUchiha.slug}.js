import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image' 
import Layout from '../../components/layout'
const UchihaPage = ({
  data: {
    wpUchiha: { uchihaFields: uchiha },
  },
}) => {
  const image = getImage(uchiha.picture.localFile)
  return (
    <Layout pageTitle="Uchiha Template">
    <div>
      <GatsbyImage image={image} alt={uchiha.picture.altText} />
      <h1>{uchiha.firstName} {uchiha.lastName}</h1>
      <div dangerouslySetInnerHTML={{__html: uchiha.description}} />
      <p>Age: {uchiha.age}</p>
      <p>Weight: {uchiha.weight}</p>
      <p>Height: {uchiha.height}</p>
      <p>Jutsu Speciality: {uchiha.jutsuSpeciality}</p>
      <p>Status: {uchiha.status}</p>
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
      jutsuSpeciality
      status
      picture {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}

`

export default UchihaPage