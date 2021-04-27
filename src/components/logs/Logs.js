import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import LogsItem from './LogsItem'
import Preloader from '../layout/Preloader'
import { getLogs } from '../../actions/logActions'

const Logs = ({log: { logs, loading }, getLogs}) => {
	

	useEffect(() => {
		getLogs()
	}, [getLogs])

	if(loading || !logs) return <Preloader />


	return (
		<div>
			<ul className="collection with-header">
				<li className="collection-header">
					<h4 className="center">System Logs</h4>
				</li>
				{!loading && !logs.length === 0 ? (
					<p className="center"> Now logs to show </p>
				) : (
					logs.map(log => <LogsItem log={log}  key={log.id}/>)
				)
			}
			</ul>
		</div>
	)
}

Logs.propTypes = {
	log: PropTypes.object.isRequired,
	getLogs: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
	log: state.log
})



export default connect(mapStateToProps, { getLogs })(Logs)
