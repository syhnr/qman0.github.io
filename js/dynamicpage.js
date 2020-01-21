//Now json is in "../json/strings.js " :D

function main() {

	if(document.location.href.includes("#")) {
		var anchor = document.location.href.split('/'),
		tab = document.querySelector(`[href$=${anchor[anchor.length - 1]}]`);
		document.getElementById('viewer').innerHTML = json[0][`${anchor[anchor.length - 1]}`];
		document.getElementById('#title').innerHTML = anchor[anchor.length - 1].charAt(0).toUpperCase() + anchor[anchor.length - 1].slice(1);
		try {
			tab.classList.add("active"); //try because if you in command list script cant see tab
		} catch {};
	}

}

if ("onhashchange" in window)
	window.onhashchange = function () {

		var anchor = document.location.href.split('/'),
		tab = document.querySelector(`[href$=${anchor[anchor.length - 1]}]`); //"href$" is https://drafts.csswg.org/selectors/#overview

		document.querySelectorAll('a').forEach(
			function _clear(e) {
				e.classList.remove('active')
			}
		)
		document.getElementById('#title').innerHTML = anchor[anchor.length - 1].charAt(0).toUpperCase() + anchor[anchor.length - 1].slice(1);
		
		tab.classList.add("active")

		viewer.innerHTML = json[0][`${anchor[anchor.length - 1]}`];
}
