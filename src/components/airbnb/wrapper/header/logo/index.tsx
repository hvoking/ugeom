export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img 
				className="logo"
				src="static/logos/white.svg" 
				alt="header-logo"
			/>
			<div className="logo-name" style={{paddingLeft: "8px"}}>Airbnb Metrics</div>
		</div>
	)
}

Logo.displayName="Logo";