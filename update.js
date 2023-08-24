const urlbase='http://localhost:5000'
const headers={'Content-Type': 'application/json; charset=UTF-8'}
const productId=localStorage.getItem('productId')
// let input1=document.getElementById("name").value
// let input2=document.getElementById("price").value
// let input3=document.getElementById("description").value
function getProductByID() {
    axios({
    method:'get',
    url:`${urlbase}/product/${productId}`,
    headers}).then (function(response) {
        const {message,product}=response.data;
        if (message=="done") {
            document.getElementById("name").value=product.name
            document.getElementById("price").value=product.price
            document.getElementById("description").value=product.description   
        }
        

    }).catch(function (error) {
        console.log(error)
    })
    
}
getProductByID()
function updateproduct() {
    let one=document.getElementById("name").value
     let two=document.getElementById("price").value
      let three=document.getElementById("description").value
            const data={
                name:document.getElementById("name").value,
                price:document.getElementById("price").value,
                description:document.getElementById("description").value

            }

axios({
    method:'put',
    url:`${urlbase}/product/${productId}`,
    data,
    headers
}).then ((response) =>{
    const {message}=response.data;
    if (message=='done') {
        window.location.href='index.html'
        
    }else
    alert("failed")
    
}).catch(function (error) {
    console.log(error)
})
}