import React from 'react'
import Notes from './Notes'

class List extends React.Component {
	state = {
		show: false,
		checked: false
	}

	showNotes = item => {
		if (item.notes) this.setState({ show: true })
	}

	onHandleChecked = () => this.setState({ checked: !this.state.checked })

	onClassChecked = () => {
		if (this.state.checked) {
			return 'text-white'
		} else {
			return ''
		}
	}

	render() {
		const {
			item,
			index,
			collapse,
			onHandleCollapse,
			onHandleRemoveItem,
			onHandleChangesNotes,
			onHandleSubmitNotes
		} = this.props

		const { checked, show } = this.state

		return (
			<React.Fragment>
				<tr className={checked ? 'bg-primary text-white' : ''}>
					<th className='align-middle' scope='row'>
						{item.qty}
					</th>
					<td className='align-middle'>{item.name}</td>
					<td className='align-middle' width='30'>
						<button
							type='button'
							className={`close ${this.onClassChecked()}`}
							onClick={() => onHandleCollapse(index)}
							disabled={checked ? 'disabled' : ''}
						>
							<i className='far fa-edit fa-xs' />
						</button>
					</td>
					<td className='align-middle' width='30'>
						<button
							type='button'
							className={`close ${this.onClassChecked()}`}
							onClick={() => this.onHandleChecked()}
							style={{ opacity: checked ? 1 : '' }}
						>
							<i className='fas fa-check fa-xs' />
						</button>
					</td>
					<td className='align-middle' width='30'>
						<button
							type='button'
							className={`close ${this.onClassChecked()}`}
							onClick={() => onHandleRemoveItem(item)}
							disabled={checked ? 'disabled' : ''}
						>
							<i className='far fa-trash-alt fa-xs' />
						</button>
					</td>
				</tr>
				<tr className={collapse ? 'd-table-row' : 'd-none'}>
					<td colSpan='5'>
						{show && <Notes notes={item.notes} />}
						<div className='form-row align-items-center'>
							<div className='col my-1'>
								<div className='input-group'>
									<div className='input-group-prepend'>
										<span className='input-group-text'>Notes</span>
									</div>
									<input
										type='text'
										id='notes'
										name='notes'
										className='form-control'
										onChange={e => onHandleChangesNotes(e, index)}
									/>
								</div>
							</div>
							<div className='col-auto my-1'>
								<button
									type='submit'
									className='btn btn-primary'
									onClick={() =>
										onHandleSubmitNotes(index, this.showNotes(item))
									}
								>
									Add
								</button>
							</div>
						</div>
					</td>
				</tr>
			</React.Fragment>
		)
	}
}

export default List
