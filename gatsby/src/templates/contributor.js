import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import ContributorLink from "../components/contributorLink"

const links = [
  {
    property: "url",
    icon: "globe",
  },
  {
    property: "github",
    icon: "github",
  },
  {
    property: "drupal",
    icon: "drupal",
  },
  {
    property: "wordpress",
    icon: "wordpress",
  },
  {
    property: "twitter",
    icon: "twitter",
  },
  {
    property: "linkedin",
    icon: "linkedin",
  },
]

class ContributorTemplate extends React.Component {
  render() {
    const contributor = this.props.data.contributorYaml
    const docs =
      this.props.data.allDocs != null ? this.props.data.allDocs.edges : []
    return (
      <Layout>
        {/* <SEO
          title={node.frontmatter.title}
          description={node.frontmatter.description || node.excerpt}
          authors={node.frontmatter.contributors}
          image={"docs/assets/images/default-thumb-doc.png"}
        /> */}
        <div className="container mb-70">
          <div className="row">
            <title>cityofoaksdesign</title>
            <div className="article container-fluid">
              <div className="media">
                <div className="pull-left">
                  <div className="guest-info__img">
                    <img
                      alt="Author photo"
                      typeof="foaf:Image"
                      src={contributor.avatar}
                      width="540"
                      height="540"
                    />
                  </div>
                </div>
                <div className="media-body">
                  <div className="media-heading">
                    <h1>{contributor.name}</h1>
                    {links.map((link, i) => {
                      const url = contributor.hasOwnProperty(link.property)
                        ? contributor[link.property]
                        : null
                      if (url !== null) {
                        return (
                          <ContributorLink key={i} url={url} icon={link.icon} />
                        )
                      }
                    })}
                  </div>
                  <p />
                  <h4>Contributions</h4>
                  <ul>
                    {docs.map(({ node }) => {
                      return (
                        <li key={node.id}>
                          <Link to={node.fields.slug}>
                            {node.frontmatter.title}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default ContributorTemplate

export const pageQuery = graphql`
  query ContributorById($id: String!) {
    contributorYaml(id: { eq: $id }) {
      id
      name
      avatar
      url
      github
      drupal
      wordpress
      twitter
      linkedin
    }

    allDocs: allMdx(
      filter: {
        fileAbsolutePath: { ne: null }
        fields: { contributors: { in: [$id] } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            contributors {
              id
            }
            layout
            permalink
          }
          fields {
            slug
            contributors
          }
        }
      }
    }
  }
`
