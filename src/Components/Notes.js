import React from 'react'

const Notes = props => {
	return (
		<div className='alert alert-primary alert-dismissible' role='alert'>
			<strong>Notes - </strong> {props.notes}
		</div>
	)
}

export default Notes
