import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault();

		const {email, password} = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({email: '', password: ''})
		} catch (error) {
			console.log(error);
		}

		this.setState({ email: '', password: '' })
	}

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value })
	}

	render() {
		return (
			<div className='sign-in'>
				<h2>我已經有一個帳號了</h2>
				<span>輸入 email 及密碼登入會員</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						type='email'
						handleChange={this.handleChange}
						value={this.state.email}
						label='Email'
						required />
					<FormInput
						name='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						label='Password'
						required />

					<div className='buttons'>
						<CustomButton type='submit'> 登入 </CustomButton>
						<CustomButton type='text' onClick={signInWithGoogle} isGoogleSignIn>
							使用 Google 登入
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;