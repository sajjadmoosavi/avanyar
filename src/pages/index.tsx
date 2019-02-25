import React from "react"
import { Container } from "../components/Container"
import { SEO } from "../components/SEO"

const IndexPage = () => (
  <Container>
    <SEO />
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            خدمات
          </h1>
          <h2 className="subtitle">
            رضایت، کمترین زمان و ضمانت در ارائه خدمات باعث اعتماد مشتریان به ما شده‌است
          </h2>
        </div>
      </div>
    </section>
    <section className="hero is-medium is-light is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            روش‌کار
          </h1>
          <h2 className="subtitle">
            مراحلی که از درخواست شما تا تحویل کار طی می‌شود
          </h2>
        </div>
      </div>
    </section>
    <section className="hero is-medium is-dark is-bold">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
            تماس
          </h1>
          <h2 className="subtitle">
            راه‌های تماس با ما
          </h2>
        </div>
      </div>
    </section>
  </Container>
)

export default IndexPage
