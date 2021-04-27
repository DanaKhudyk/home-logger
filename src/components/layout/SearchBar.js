import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchLog } from '../../actions/logActions'

const SearchBar = ({ searchLog }) => {
	const text = useRef('') 

	const handleChange = e => {
		searchLog(e.target.value)
	} 
	return (
		<nav style={{marginBottom: "30px"}} className="blue">
			<div className="nav-wrapper">
				<form>
					<div className="input-field">
						<input id="search" type="search" onChange={handleChange} placeholder="Search logs" ref={text} />
						<label className="label-icon" htmlFor="search">
							<i className="material-icons">search</i>
						</label>
						<i className="material-icons">close</i>
					</div>
				</form>
			</div>
		</nav>
	)
}

SearchBar.propTypes = {
	searchLog: PropTypes.func.isRequired,
}


export default connect(null, { searchLog })(SearchBar)
