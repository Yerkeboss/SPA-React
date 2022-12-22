import React, { Component, useState } from 'react';
import $ from "jquery";
import '../assets/scss/php.scss';
import Social from '../components/Social';

function Contact () {
    const [name, setName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [result, setResult] = useState("");

	const handleChange1 = (e) => {
		setName(e.target.value);
	};

	const handleChange2 = (e) => {
		setMobile(e.target.value);
	};

	const handleChange3 = (e) => {
		setEmail(e.target.value);
	};


	const handleSumbit = (e) => {
		e.preventDefault();
		const form = $(e.target);
		$.ajax({
			type: "POST",
			url: form.attr("action"),
			data: form.serialize(),
			success(data) {
				setResult(data);
			},
		});
	};
        return (
            <div className="container" >
                <h1 className='pagehead'>Please don’t hesitate to reach out if you have any questions about my background.</h1>
                <p>
                    I look forward to the opportunity to speak with you further; thank you for your time and consideration.
                </p>

                <div className="sendMail">
                    <a href="mailto: yerkegali.official@gmail.com">
                        <i className='bx bx-envelope' ></i> yerkegali.official@gmail.com
                    </a>
                    <div>
                        <i className='bx bx-map'></i> Hong Kong, Kowloon Tong
                    </div>
                </div>
                <Social />
                <form
				action="http://localhost:8000/server.php"
				method="post"
				onSubmit={(event) => handleSumbit(event)}
			>

				<label htmlFor="name">Name: </label>
				<input
					type="text"
					id="name"
					name="name"
					value={name}
					onChange={(event) => handleChange1(event)}
				/>
				<br />
				<label htmlFor="name">Mobile number: </label>
				<input
					type="text"
					id="mobile"
					name="mobile"
					value={mobile}
					onChange={(event) => handleChange2(event)}
				/>
				<br />
				<label htmlFor="name">Email: </label>
				<input
					type="text"
					id="email"
					name="email"
					value={email}
					onChange={(event) => handleChange3(event)}
				/>
				<br />
				<button type="submit">Submit</button>
			</form>
			<h1>{result}</h1>
            </div >

        );
}

export default Contact;