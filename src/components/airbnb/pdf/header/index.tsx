// App imports
import './styles.scss';

export const PdfHeader = () => {
	return (
		<div className="pdf-header-wrapper">
			<div className="pdf-header-title">Inside Airbnb Metrics</div>
			<div className="property-data-subtitle">
				Market study based on registered properties.
			</div>
		</div>
	)
}

PdfHeader.displayName="PdfHeader";