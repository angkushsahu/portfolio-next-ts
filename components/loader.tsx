const Loader = () => {
	return (
		<main className="fixed z-40 inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center px-6 py-8">
			<div className="loading">
				<div className="relative w-full h-full rounded-full">
					<span className="clock-hands"></span>
					<span className="clock-hands"></span>
				</div>
			</div>
		</main>
	);
};

export default Loader;
