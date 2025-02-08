customElements.define("gray-circle", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="circle" id="grayCircle">
                <svg xmlns="http://www.w3.org/2000/svg" width="184" height="184" viewBox="0 0 184 184" fill="none">
                    <circle cx="92" cy="92" r="91" fill="#2F353F" stroke="white" stroke-width="2"/>
                </svg>
            </div>
        `
    }
})
customElements.define("light-gray-circle", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="circle" id="lightGrayCircle">
                <svg xmlns="http://www.w3.org/2000/svg" width="184" height="184" viewBox="0 0 184 184" fill="none">
                    <circle cx="92" cy="92" r="91" fill="#C1C2C5" stroke="white" stroke-width="2"/>
                </svg>
            </div>
        `
    }
})
customElements.define("blue-circle", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="circle" id="blueCircle">
                <svg xmlns="http://www.w3.org/2000/svg" width="184" height="184" viewBox="0 0 184 184" fill="none">
                    <circle cx="92" cy="92" r="91" fill="#2E2BD0" stroke="white" stroke-width="2"/>
                </svg>
            </div>
        `
    }
})
customElements.define("timeline-lines", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="timeline">
                <div class="short"></div>
                <div class="short"></div>
                <div class="long"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="long"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="bold"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="long"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="short"></div>
                <div class="long"></div>
                <div class="short"></div>
                <div class="short"></div>
            </div>
        `
    }
})