import React,{ useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTechs } from '../../actions/techActions'

const TechSelectOptions = ({getTechs, techs, loading}) => {
	console.log('objecgetTechst', techs)

	useEffect(() => {
		getTechs()
	}, [])


	if(!loading && techs) {
		console.log('techsloading', techs)
	}
	return (
		!loading && techs && techs.map(tech => 
			<option  key={tech.id}  value={`${tech.firstName} ${tech.lastName}`}>
				{tech.firstName} {tech.lastName}
			</option>
		)
			
	
	)
}

TechSelectOptions.propTypes = {
	techs: PropTypes.object.isRequired,
	getLogs: PropTypes.string.isRequired,
	loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
	techs: state.tech.techs,
	loading: state.tech.loading
})


export default connect(mapStateToProps, { getTechs })(TechSelectOptions)

