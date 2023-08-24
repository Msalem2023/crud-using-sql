
const urlbase='http://localhost:5000'
const headers={'Content-Type': 'application/json; charset=UTF-8'}

function getData(id) {

    axios({
    method:'get',
    url:`${urlbase}/product`,
    headers}).then (function(response) {
        const {message,result}=response.data;
        
            return showData(result)

    }).catch(function (error) {
        console.log(error)
    })
    
}
function showData(result = []) {
    let x=``
    for (let i = 0; i < result.length; i++) {
        x += `<tr>
        <td>${result[i].name}</td>
        <td>${result[i].price}</td>
        <td>${result[i].description}</td>
        <td><button onclick='deleteitem ("${result[i].id}")' class="btn btn-danger">delete</button>
        <button onclick='updateitem ("${result[i].id}")' class="btn btn-success">update</button>
        </td>
        </tr>`
        
    }
    document.getElementById("testy").innerHTML= x
}
getData()
function add() {
    
    let input1=document.getElementById("name").value
    let input2=document.getElementById("price").value
    let input3=document.getElementById("description").value
    const data={
        name:input1,
        price:input2,
        description:input3
    }
    axios({
        method:'post',
        url:`${urlbase}/product`,
        data,
        headers
    }).then (function(response) {
        const {message}=response.data;
        if (message=='done') {
            alert("success")
            return getData()
            
        }else
        alert("failed to add product")
        
    }).catch(function (error) {
        console.log(error)
    })
}
function deleteitem(id) {
    axios({
    method:'delete',
    url:`${urlbase}/product/${id}`,
    headers}).then (function(response) {
        const {message}=response.data;
        if (message=="done") {
            alert("deleted successfully")
            getData()
        }
        

    }).catch(function (error) {
        console.log(error)
    })
    
}
function updateitem(id) {
    localStorage.setItem("productId",id)
    window.location.href='update.html'
    
}
