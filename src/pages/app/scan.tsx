import Layout from '@/components/custom/layout';
import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = () => {
	const [data, setData] = useState<any>(null);

	return (
		<Layout>
			<div className="bg-black">
				<QrReader
					onResult={(result, _) => {
						if (!!result) {
							setData(result.getText());
						}
					}}
					constraints={{
						facingMode: 'environment'
					}}
				/>
			</div>
		</Layout>
	);
};

export default Test;
