import React from "react";

export const StyledArticle = () => {
	return (
		<article className="mx-[10vw] py-12 px-6 max-w-3xl place-self-center flex flex-col"></article>
	);
};
export const StyledHeader = () => {
	return (
		<>			
				<h2 className="scroll-m-20 pb-4 text-4xl font-bold tracking-tight transition-colors first:mt-0">
					Dammån
				</h2>			
		</>
	);
};

export const StyledParagraph = () => {};

<div className="even:bg-blue-100">
	<article className="mx-[10vw] py-12 px-6 max-w-3xl place-self-center flex flex-col">
		<div>
			<h2 className="scroll-m-20 pb-4 text-4xl font-bold tracking-tight transition-colors first:mt-0">
				Dammån
			</h2>
			<p className="mb-5"></p>
			<p className="mb-5"></p>
			<p className="mb-5">
				<em>
					Källa: Dammån - ett populärt storöringsvatten, Richard Öhman, 1983.
				</em>
			</p>
		</div>
		<img
			src="src/assets/images/jamtland-marked.svg"
			className="w-60 place-self-center"
		/>
	</article>
</div>;
