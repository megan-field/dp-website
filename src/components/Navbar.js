import React from 'react';

class Navbar extends React.Component {
	render() {
		return (
		<nav class="navbar navbar-expand-lg navbar-light navbar-fixed-top">
  <a class="navbar-brand" href="/">DP</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="collection">Collection</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="tailoring">Tailoring</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>
			)
	}
}

export default Navbar;