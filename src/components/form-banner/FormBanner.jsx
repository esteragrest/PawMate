import PropTypes from 'prop-types';
import styles from './form-banner.module.css';

export const FormBanner = ({
	backgroundColor,
	imageSrc,
	justifyContent,
	backgroundImage,
}) => {
	const rootStyle = {
		'--image-url': `url(${backgroundImage})`,
		'--background-color': backgroundColor,
		'--justify-content': justifyContent,
	};

	return (
		<div className={styles['styled-block']} style={rootStyle}>
			<img src={imageSrc} alt="form-banner" className={styles['block-image']} />
		</div>
	);
};

FormBanner.propTypes = {
	backgroundColor: PropTypes.string,
	imageSrc: PropTypes.string,
	justifyContent: PropTypes.string,
	backgroundImage: PropTypes.string,
};
