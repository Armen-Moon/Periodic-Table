//function $(tagName)
//{
//	return document.createElement(tagName);
//}





HTMLElement.prototype.text = function (text)
{
	return (this.innerText = text, this);
}


HTMLElement.prototype.html = function (text) {
	return (this.innerHTML = text, this);
}


HTMLElement.prototype.append = function ()
{
	for (let i = 0; i < arguments.length; i++) {
		this.appendChild(arguments[i]);
	}
	return (this);
}

HTMLElement.prototype.attr = function (attrName, attrValue)
{
	return (this.setAttribute(attrName, attrValue), this);
}


HTMLElement.prototype.addClass = function (className)
{
	return (this.classList.add(className), this);
}


//HTMLElement.prototype.toggleClass = function (className)
//{
//	if (!this.classList.contains(className)) {
//		this.classList.add(className);
//	}
//	else {
//		this.classList.remove(className);
//	}
//	return this;
//}


function $(selector) {
	var elements;
	if ('.' === selector[0]) {
		var className = selector.substring(1, selector.length);
		elements = document.getElementsByClassName(className);
		return elements;
	} else if ('<' === selector[0] && '>' === selector[selector.length - 1]) {
		var tagName = selector.substring(1, selector.length - 1);
		return document.createElement(tagName);
	} else {
		return document.getElementsByTagName(selector);
	}
}