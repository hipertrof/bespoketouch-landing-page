const repoName = 'bespoketouch-landing-page'
// Set NEXT_PUBLIC_USE_BASE_PATH=false once a custom domain is configured for GitHub Pages.
const useBasePath = process.env.NEXT_PUBLIC_USE_BASE_PATH !== 'false'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(useBasePath && {
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
}

export default nextConfig
