"use strict";

const pageTopBtn = document.getElementById('pagetop');

pageTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
});

function filter() {
	var input, filter, ul, li, a, i, txtValue;
	input = document.getElementById('filter');
	filter = input.value.toUpperCase();
	ul = document.getElementById("thelist");
	li = ul.getElementsByTagName('li');
	
	for (i = 0; i < li.length; i++) {
		a = li[i].getElementsByTagName("a")[0];
		txtValue = a.textContent || a.innerText;
		if (txtValue.toUpperCase().indexOf(filter) > -1) {
			li[i].style.display = "";
		} else {
			li[i].style.display = "none";
		}
	}
}

function submitter(e) {
    e.preventDefault();
    let name = document.getElementById("name");
    let email = document.getElementById("emailAdd");
    let comments = document.getElementById("comments");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
    let nameSpan = name.previousElementSibling;
    let emailSpan = email.previousElementSibling;
    let commentSpan = comments.previousElementSibling;
    let result = document.getElementById("result");
    let hasError = false;
    nameSpan.innerHTML = "";
    emailSpan.innerHTML = "";
    commentSpan.innerHTML = "";
    result.innerHTML = "";
    if (name.value.trim().length < 1) {
        nameSpan.innerHTML = "Please enter a valid name.";
        hasError = true;
    }
    if (!emailRegex.test(email.value.trim())) {
        emailSpan.innerHTML = "Please enter a valid email address.";
        hasError = true;
    }
    if (comments.value.trim().length < 1) {
        commentSpan.innerHTML = "Please enter a comment.";
        hasError = true;
    }
    if (hasError) return;
    const person = {
        name: name.value.trim(),
        email: email.value.trim(),
        comments: comments.value.trim()
    };
    result.innerHTML = `You sent:<br>
    Name: ${person.name}<br>
    Email: ${person.email}<br>
    Comments: ${person.comments}`;
    document.getElementById("content").reset();
}

document.querySelector("form").addEventListener("submit", submitter);