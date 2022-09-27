var lis=[];
var glob;
var a=fetch('https://dummyjson.com/products');
a.then((response)=>response.json()).then((data)=>{
    const final=data.products;
    glob=final;
    for(var i=0;i<final.length;i++){
        lis.push(final[i].brand.toLowerCase()+final[i].title.toLowerCase())
    }
    let x="";
    final.map((ele)=>{
        const{id,description,brand,images,title,price}=ele;
       x+= `
        <div key=${id} class="card__outer">
            <div class="card__img">
                <img src="${images[0]}" style="width:100%;height:100%;border-top-left-radius: 1rem;border-top-right-radius:1rem ;">
            </div>
            <div class="line">

            </div>
            <div class="card__name">
                ${title}
            </div>
            <div class="card__title">
                ${brand}
            </div>
            <div class="card__price">
                $${price}
            </div>

            <div class="card__bottom">
                <div class="card__button" onclick="addClicked(${id})" style="color:white;background-color:black">
                    Add
                </div>
            </div>
            <p id="description_input">
            </p>
        </div>
        `
    
    if(ele.id<=5){
        document.getElementById("smart_phones").innerHTML=x;
        if(ele.id===5){
            x="";
        }

    }
    else if(ele.id>=6 && ele.id<=10 ){
        document.getElementById("laptops").innerHTML=x;
        if(ele.id===10){
            x="";
        }
    }
    else if(ele.id>=11 && ele.id<=15 ){
        document.getElementById("fragrance").innerHTML=x;
        if(ele.id===15){
            x="";
        }
    }
    else if(ele.id>=16 && ele.id<=20 ){
        document.getElementById("skincare").innerHTML=x;
        if(ele.id===20){
            x="";
        }
    }
    else if(ele.id>=21 && ele.id<=25 ){
        document.getElementById("food").innerHTML=x;
        if(ele.id===25){
            x="";
        }
    }
    else{
        document.getElementById("decor").innerHTML=x;
        
    }
    
    })
    
  
    


}).catch((err)=>{
    console.log(err);
})
function checking(p){
    if(p===""){
        return[]
    }
    else{
        var r=new RegExp(p);
        return lis.filter(function (ele){
            if(ele.match(r)){
                return ele;
            }
        })
    }
}

function searchh(){
    // console.log(lis)
    var searchbox = document.getElementById("search_item");
    console.log(searchbox.value);
    if(searchbox.value==="")
    {
        document.getElementById("product_list").style.display = "none";
    }
    else{
        document.getElementById("product_list").style.display = "flex";
    }
    


    var ans=[]
    
    var m=checking(searchbox.value.toLowerCase())
    for(var i=0;i<m.length;i++){
        for(var j=0;j<glob.length;j++){
            if(m[i]===glob[j].brand.toLowerCase()+glob[j].title.toLowerCase()){
                ans.push(glob[j]);
            }
        }   
    }
    let y="";
    ans.map((ele)=>{ 
        const{id,title,brand,price}=ele;
        y+=`<div class="search__each">
                <div class="search__each__top">
                    <div class="search__each__top__img">
                        <img src="${ele.images[0]}" style="width:100%;height:100%;border-radius:50%;">
                    </div>
                    <div class="search__each__top__text">
                        <div class="search__each__top__text__top">
                            ${title}
                        </div>
                        <div class="search__each__top__text__bottom">
                            ${brand}
                        </div>
                    </div>
                    <div class="card__search__price">
                        $ ${price}
                    </div>
                </div>
                <div class="search__each__bottom">
                </div>
            </div>`

        document.getElementById("product_list").innerHTML=y;
})
//<img onclick="addClicked(${id})" src="./images/add.svg" class="search__each__top__button">
}
var cart=[];
var count=0;
function addClicked(val)
{
    count++;
    var check=0;
    var flag=0;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].id===val)
        {
            check=cart[i].count;
            cart[i].count=parseInt(check)+1;
            flag=1;
        }
    }
    if(flag===0)
    {
        cart.push({id:val,title:glob[val].title,brand:glob[val].brand,count:parseInt(check)+1})
    }
    document.getElementById("count").innerHTML=count;
    printCart();
}
function decClicked(val)
{
    var check=0;
    var flag=0;
    for(var i=0;i<cart.length;i++)
    {
        if(cart[i].id===val)
        {
            check=cart[i].count;
            if(parseInt(check)===1)
            {
                cart.splice(i,1); 
                flag=1;
                break;
            }
            cart[i].count=parseInt(check)-1;
            flag=1;
        }
    }
    count--;
    document.getElementById("count").innerHTML=count;
    printCart();
}
var total=0;
function printCart()
{
    let x="";
    var quant=0;
    if(cart.length===0)
    {
        document.getElementById("cart_id").innerHTML="Empty Cart";
        document.getElementById("total_id").innerHTML="$ "+0;
        document.getElementById("total_qunat").innerHTML=0;
    }
    else
    {
        cart.map((ele)=>{
            
            const{id,title,brand,count}=ele;
            x+= `
                <div class="cart__card">
                    <div class="cart__img">
                    <img src="${glob[id-1].images[0]}" style="width:100%;height:100%;>
                    </div>
                    <div class="cart__name">
                        ${glob[id-1].title}
                    </div>
                    <div class="cart__rating">
                        Price : $${glob[id-1].price}
                    </div>
                    <div class="cart__rating">
                        Rating : ${glob[id-1].rating}
                    </div>
                    <div class="cart__count">
                        <div class="cart__count__dec" onclick="decClicked(${id})">
                            <img src="./images/sub.svg" style="width:100%;height:100%;">
                        </div>
                        <div class="cart__count__cout">
                            ${count}
                        </div>
                        <div class="cart__count__dec" onclick="addClicked(${id})">
                            <img src="./images/add.svg" style="width:100%;height:100%;">
                        </div>
                    </div>
                </div>
                `
                document.getElementById("cart_id").innerHTML=x;
                total=total+(glob[id-1].price*count);
                quant=quant+count;
            })
        document.getElementById("total_id").innerHTML="$ "+total;
        document.getElementById("total_qunat").innerHTML=quant;
    }
    
}
function changeDisplay(val)
{
    console.log(val)
    if(val==="cart")
    {
        document.getElementById("cart_body").style.display = "block";
        document.getElementById("home_body").style.display = "none";
        document.getElementById("product_list").style.display = "none";
        printCart();
    }
    else
    {
        document.getElementById("cart_body").style.display = "none";
        document.getElementById("home_body").style.display = "block";
        document.getElementById("product_list").style.display = "none";
    }
}
function Pay(){
    if(total==0){
        alert("Buy Something To Proceed Ahead");
    }
    else{
    let c=prompt("Are You Ready To Pay:- $" + total);
    if(c=="yes"||c=="Yes"){
        window.open('modal.html');
    }
    else{
        alert("You pressed No");
    }
}
}



