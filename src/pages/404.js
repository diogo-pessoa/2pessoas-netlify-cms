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
        <h1>Oops, desculpe Isso não era esperado</h1>
        <p>Por favor dê uma olhada nos links abaixo para continuar navegando no site.</p>
      </header>
      <Link to="/" className="button"><RiArrowLeftSLine className="icon -left"/>Página inicial</Link>
      <Link to="/contact" className="button -outline">reporte o problema <RiBugLine className="icon -right"/></Link>
    </div>
  </Layout>
)

export default NotFound