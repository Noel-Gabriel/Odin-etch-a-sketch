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
            sub_sub_div.classList.add("div"+j);
            sub_sub_div.classList.add("col");

            // color 
            sub_sub_div.addEventListener("mouseover", e => {
                e.target.style = "background: darkgrey";
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


