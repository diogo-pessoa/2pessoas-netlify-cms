import React from "react"
import { Link } from "gatsby"
import {RiArrowLeftSLine, RiBugLine, RiSkullLine} from "react-icons/ri"

import SEO from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <SEO title="Page not found"/>
    <div className="wrapper" style={{
      textAlign: "center"
    }}>
      <header>
        <RiSkullLine style={{
          fontSize: "128px",
          color: "var(--primary-color)"
        }}/>
        <h1>Sorry this wasn't expected </h1>
        <p>Check the links below to navigate back to the site</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Main Page</Link>
      <Link to="/contact" className="button -outline">Report a problem<RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound