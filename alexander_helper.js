const log = console.log.bind(console)

const query = function(selector) {
    let element = document.querySelector(selector)
    if (element === null) {
        let warning = `cannot find selector ${selector}, js does not in the body`
        //alert(warning)
        log('warning', warning)
        return null
    } else {
        return element
    }
}

const queryAll = function(selector) {
    let elements = document.querySelectorAll(selector)
    if (elements.length === 0) {
        let warning = `cannot find selector ${selector}, js does not in the body`
        //alert(warning)
        log('warning', warning)
        return null
    } else {
        return elements
    }
}

const bindEvent = function(element, eventName, callback) {
    element.addEventListener(eventName, callback)
}

const bindAll = function(selector, eventName, callback) {
    let elements = queryAll(selector)
    for (let i = 0; i < elements.length; i++) {
        let curElement = elements[i]
        bindEvent(curElement, eventName, callback)
    }
}

const appendHtml = function(element, html) {
    element.insertAdjacentHTML('beforeend', html)
}

// find the children of a element
const find = function(element, selector) {
    let e = element.querySelector(selector)
    if (e === null) {
        let warning = `cannot find selector ${selector}, js does not in the body`
        //alert(warning)
        log('warning', warning)
        return null
    } else {
        return e
    }
}

const removeClassAll = function(className) {
    let selector = '.' + className
    let elements = queryAll(selector)

    for (let i = 0; i < elements.length; i++) {
        let curElement = elements[i]
        curElement.classList.remove(className)
    }
}