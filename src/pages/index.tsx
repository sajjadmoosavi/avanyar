import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/seo"

const IndexPage = () => (
  <Container>
    <SEO title="Home" />
    <section className="hero is-light is-bold is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            آوان‌یار
      </h1>
          <h2 className="subtitle" style={{marginTop: 0}}>
          <p>وبسایت ما در حال توسعه است.</p>
          <p> منتطر خبر‌های خوش از آوان‌یار باشید‌ :)</p>
      </h2>
        </div>
      </div>
    </section>
  </Container>
)

export default IndexPage
