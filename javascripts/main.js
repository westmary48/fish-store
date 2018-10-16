// Filter fish that are "on sale"

// Add fish to "Basket"


//Loading Fish

$.get('../db/fishes.json')
.done((data) => {
    console.log(data);
})

.fail((error) => {
    console.error({error});
});