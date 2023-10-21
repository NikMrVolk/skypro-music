import { styled } from 'styled-components'

export const ProgressInput = styled.input`
	--progress-height: 8px;
	--progress-color: #b672ff;
	--progress-color: ${(props) => props.$color ?? '#b672ff'};

	--progress-bg-color: #2e2e2e;

	margin: 0;
	width: 100%;
	height: var(--progress-height);
	-webkit-appearance: none;
	cursor: ${(props) =>
		props.$customCursor
			? `url("data:image/svg+xml,%3Csvg width='34' height='34' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='17' cy='17' r='17' fill='white' fill-opacity='0.1'/%3E%3C/svg%3E")
			17 17,
		pointer;`
			: 'pointer'};

	background: transparent;
	position: relative;
	overflow: hidden;

	&::-webkit-slider-runnable-track {
		position: relative;
		height: var(--progress-height);
		background: var(--progress-bg-color);
	}
	&::-webkit-slider-thumb {
		--thumb-height: 1px;
		--thumb-width: 1px;
		position: relative;
		-webkit-appearance: none;
		width: var(--thumb-width, var(--thumb-height));
		box-shadow: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0 100vmax
			var(--progress-color);
	}

	&::-webkit-slider-runnable-track {
		background: var(--progress-bg-color);
	}

	/* FF */
	&::-moz-range-track {
		width: 100%;
		height: var(--progress-height);
		background: var(--progress-bg-color);
		border: none;
		border-radius: 0px;
	}
	&::-moz-range-thumb {
		border: none;
		height: 25px;
		width: 25px;
		border-radius: 50%;
		background: transparent;
	}
	&::-moz-range-progress {
		background-color: var(--progress-color);
		height: var(--progress-height);
	}
`
