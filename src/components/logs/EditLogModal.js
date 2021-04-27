import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import M from  'materialize-css/dist/js/materialize.min.js';
import { updateLog } from '../../actions/logActions'
import TechSelectOptions from '../techs/TechSelectOptions';

const EditLogModal = ({current, updateLog}) => {

	const [message, setMessage] = useState('')
	const [attention, setAttention] = useState(false)
	const [tech, setTech] = useState('')

	useEffect(() => {
		if(current) {
			setMessage(current.message)
			setAttention(current.attention)
			setTech(current.tech)
		}
	}, [current])

	const onSubmit = () => {
		if(message === '' && tech === ''){
			M.toast({ html: 'Please enter a message and tech'})
		} else {
			const upLog = {
				id: current.id,
				message,
				attention,
				tech
			};
			updateLog(upLog)
			M.toast({ html: `Log update by ${tech}`})

			setMessage('')
			setAttention(false)
			setTech('')

		}
	}

	const settest = test => {
		console.log('object', test)
	}
	return (
		<div id="edit-log-modal" className="modal" style={modalStyle}>
			<div className="modal-content">
				<h4>Enter System Log</h4>
				<div className="row">
					<div className="input-field">
						<input 
							type="text"
							name="message"
							value={message}
							onChange={e=>setMessage(e.target.value)}
						/>
						
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<select 
							name="tech"
							value={tech}
							className="browser-default"
							onChange={e=>setTech(e.target.value)}
						>
							<option value="" disabled>
								Select Technician
							</option>
							<TechSelectOptions />
						</select>
						
					</div>
				</div>
				<div className="row">
					<div className="input-field">
						<label className="active">
							<input 
								type="checkbox"
								className="filled-in"
								name="attention"
								checked={attention}
								value={attention}
								onChange={e => setAttention(!attention)}
							/>
							<span> Needs Attention</span>
						</label>

						
      
					</div>
				</div>
			</div>
			<div className="modal-footer">
				<a href="#!"
				onClick={onSubmit}
				className="modal-close waves-effect blue waves-light btn"
				>
					Enter
				</a>
			</div>
		</div>
	)
}

const modalStyle = {
	width: '75%',
	height: '75%'
}


EditLogModal.propTypes = {
	updateLog: PropTypes.func.isRequired,
	current: PropTypes.object,
}


const mapStateToProps = state => ({
	current: state.log.current
})

export default connect(mapStateToProps, { updateLog })(EditLogModal)

