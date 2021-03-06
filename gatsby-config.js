module.exports = {
	siteMetadata: {
		siteUrl: "https://www.deptoon.shop",
		title: "deptoong.shop - giày dép nam",
		description:
			"giày da nam, dép nam một quai, dép nam quai ngang, giày da công sở."
	},
	plugins: [
		{
			resolve: "gatsby-plugin-robots-txt",
			options: {
				host: "https://www.deptoon.shop",
				sitemap: "https://www.deptoon.shop/sitemap.xml",
				policy: [{ userAgent: "*", allow: "/" }]
			}
		},
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sass",
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: "UA-144765607-2",
				head: true
			}
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/img`,
				name: "uploads"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages"
			}
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/img`,
				name: "images"
			}
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-transformer-remark",
			options: {
				plugins: [
					{
						resolve: "gatsby-remark-relative-images",
						options: {
							name: "uploads"
						}
					},
					{
						resolve: "gatsby-remark-images",
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 2048
						}
					},
					{
						resolve: "gatsby-remark-copy-linked-files",
						options: {
							destinationDir: "static"
						}
					}
				]
			}
		},
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`
			}
		},
		{
			resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
			options: {
				develop: true, // Activates purging in npm run develop
				purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
			}
		}, // must be after other CSS plugins
		"gatsby-plugin-netlify" // make sure to keep it last in the array
	]
};
