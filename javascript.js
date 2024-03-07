const grid_container = document.createElement("div");
grid_container.classList.add("container");

document.body.appendChild(grid_container);

function fill_grid(dim) {
    for(let i = 0; i < dim; ++i) {
        const sub_div = document.createElement("div");
        sub_div.classList.add("div"+i);
        sub_div.classList.add("row");
        for(let j = 0; j  < dim; ++j) {
            const sub_sub_div = document.createElement("div");
            sub_sub_div.style = "background: white";
            sub_sub_div.classList.add("div"+j);
            sub_sub_div.classList.add("col");

            // color 
            sub_sub_div.addEventListener("mouseover", e => {
                if(e.target.style.background === "white") {
                    let red = Math.floor(Math.random() * 255);
                    let green = Math.floor(Math.random() * 255);
                    let blue = Math.floor(Math.random() * 255);
                    let color = `rgb(${red},${green},${blue}, 0.1)`;
                    e.target.style = `background: ${color}`;
                } else {        
                    change_alpha(e.target);
                }
            });

            sub_div.appendChild(sub_sub_div);
        }
        grid_container.appendChild(sub_div);
    }
}

fill_grid(16);

function new_grid(dim) {
    Array.from(grid_container.children).forEach(child => child.remove());
    fill_grid(dim);
}

function change_alpha(t) {
    let rgba_values = t.style.background.match(/[\d]+(\.[\d]+)?/g);
    console.log(rgba_values[3]);
    rgba_values[3] = Math.min(1, Math.max(0, parseFloat(rgba_values[3]) + 0.1));
    console.log(rgba_values[3]);
    t.style.background = `rgba(${rgba_values.join(",")})`;
}


const grid_size_btn = document.querySelector(".grid-size-btn");
grid_size_btn.addEventListener("click", (e) => {
    let dim = parseInt(prompt("Enter new grid size (16 to 100)."));
    if(typeof dim === "number") {
        if(dim < 16) {
            dim = 16;
        }
        if(dim > 100) {
            dim = 100;
        }
        new_grid(dim);
    }
});

const reset_btn = document.querySelector(".reset-btn");
reset_btn.addEventListener("click", e => {
    Array.from(document.querySelectorAll(".col")).forEach(sq => sq.style.background = "white")
});


