import React from 'react'

const Message = props => {
	const { message } = props
	return message ? (
		<div className='alert alert-danger' role='alert'>
			Please, fill in all fields to submit your item to your shopping list!!
		</div>
	) : (
		''
	)
}

export default Message
