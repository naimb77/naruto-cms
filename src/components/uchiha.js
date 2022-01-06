import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
    wrapper,
    image,
    uchihaInfo,
    fullName,
  } from "./uchiha.module.css"

export const Uchiha = ({ uchiha, slug }) => {
  const profile = getImage(uchiha.uchihaFields.picture.localFile)
  return (
    <Link to={slug} className={wrapper}>
        
      <GatsbyImage
      className={image}
        image={profile}
        alt={uchiha.uchihaFields.picture.altText}
      />
      <div className={uchihaInfo}>
        <p className={fullName}>
          {uchiha.uchihaFields.firstName} {uchiha.uchihaFields.lastName}
        </p>
      </div>
    </Link>
  )
}

export default Uchiha;