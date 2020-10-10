var counter = 1;
function removeCard(removeID){

    var removeEle = document.getElementById(removeID);
   removeEle.remove();
    
}
function addCard(cardID) {
    counter += 1;
   
    document.getElementById(cardID).innerHTML += `<section id="`+counter+`"><div class="card text-right">
        <button onclick="removeCard(this.id)" id="`+counter+`" class="btn btn-danger btn-circle btn-sm float-right"
        type="button">x</button> 
        <img class="card-img-top cardimg" src="img/Twitter_Logo_Blue.png" style="size:100px" alt="Sports">
        <div class="card-body">
        <p>tweet tweet </p>
    
        </div>
        </div></section>
        `;
      }
