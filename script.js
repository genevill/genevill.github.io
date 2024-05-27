function changeContent(page) {
	var contentDiv = document.getElementById('content');

	switch (page) {
		case 'calculator':
			myFunction();
			break;
		case 'home':
			contentDiv.innerHTML = `
				<h2>Home</h2>
				<p>
					A bunch of text.
				</p>
				<p>
					More text.
				</p>
			`;
			break;
		case 'about':
			contentDiv.innerHTML = `
				<h2>About Us</h2>
				<p>
					This is the about page content. Learn more 
					about our purpose and team.
				</p>
				<p>
					We're passionate about creating engaging and
					informative SPAs.
				</p>
			`;
			break;
		case 'contact':
			contentDiv.innerHTML =
				`<h2>Contact Us</h2> 
				<p>
					Feel free to reach out to us!
				</p> 
				<form> 
				<label for="name">Name:</label> 
				<input type="text" id="name" name="name" 
						placeholder="Your Name" required>
				<label for="email">Email:</label> 
				<input type="email" id="email" name="email" 
						placeholder="Your Email" required>
				<label for="message">Message:</label> 
				<textarea id="message" name="message" 
							placeholder="Your Message" 
							rows="4" required>
					</textarea>
				<button type="submit">Send Message</button> 
				</form>`;
			break;

		default:
			contentDiv.innerHTML = '<h2>Page not found!</h2>';
	}
}

function myFunction() {
	var x = document.getElementById("calculator");
	if (x.style.display === "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}