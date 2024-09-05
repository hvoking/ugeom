export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img 
				className="logo"
				src="static/logos/white.svg" 
				alt="header-logo"
			/>
			<div className="logo-name">
				GEOROOTS
			</div>
		</div>
	)
}

Logo.displayName="Logo";