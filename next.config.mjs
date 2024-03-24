/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	transpilePackages: ['lucide-react'],
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co',
				port: '',
				pathname: '/**'
			}
		]
	}
};

export default nextConfig;
