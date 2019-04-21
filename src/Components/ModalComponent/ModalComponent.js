/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Header, Title, Body } from 'react-bootstrap/Modal';

type ModalProps = {
	onHide: boolean
};

export default (props: ModalProps) => (
	<Modal
		{...props}
		size='lg'
		aria-labelledby='contained-modal-title-vcenter'
		centered
	>
		<Header closeButton>
			<Title id='contained-modal-title-vcenter'>Sobre</Title>
		</Header>
		<Body>
			<p>Em construção :)</p>
		</Body>
	</Modal>
);
