// Filter fish that are "on sale"

// Add fish to "Basket"

<<<<<<< HEAD
=======

//Loading Fish

>>>>>>> 6d63bf0fa254ea00b334138389709bdf4eea4e02
$.get('../db/fishes.json')
.done((data) => {
    console.log(data);
})

.fail((error) => {
    console.error({error});
});