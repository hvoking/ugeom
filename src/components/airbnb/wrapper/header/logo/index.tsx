export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img 
				className="logo"
				src="static/logos/pink.svg" 
				alt="header-logo"
			/>
			<div className="logo-name" style={{paddingLeft: "8px"}}>
				URBAN GEOMETRIES
			</div>
		</div>
	)
}

Logo.displayName="Logo";