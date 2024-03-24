import Layout from '@/components/custom/layout';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Test = () => {
    const [data, setData] = useState<any>(null);
    const router = useRouter();

    useEffect(() => {
        // se data tem /hunt em seu conteudo, redireciona para a pagina de hunt
        if (data && data.includes('/hunt')) {
            router.push(data);
        }
    }, [data]);

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
                        facingMode: {
                            ideal: 'environment'
                        }
                    }}
				/>
			</div>
		</Layout>
	);
};

export default Test;
