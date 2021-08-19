import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';
import { render } from '@testing-library/react';

class SignUp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('確定密碼不符合');
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)

			await createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});

		} catch (error) {
			console.log(error);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className='sign-up'>
				<h2 className='title'>我還沒有帳號</h2>
				<span>輸入 email 以及密碼進行註冊</span>
				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						type='text'
						name='displayName'
						value={displayName}
						onChange={this.handleChange}
						label='顯示名稱'
						required
					/>
					<FormInput
						type='email'
						name='email'
						value={email}
						onChange={this.handleChange}
						label='Email'
						required
					/>
					<FormInput
						type='password'
						name='password'
						value={password}
						onChange={this.handleChange}
						label='密碼'
						required
					/>
					<FormInput
						type='password'
						name='confirmPassword'
						value={confirmPassword}
						onChange={this.handleChange}
						label='確定密碼'
						required
					/>
					<CustomButton type='submit'>註冊</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;