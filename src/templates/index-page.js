import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Features from '../components/Features'
import BlogRoll from '../components/BlogRoll'
import { Card, Col, Row, Container, Button } from 'react-bootstrap'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div style={{
    backgroundColor: 'rgba(25, 30, 55, 1)'}}>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundColor: '#124',
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,       
        backgroundPosition: `top left`,
        backgroundAttachment: `fixed`

      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#E9EAEC',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.53)',
            color: '#90ADC6',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div>
          <div className="content">
            <div className="content">
              <div className="tile">
                <h1 className="title text-primary">{mainpitch.title}</h1>
              </div>
              <div className="tile">
                <h5 className="subtitle text-white">{mainpitch.description}</h5>
              </div>
            </div>
            <div className="columns">
              <div className="column is-12">
                <h3 className="has-text-weight-semibold is-size-2">
                  {/* {heading} */}
                </h3>
                <p>{description}</p>
                <Link to="/contact">
                  <Button variant="primary">
                    Contact Us Now
                  </Button>
                </Link>
                <hr />
              </div>
            </div>
            {/* <Features gridItems={intro.blurbs} /> */}
            <div className="columns">
              <div className="column is-12 has-text-centered">
                <h3>
                  Our Services
                </h3>
                {/* <Link className="btn" to="/products">
                  See all products
                </Link> */}
              </div>
            </div>
            <div className="column is-12">
              {/* <h3 className="has-text-weight-semibold is-size-2">
                Latest stories
              </h3> */}
              {/* <BlogRoll /> */}
              {/* <div className="column is-12 has-text-centered"> */}
                {/* <Link className="btn" to="/blog">
                  Read more
                </Link>
              </div> */}
            </div>
          </div>
          <div class="columns">
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">Detailing</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="card">
                <div class="card-image">
                  <figure class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                  </figure>
                </div>
                <div class="card-content">
                  <div class="media">
                    <div class="media-content">
                      <p class="title is-4">John Smith</p>
                      <p class="subtitle is-6">@johnsmith</p>
                    </div>
                  </div>

                  <div class="content">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                    <a href="#">#css</a> <a href="#">#responsive</a>
                    <br/>
                    <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                  </div>
                </div>
              </div>
            </div>
          </div>
            {/* this section will be replaced with the calloutCard component */}      
            <Container>
              <Row>
                <Col  className="pt-5">
                  <Card className="mx-auto" style={{ width: '20em' }}>
                    <Card.Img variant="top" src="/img/detailing2.png" />
                    <Card.Body>
                      <Card.Title>Detailing</Card.Title>
                      <Card.Text>
                        DEtailing informatiin that helps the user better undersand what its all about
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col  className="pt-5">
                  <Card className="mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/img/coffee.png" />
                    <Card.Body>
                      <Card.Title>Fabricating</Card.Title>
                      <Card.Text>
                        {heading}
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col  className="pt-5">
                  <Card className="mx-auto" style={{ width: '20em' }}>
                    <Card.Img variant="top" src="/img/coffee.png" />
                    <Card.Body>
                      <Card.Title>Erecting</Card.Title>
                      <Card.Text>
                        {heading}
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>           
              </Row>
              <Row>
                <Col className="pt-5">
                  <Card className="mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/img/coffee.png" />
                    <Card.Body>
                      <Card.Title>Shipping</Card.Title>
                      <Card.Text>
                        {heading}
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col  className="pt-5">
                  <Card className="mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/img/coffee.png" />
                    <Card.Body>
                      <Card.Title>Quality Control</Card.Title>
                      <Card.Text>
                        {heading}
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>
                <Col  className="pt-5">
                  <Card className="mx-auto" style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/img/coffee.png" />
                    <Card.Body>
                      <Card.Title>Projects</Card.Title>
                      <Card.Text>
                        {heading}
                      </Card.Text>
                      <Card.Link href="/services">Learn More</Card.Link>
                    </Card.Body>
                  </Card>
                </Col>           
              </Row>
            </Container>
        </div> 
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
