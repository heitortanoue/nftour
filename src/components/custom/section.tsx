import React from 'react';
import { cn } from '@/lib/utils';

export function Section({
	children,
	id,
	className,

	options,
	colors
}: {
	children: React.ReactNode;
	id: string;
	className?: string;

	options?: {
		fullScreen?: boolean;
		horizontal?: boolean;
		noRoundedCorners?: boolean;
	};
	colors?: { bg?: string; text?: string };
}) {
	const bgColorClass = colors?.bg && `bg-${colors.bg}`;
	const roundedCornerClass = !options?.noRoundedCorners && 'rounded-3xl md:rounded-[4rem]';
	const textColorClass = colors?.text ? `text-${colors?.text}` : 'text-dark';
	const fullScreenClass = options?.fullScreen && 'h-screen';
	const mainDivClass = [
		bgColorClass,
		roundedCornerClass,
		textColorClass,
		fullScreenClass,
		className
	].filter((el) => !!el);

	const horizontalClass =
		options?.horizontal && 'flex flex-col gap-5 lg:grid grid-cols-10 lg:gap-16 items-center';

	return (
		<section id={id}>
			<div className={`${cn(...mainDivClass)} px-phone py-16 lg:py-32 flex`}>
				<div className={'max-w-normal m-auto ' + horizontalClass}>{children}</div>
			</div>
		</section>
	);
}

Section.Header = ({ children }: { children: React.ReactNode }) => (
	<>
		<div className="mb-5 col-span-4">
			<div className="max-w-3xl m-auto">{children}</div>
		</div>
	</>
);
Section.Content = ({ children }: { children: React.ReactNode }) => (
	<div className="col-span-6 m-auto">{children}</div>
);

Section.MiniTitle = ({ children }: { children: React.ReactNode }) => (
	<h3 className="text-sm lg:text-base font-medium tracking-wider !leading-tight text-center mb-3">
		{children}
	</h3>
);

Section.Title = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-4xl lg:text-5xl tracking-tight !leading-tight text-center">{children}</h2>
);
Section.HTitle = ({ children }: { children: React.ReactNode }) => (
	<h2 className="text-center lg:text-left text-4xl lg:text-5xl font-semibold tracking-tight !leading-tight">
		{children}
	</h2>
);

Section.Subtitle = ({ children }: { children: React.ReactNode }) => (
	<div className="mt-5 leading-relaxed lg:text-lg text-center">{children}</div>
);
Section.HSubtitle = ({ children }: { children: React.ReactNode }) => (
	<div className="mt-2 lg:mt-5 leading-relaxed text-center lg:text-left text-sm lg:text-lg">
		{children}
	</div>
);

Section.Button = ({ className, children }: { className?: string; children: React.ReactNode }) => (
	<div
		className={
			`rounded-md px-3 py-2 font-light transition-all flex
            gap-2 items-center border w-fit text-sm mt-5 mx-auto lg:mx-0 ` + className
		}
	>
		<div>{children}</div>
		<i className="fa-solid</div> fa-arrow-right-long -rotate-45" aria-hidden />
	</div>
);
