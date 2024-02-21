import { useAddModal } from '../hooks/useAddModal';
import { useSelector } from 'react-redux';
//import { useState } from 'react';

const ProductPage = () => {
	const modals = useSelector((state) => state.modal.modals).filter(
		(modal) => modal.page === 'product'
	);

	console.log(modals);

	const { addModalToList, removeModal, 
		//actualList,setActualList 
	} =
		useAddModal('product');

	const id = 10 + Math.floor(Math.random() * 900);
	const modalData = {
		id: id,
		title: `titleProduct ${id}`,
		description: `descProduct ${id}`,
		page: 'product',
	};

	const buttons = modals.map((modal) => {
		return (
			<button
				id={modal.id}
				key={modal.id}
				page={modal.page}
				onClick={() => removeModal(modal.id)}>
				remove modal {modal.id} {modal.page}
			</button>
		);
	});

	const addModal = (modal) => {
		addModalToList(modal);
		//setActualList(modals)
	};
	//console.log({ actualList });
	return (
		<>
			<div>prod</div>
			<button onClick={() => addModal(modalData)}>Dodaj modal</button>
			{buttons}
		</>
	);
};

export default ProductPage;
