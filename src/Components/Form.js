import React from 'react'

const Form = props => {
	const { onHandleInputChanges, onSubmit } = props
	return (
		<React.Fragment>
			<form onSubmit={onSubmit}>
				<div className='input-group mb-3'>
					<div className='input-group-prepend'>
						<span className='input-group-text'>Qty.</span>
					</div>
					<input
						type='text'
						id='qty'
						name='qty'
						placeholder='add here...'
						className='form-control form-control-lg'
						onChange={onHandleInputChanges}
					/>
				</div>
				<div className='input-group mb-3'>
					<div className='input-group-prepend'>
						<span className='input-group-text'>Item</span>
					</div>
					<input
						type='text'
						id='name'
						name='name'
						placeholder='add here...'
						className='form-control form-control-lg'
						onChange={onHandleInputChanges}
					/>
				</div>
				<input className='btn btn-primary' type='submit' value='Add Item' />
			</form>
		</React.Fragment>
	)
}

export default Form
