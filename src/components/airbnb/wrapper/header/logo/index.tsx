// App imports
import './styles.scss';

export const Logo = () => {
	return (
		<div className="logo-wrapper">
			<img 
				className="logo"
				src="static/logos/white.svg" 
				alt="header-logo"
			/>
			<div>
				<div className="logo-name">Gustavo Gonzalez</div>
				<div className="logo-profession">Computational Designer</div>
			</div>
		</div>
	)
}

Logo.displayName="Logo";