/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@carbon/react', '@carbon/icons-react'],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // don't resolve 'fs' module on the client
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        net: false,
        dns: false,
        child_process: false,
        tls: false,
      };
    }
    return config;
  },
  // Workaround for ModuleParseError: Module parse failed: Unexpected token (1:0)
  // https://github.com/vercel/next.js/discussions/12522
  experimental: {
    // Allow imports from external modules
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
