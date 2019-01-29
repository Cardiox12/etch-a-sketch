const generateRandom = function (min, max) {
    return Math.floor((Math.random() * max) + min);
}

class Grid {
    constructor(element) {
        this.element = element;
        this.height = 500;
        this.width = 600;
    }

    generateGrid(x, y) {
        this.x = x;
        this.y = y;
        this.cell_height = this.height / y;
        this.cell_width = this.width / x;
        let total_size = this.x * this.y;

        while (total_size--) {
            const div = document.createElement("div");
            div.classList.add('cell');
            div.style.cssText = `height: ${this.cell_height}px; 
                                 width: ${this.cell_width}px;`;

            div.addEventListener("mouseover", () => {
               div.style.backgroundColor = "black"; 
            });
            this.element.appendChild(div);
        }
    }

    removeCells() {
        let length = this.element.children.length;
        while (length--) {
            this.element.removeChild(this.element.children[length]);
        }
    }


    addColor() {
        for (let div of this.element.children) {
            div.addEventListener("mouseover", function (e) {
                div.style.backgroundColor = `rgb(${generateRandom(0, 255)} , 
                                                    ${generateRandom(0, 255)} , 
                                                    ${generateRandom(0, 255)})`;
                console.log("Mouse is over")
            });
        }
    }
}
