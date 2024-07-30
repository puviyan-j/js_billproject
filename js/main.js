const cont = [
    {
        item_name: 'orange',
        price: 25,

    },
    {
        item_name: 'apple',
        price: 80,

    },
    {
        item_name: 'lemon',
        price: 10,
    },
    {
        item_name: 'pinapple',
        price: 15,

    },
];

const main = document.getElementById("main");
const input = document.getElementById("input");
j = 0;

function fn() {
    const inpu = input.value;
    if(inpu.length!=0){
        fun(inpu)
    }
    else{
        alert("please enter...")
    }
    
}

function fun(ds) {
    
    let result = cont.find(function (order) {
        return order.item_name === ds;
    
    });
    
    var {
        item_name,
        price,
        count
    } = result;
    j++;

    const dist = document.createElement("div");
    dist.classList.add("product");
    dist.innerHTML =
        `     <div class="no"> <h3>${j}</h3> </div>
           <div class="name"> <h3 class="name">${item_name}</h3> </div>
            <input type="numper" value ="${price}" class="price" readonly>
            <input type="number" value ="1" id="apple" class="apple" min="0">
            <input type="text" value ="${price}"id="tot"  class="tot" readonly>

    `
    main.prepend(dist);

    const quanty = document.querySelector(".apple");
    quanty.addEventListener('click', my_total);
    my_total();
    input.value=""
}

function my_total() {
    const pre_totel = document.querySelector(".price").value;
    const quantys = document.querySelector(".apple");
    const q = quantys.value;

    let totel_rs = document.querySelector(".tot");

    const total = pre_totel * q; 
    totel_rs.value = total;

    frum()
}
function frum() {

    const total = document.querySelector(".total");
    const bill_crete = document.querySelector(".bills");
    bill_crete.style.display="block"

    const sty = total.style.display='block';
    const mai = document.querySelector("#main");
    const mai_1 = mai.children;
    const ma = [];

    for (i = 0; i < mai_1.length; i++) {
        const mai_2 = mai_1[i];
        const mai_3 = mai_2.children;
        const mai_4 = mai_3[4].value;
        ma.push(mai_4);
    }

    const sum = eval(ma.join("+"));
    total.value = sum;
}

function bills(){
    const mai = document.querySelector("#main");
    const bill_prints = document.querySelector(".print");
    const bills = document.querySelector(".prints");
     const bilss= bills.style.display="block";
    const total = document.querySelector(".total").value;
    const thanks = document.querySelector(".thanks");

    const mai_1 = mai.children;
    for (i = 0; i < mai_1.length; i++){
        const mai_2 = mai_1[i];
        const mai_3 = mai_2.children;
        const mai_4 = mai_3[1].textContent;
        const mai_5 = mai_3[2].value;
        const mai_6 = mai_3[3].value;
        const mai_7 = mai_3[4].value;

        
       const bil = mai_4+mai_5+mai_6+mai_7;

             bill_prints.innerHTML +=`<li class="li"><p>${i+1}</p><p>${mai_4}</p><p>${mai_5}</p><p>${mai_6}</p><p>${mai_7}</p></li>`

             thanks.innerHTML =`
             --------------------------------------------------------------------------<br>
             Total Bill Is = ${total} rupees only..."<br>
             --------------------------------------------------------------------------<br>
             Thanks For Shopping!!! Visit Again!!!<br>
             --------------------------------------------------------------------------<br>
             `
           

    }
    mai.innerHTML="";
    all_clear()
}
function bill_clear(){
    const mai = document.querySelector("#main");
    const bills = document.querySelector(".prints"); 
    bills.innerHTML="";
    mai.innerHTML=""
   bills.style.display="none";
   location.reload();
}

function all_clear(){
    const all_clear=document.querySelector(".input");
    all_clear.style.display="none"
}






