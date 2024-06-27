export const Logo = () => {
	return (
		<div className="logo-wrapper" style={{paddingBottom: "20px", paddingLeft: "5px", paddingTop: "10px"}}>
			<img 
				className="logo"
				src="static/logos/pink.svg" 
				alt="header-logo"
			/>
			<div className="logo-name" style={{paddingLeft: "8px", color: "rgba(0, 0, 0, 1)"}}>Airbnb Metrics</div>
		</div>
	)
}

Logo.displayName="Logo";