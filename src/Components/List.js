import React from 'react'
import Notes from './Notes'

class List extends React.Component {
	state = {
		show: false
	}

	ShowNotes = item => {
		if (item.notes) {
			this.setState({ show: true })
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
		return (
			<React.Fragment>
				<tr>
					<th className='align-middle' scope='row'>
						{item.qty}
					</th>
					<td className='align-middle'>{item.name}</td>
					<td width='110'>
						<button
							type='button'
							style={{ minWidth: 105 }}
							className='btn btn-outline-primary btn-sm add-notes'
							onClick={() => onHandleCollapse(index)}
						>
							{!collapse ? 'view notes' : 'close notes'}
						</button>
					</td>
					<td className='align-middle' width='30'>
						<button
							type='button'
							className='close'
							onClick={() => onHandleRemoveItem(item)}
						>
							&times;
						</button>
					</td>
				</tr>
				<tr className={collapse ? 'd-table-row' : 'd-none'}>
					<td colSpan='4'>
						{this.state.show && <Notes notes={item.notes} />}
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
										onHandleSubmitNotes(index, this.ShowNotes(item))
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
