import React from "react"
import { Link } from "react-router-dom"

import "./ReadMoreButton.css"

const ReadMoreButton = ({ text, url }) => {
  return (
    <div id="ReadMoreButton" className="sd">
      <Link id="button-text" className="sd text" to={url}>
        {text}
      </Link>
    </div>
  )
}

export default ReadMoreButton
