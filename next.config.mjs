/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['lucide-react'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'github.com',
				port: '',
				pathname: '/**'
			}
		]
	}
};

export default nextConfig;
