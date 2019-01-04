import React from 'react'
import emptyListLogo from './empty_list.svg'
import List from './List'
import Form from './Form'
import Message from './Message'

class App extends React.Component {
	state = {
		qty: null,
		name: '',
		message: false,
		items: []
	}

	handleInputChanges = e => {
		let { name, value } = e.target
		this.setState({ [name]: value })
	}

	handleErrorMessage = () => this.setState({ message: true })

	handleSubmit = e => {
		e.preventDefault()
		const { qty, name, items } = this.state

		if (name !== '' && qty !== null) {
			this.setState({
				items: [
					...items,
					{
						qty,
						name,
						open: false,
						notes: null
					}
				]
			})
			// Clear state and reset the form after submitting
			document.querySelector('form').reset()
			this.setState({
				qty: null,
				name: '',
				message: false
			})
		} else {
			this.handleErrorMessage()
		}
	}

	handleRemoveItem = item => {
		const newItems = this.state.items.filter(newItem => {
			return newItem !== item
		})

		this.setState({ items: [...newItems] })
	}

	handleChangesNotes = (e, index) => {
		let value = e.target.value

		this.setState(prevState => {
			const items = prevState.items.map((item, i) => {
				if (i === index) {
					return { ...item, notes: value }
				} else {
					return { ...item }
				}
			})

			return { items }
		})
	}

	handleSubmitNotes = index => {
		this.setState(prevState => {
			const items = prevState.items.map((item, i) => {
				if (i === index) {
					return { ...item, notes: item.notes }
				} else {
					return { ...item }
				}
			})

			return { items }
		})
	}

	handleCollapseNotes = index => {
		this.setState(prevState => {
			const items = prevState.items.map((item, i) => {
				if (i === index) {
					return { ...item, open: !item.open }
				} else {
					return { ...item }
				}
			})

			return { items }
		})
	}

	render() {
		const { items, message } = this.state
		return (
			<div className='container'>
				<div className='row justify-content-center'>
					<div className='col-6'>
						<h1 className='pt-5 pb-4'>Shopping List</h1>
						<Message message={message} />
						<Form
							onChange={this.handleInputChanges}
							onSubmit={this.handleSubmit}
						/>
						<div className='table-responsive-sm'>
							<table className='table table-striped mt-5'>
								<thead>
									<tr>
										<th width='30'>
											<i className='fas fa-shopping-basket' />
										</th>
										<th scope='col' width='70'>
											Qty.
										</th>
										<th scope='col' colSpan='4'>
											Item
										</th>
									</tr>
								</thead>
								<tbody>
									{items.map((item, index) => {
										let collapse
										if (items.length > 0) {
											collapse = item.open
										}
										return (
											<List
												key={index}
												item={item}
												index={index}
												collapse={collapse}
												onHandleCollapse={this.handleCollapseNotes}
												onHandleRemoveItem={this.handleRemoveItem}
												onHandleChangesNotes={this.handleChangesNotes}
												onHandleSubmitNotes={this.handleSubmitNotes}
											/>
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
