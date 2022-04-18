//for product carousel
$(document).ready(function () {
    $('#autoWidth').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});

let productAccordian = document.getElementById('autoWidth');

const xhr = new XMLHttpRequest();
xhr.open('GET', `http://fatafatbooks.com/api/books/gethomebooks`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let latest = json.latest;
        console.log(latest);
        let productHtml = "";
        latest.forEach(function (element) {

            let products = `<li class="item-a">
                    <div class="box">
                        <div class="slid-img">
                            <img src="${element["thumbnail"]}" alt="product img">
                        </div>
                        <div class="detail-box">
                            <h3>Name:${element["bookName"]}</h3>
                            <h3>Id:${element["booksId"]}</h3>
                        </div>
                    </div>
                </li>`
            console.log(element.authorName);
            productHtml += products;
        });
        productAccordian.innerHTML = productHtml;
    }
    else {
        console.log("Some error occured");
    }
}

xhr.send()