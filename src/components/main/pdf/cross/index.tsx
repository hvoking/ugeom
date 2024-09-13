export const Cross = ({setActivePdf}: any) => {
	return (
		<img
			className="pdf-exit-cancel-cross"
			src="static/components/search/cancel_search.svg" 
			alt="cancel-cross-icon"
			onClick={() => setActivePdf(false)}
		/>
	)
}

Cross.displayName="Cross";