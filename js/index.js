let productAccordian = document.getElementById('product_data');

const xhr = new XMLHttpRequest();
xhr.open('GET',`http://fatafatbooks.com/api/books/gethomebooks`,true);

xhr.onload = function(){
    if(this.status === 200){
        let json = JSON.parse(this.responseText);
        let latest = json.latest;
        console.log(latest);
        let productHtml = "";
        latest.forEach(function(element){
            let products = `<div class="col product_item">
                                    <img src="${element["thumbnail"]}" alt="product" class="img-fluid">
                                        <div class="product_detail">
                                            <h4>${element["bookName"]}</h4>
                                            <h5>${element["booksId"]}</h5>
                                        </div>
                                </div>`
                                console.log(element.authorName);
            productHtml += products;
        });
        productAccordian.innerHTML = productHtml;
    }
    else{
        console.log("Some error occured");
    }
}

xhr.send()