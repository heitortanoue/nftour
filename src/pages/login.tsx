import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import {
	InputOTP,
	InputOTPGroup,
	InputOTPSeparator,
	InputOTPSlot
} from '@/components/ui/input-otp';

import { useEndpointRequest } from '@/utils/app/hooks/useEndpoint';

export default function Login() {
	const [email, setEmail] = useState('');
	const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(2);
    const [otp, setOTP] = useState('');

	async function handleLogin() {
		setLoading(true);
		const response = await useEndpointRequest('/auth/sendOTP', 'POST', { email });
		if (!response.success === true) {
			alert('An error occurred. Please try again later.');
			return;
		}

        setPage(2);
		setLoading(false);
    }

    async function handleOTP() {
        setLoading(true);
        const response = await useEndpointRequest('/auth/verifyOTP', 'POST', { email, otp });
        if (!response.success === true) {
            alert('An error occurred. Please try again later.');
            return;
        }

        setLoading(false);
    }

	if (page === 1) {
		return (
			<div className="bg-black flex h-screen overflow-hidden">
				<div className="rounded-md shadow-md p-5 bg-white m-auto">
					<h1 className="text-center mb-3 font-bold text-xl">Log in</h1>
					<div className="grid w-full max-w-sm items-center gap-1.5">
						<label htmlFor="email" className="text-xs">
							Email
						</label>
						<Input
							type="email"
							id="email"
							placeholder="Email"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					{!loading ? <Button className="mt-5 w-full">Log in</Button> : <ButtonLoading />}
				</div>
			</div>
		);
	}

	if (page === 2) {
		return (
			<div className="bg-black flex h-screen overflow-hidden">
				<div className="rounded-md shadow-md p-5 bg-white m-auto">
					<h1 className="text-center font-bold text-xl">Confirm your e-mail</h1>
					<p className="mb-5 text-sm text-gray-500">
						We sent a 6-digit code to <strong>{email}</strong>. Please enter it below.
					</p>
					<InputOTP maxLength={6} on>
						<InputOTPGroup>
							<InputOTPSlot index={0} />
							<InputOTPSlot index={1} />
							<InputOTPSlot index={2} />
						</InputOTPGroup>
						<InputOTPSeparator />
						<InputOTPGroup>
							<InputOTPSlot index={3} />
							<InputOTPSlot index={4} />
							<InputOTPSlot index={5} />
						</InputOTPGroup>
					</InputOTP>
				</div>
			</div>
		);
	}
}

function ButtonLoading() {
	return (
		<Button className="mt-5 w-full" disabled>
			<Loader2 className="mr-2 h-4 w-4 animate-spin" />
			Please wait
		</Button>
	);
}
