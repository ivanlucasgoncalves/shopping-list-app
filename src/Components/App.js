import React from 'react'
import emptyListLogo from './empty_list.svg'

class App extends React.Component {
	// Create State to store list
	state = {
		qty: 0,
		name: null,
		notes: '',
		items: []
	}

	// Event: Handle Form Changes
	handleInputChanges = e => {
		let { name, value } = e.target
		this.setState({ [name]: value })
	}

	// Event: Add Item to List
	addItemToList = e => {
		e.preventDefault()

		this.setState({
			items: [
				...this.state.items,
				{
					qty: this.state.qty,
					name: this.state.name
				}
			]
		})

		// Clear Form after Submitting
		this.refs.form.reset()
	}

	// Event: Remove Item from list
	removeItemFromList = item => {
		const newItems = this.state.items.filter(newItem => {
			return newItem !== item
		})

		this.setState({ items: [...newItems] })
	}

	// Event: Add Notes to Item in List
	addNotesToItem = item => {
		//TODO still need to fix state update
		console.log(item)

		this.setState({
			items: [{ ...item, notes: 'dddd' }]
		})
	}

	render() {
		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<h2 className='pt-5 pb-4'>Shopping List</h2>
						<form onSubmit={this.addItemToList} ref='form'>
							<div className='input-group mb-3'>
								<div className='input-group-prepend'>
									<span className='input-group-text'>Qty.</span>
								</div>
								<input
									type='text'
									id='qty'
									name='qty'
									ref='qty'
									className='form-control'
									onChange={this.handleInputChanges}
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
									ref='name'
									className='form-control'
									onChange={this.handleInputChanges}
								/>
							</div>
							<input
								className='btn btn-primary'
								type='submit'
								value='Add Item'
							/>
						</form>
						<div className='table-responsive-sm'>
							<table className='table table-striped table-hover mt-5'>
								<thead>
									<tr>
										<th scope='col' width='70'>
											Qty.
										</th>
										<th scope='col' colSpan='3'>
											Item
										</th>
									</tr>
								</thead>
								<tbody>
									{this.state.items.map(item => {
										return (
											<tr key={item.name}>
												<th scope='row'>{item.qty}</th>
												<td>{item.name}</td>
												<td width='108'>
													<button
														type='button'
														className='btn btn-outline-primary btn-sm add-notes'
														onClick={() => this.addNotesToItem(item)}
													>
														add notes
													</button>
												</td>
												<td width='30'>
													<button
														type='button'
														className='close'
														onClick={() => this.removeItemFromList(item)}
													>
														&times;
													</button>
												</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
						<div>
							<img
								className='mt-5 mx-auto d-block'
								src={emptyListLogo}
								alt='Empty List'
							/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default App
