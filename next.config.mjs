const repoName = 'bespoketouch-landing-page'
// Set by the GitHub Pages workflow; unset (false) for local dev/build.
// Set NEXT_PUBLIC_USE_BASE_PATH=false in that workflow once a custom domain is configured.
const useBasePath = process.env.NEXT_PUBLIC_USE_BASE_PATH === 'true'
const basePath = useBasePath ? `/${repoName}` : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(useBasePath && {
    basePath,
    assetPrefix: `${basePath}/`,
  }),
}

export default nextConfig
