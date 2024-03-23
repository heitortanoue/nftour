import Layout from '@/components/custom/layout';
import dynamic from 'next/dynamic';

export default function Home() {
	const MapWithNoSSR = dynamic(() => import('@/components/custom/map'), {
		ssr: false
	});

	return (
        <Layout>
            <MapWithNoSSR />
        </Layout>
	);
}
