const path = require(`path`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const legalTemplate = path.resolve(`src/templates/legal.js`)
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug,
              langKey
            }
            frontmatter{
              type
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const posts = result.data.allMarkdownRemark.edges
  posts.forEach(async ({ node }, index)  => {


    //  const prev = index === 0 ? false : posts[index - 1].node
     const next =
  index === posts.length - 1 ? false : posts[index + 1].node


 

        if(node.frontmatter.type=="tutorial"||node.frontmatter.type=="blog")
        {

          const getNext = (n , lang="en") => {
            if(n === posts.length - 1){
              return "no post";
            }
            else{
              if(posts[n + 1].node.fields.langKey==lang)
              {
                return posts[n + 1].node.fields.slug;
              }
              else{
                var newn=n+1;
                return getNext(newn);
              }
            }
          }
                
        
                const getPrev = (n , lang="en") => {
                  if(n===0){
                    return "no post";
                  }
                  else{
                    if(posts[n - 1].node.fields.langKey==lang)
                    {
                      return posts[n - 1].node.fields.slug;
                    }
                    else{
                      var newn=n-1;
                      return getPrev(newn);
                    }
                  }
                }
        
                
        
                const prevEn = getPrev(index);
                const prevEs = getPrev(index, "es");
        
               const nextEn = getNext(index);
               const nextEs = getNext(index, 'es');
               
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
            langKey:node.fields.langKey,
            prevEn, 
            prevEs,
            nextEs,
            nextEn,
          },  
        })
       }
       if(node.frontmatter.type=="legal")
       {
        createPage({
          path: node.fields.slug,
          component: legalTemplate,
          context: {
            slug: node.fields.slug,
            langKey:node.fields.langKey,
          }, // additional data can be passed via context
        })
       }
    
    
  })
}




  