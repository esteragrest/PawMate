import PropTypes from "prop-types"
import styles from './list-wrapper.module.css'

export const ListWrapper = ({ children }) => {
	return (
		<div className={styles['list-wrapper']}>
			{children}
		</div>
	)
}

ListWrapper.propTypes = {
	children: PropTypes.node.isRequired
}
