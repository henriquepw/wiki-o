/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Header, Title, Body } from 'react-bootstrap/Modal';
import { A } from './ModalComponent.style';

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
		<Header>
			<Title id='contained-modal-title-vcenter'>Sobre</Title>
		</Header>
		<Body>
			<p>
				Jogo criador por:{' '}
				<A
					href='https://www.facebook.com/gaming/LJoga2'
					target='_blank'
					rel='noopener noreferrer'
				>
					Ljoga
				</A>
				,
				<A
					href='https://www.facebook.com/gaming/feeeelps/'
					target='_blank'
					rel='noopener noreferrer'
				>
					Felps
				</A>
				,
				<A
					href='https://www.twitch.tv/cellbit'
					target='_blank'
					rel='noopener noreferrer'
				>
					Cellbit
				</A>{' '}
				e{' '}
				<A
					href='https://www.facebook.com/gaming/gabicattuzzo'
					target='_blank'
					rel='noopener noreferrer'
				>
					Gabi
				</A>
			</p>
			<p>
				Contribuidora:{' '}
				<A
					href='https://www.facebook.com/meiliz.twitch'
					target='_blank'
					rel='noopener noreferrer'
				>
					Melissa Meiliz
				</A>
				{' - '}
				Escrevou parte das regras
			</p>
			<p>Meu nick na twitch: cavaloskatista</p>
			<p>
				Site em construção. Se quiser ajudar ou usar de referência,
				fique a vontade, o projeto está no{' '}
				<A
					href='https://github.com/henry-ns/wiki-o'
					target='_blank'
					rel='noopener noreferrer'
				>
					github
				</A>{' '}
				peepoLove
			</p>
		</Body>
	</Modal>
);
