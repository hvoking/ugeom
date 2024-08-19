export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img 
				className="logo"
				src="static/logos/pink.svg" 
				alt="header-logo"
			/>
			<div className="logo-name" style={{paddingLeft: "8px"}}>
				Urban Geometries
			</div>
		</div>
	)
}

Logo.displayName="Logo";