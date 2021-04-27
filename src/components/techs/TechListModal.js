import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTechs } from '../../actions/techActions'

import TechItem from './TechItem'


const TechListModal = ({getTechs, techs}) => {
	useEffect(() => {
		getTechs()
	}, [])

	return (
		<div id="tech-list-modal" className="modal">
			<div className="modal-content">
				<h4>Technician List</h4>
				<ul className="collection">
				  {techs && 
						techs.map(tech => <TechItem tech={tech}  key={tech.id}/>)
					}
				</ul>
			</div>
		</div>
	)
}

TechListModal.propTypes = {
	techs: PropTypes.object.isRequired,
	getLogs: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
	techs: state.tech.techs
})


export default connect(mapStateToProps, { getTechs })(TechListModal)