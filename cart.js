if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var addToCartButtons = document.getElementsByClassName('btn btn-outline-success')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-title')[0].innerText
    var desc = shopItem.getElementsByClassName('card-text')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    console.log(title, desc, imageSrc)
    addItemToCart(title, desc, imageSrc)

}

function addItemToCart(title, desc, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.innerHTML = title
    cartRow.innerHTML = desc
    var cartitems = document.getElementsByClassName('modal-body')[0]
    cartitems.append(cartRow)
}
