const discount = .12;

const applySale = () => {
    $(".on-sale").each((i, fish) => {
     const fullPrice = $(fish).find('.price');
     console.log(fullPrice.html());
     const newPrice = (parseInt(fullPrice.html()) * (1-discount)).toFixed(2);
     fullPrice.html(newPrice);
    })
}

const writeFishes = (arrayOfFishes) => {
    let domString = '';
    arrayOfFishes.forEach((fish) => {
        domString += `
        <div class="${fish.onSale ? 'on-sale' : ''} fish card col-md-6 col-md-offset-3"> 
        <div class="thumbnail">
            <img src="${fish.imageSoure}" alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${fish.name}</h3>
                <p>$
                    <span class="price">${fish.basePrice}</span>
                </p>
            </div>
            <div class="caption card-footer">
                <button class="add btn btn-danger">Add To Basket</button>
            </div>
        </div>
        </div>`

    });

    $("#available").append(domString);

}
    $('body').on('click', 'button.add', (e) => {
        const fishToMove = $(e.target).closest('.fish');
        $("#snagged").append(fishToMove);
        $(e.target).text('Remove from Basket').addClass('remove').removeClass('add');
    })
    $('body').on('click', 'button.remove', (e) => {
        const fishToMove = $(e.target).closest('.fish');
        $("#available").append(fishToMove);
        $(e.target).text('Add To Basket').addClass('add').removeClass('remove');
    })

$("#show-sale").click(() => {
// alert('SALE FISHHHHH');
// all divs with the class fish, give me just the ones WITHOUT the class 'on sale' and HIDE
$(".fish").not(".on-sale").toggle();
$("#show-sale").text((i, text) => {
 if (text === "Show Sale Fish") {
     return "Show All"
 } else {
     return "Show Sale Fish";
 }
})
});

    //Load fish
    $.get('../db/fishes.json')
        .done((data) => {
            writeFishes(data.fishes);
            applySale()
        })
        .fail((error) => {
            console.error({ error });
        });
    

