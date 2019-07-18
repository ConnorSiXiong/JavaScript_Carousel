


const bindEventSlide = function () {
    let selector = '.alex-slide-button'
    bindAll(selector, 'click', function (event) {
        let self = event.target
        let slide = self.closest('.alex-slides')
        let offset = Number(self.dataset.offset)
        let nextIndex = getNextIndex(slide, offset)
        showImageAtIndex(slide, nextIndex)
    })
}

const getNextIndex = function(slide, offset) {
    let amountImg = parseInt(slide.dataset.imgs, 10);
    let activeIndex = parseInt(slide.dataset.active, 10)
    let nextActiveIndex = (activeIndex + offset + amountImg) % amountImg
    return nextActiveIndex
}

const bindEventIndicator = function() {
    let selector = '.alex-slide-indicators'
    // cannot 'mouseover'---?
    bindAll(selector, 'mouseover', function(event) {
        let self = event.target
        let index = Number(self.dataset.index)
        let slide = self.closest('.alex-slides')
        showImageAtIndex(slide, index)
    })
}


const changeIndicator = function(slide, index) {
    let indicatorClassName = 'indi-active'
    removeClassAll(indicatorClassName)
    let idNextIndicator = '#id-indicator-' + String(index)
    let nextIndicator = query(idNextIndicator);
    nextIndicator.classList.add(indicatorClassName)
}

const changeButton = function (slide, index) {
    let buttonClassName = 'slide-active'
    removeClassAll(buttonClassName)
    let idNextImg = '#id-img-' + String(index)
    let nextImg = query(idNextImg)
    nextImg.classList.add(buttonClassName)
}

const showImageAtIndex = function(slide, index) {
    let nextActiveIndex = index

    // 4.change the self-defined 'active', which links other operations
    slide.dataset.active = nextActiveIndex
    //
    // let buttonClassName = 'slide-active'
    // removeClassAll(buttonClassName)
    // // 5.present the next img through 'id'
    // let idNextImg = '#id-img-' + String(nextActiveIndex)
    // let nextImg = query(idNextImg)
    // nextImg.classList.add(buttonClassName)
    changeButton(slide, nextActiveIndex)
    // 6.change indicator
    // let indicatorClassName = 'indi-active'
    // removeClassAll(indicatorClassName)
    //
    // let nextIndicatorIndex = nextActiveIndex
    // let idNextIndicator = '#id-indicator-' + String(nextIndicatorIndex)
    // let nextIndicator = query(idNextIndicator)
    // nextIndicator.classList.add(indicatorClassName)
    changeIndicator(slide, nextActiveIndex)
    // 7, change index of the out indicator div
    let frameOfIndicators = query('.alex-slide-indicators')
    frameOfIndicators.dataset.index = nextActiveIndex
}

const playNextImage = function () {
    let slide = query('.alex-slides')
    let index = getNextIndex(slide, 1)
    showImageAtIndex(slide, index)
}

const autoPlay = function() {
    let interval = 2000
    setInterval(function () {
        playNextImage()
    }, interval)
}

const timerDemo = function () {
    let i = setInterval(function () {
        log('time', new Date())
    }, 1000)
}

const __main = function() {

    autoPlay()
    bindEventSlide()
    bindEventIndicator()
}

__main()