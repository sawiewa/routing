export default function ModalNew({ title, description, removeModal,removeAllModals }) {
	return (
		<div className='dialog'>
			
				<div className='title'>
					<p>{title}</p>
				</div>
				<div className='description'>
					<p>{description}</p>
				</div>
				<div className='footer'>
					<button onClick={removeModal}>usuń X</button>
					<button onClick={removeAllModals}>Usuń wszystkie X</button>
				</div>
			</div>
		
	);
}
