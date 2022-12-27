function showPopUpMenu(){
    document.getElementById('NoItems').style.display='none';
    document.getElementById('popUp').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)';
}

function ClosePopUpScreen(){
    document.getElementById('popUp').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}

function ClosePopUpScreenForCountry(){
    document.getElementById('popUpForCountry').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
    // console.log("Close pop for country invoked : ", this.parentElement.parentElement);
}

function AddNewTask(){

    let parentForFlexItem = document.getElementById('addNewlyAddedTaskHere');
    let newCardInParent  = document.createElement('div');
    let horizonatllineForEachCard = document.createElement('hr');
    let valueofCardCreated = document.getElementById('inputTaskId').value;
    let cardHeading = document.createElement('h3');
    let foootertag = document.createElement('center');
    
    let deleteButtonInsideTask = document.createElement('button');
    let plusButtonInsideTask  =document.createElement('button');

    // deleteButtonInsideTask.innerText='X';
    deleteButtonInsideTask.innerHTML='<i class="material-icons" style="font-size:1.32vw">delete</i>';
    // plusButtonInsideTask.innerHTML='&plus;';
    plusButtonInsideTask.innerHTML='<i class="fa fa-plus" style="font-size:1.32vw"></i>';



    // Adding event for card deletion .

    deleteButtonInsideTask.addEventListener('click',removeCardFunction);


    // Adding event for Acivities to be inserted inside Card 

    plusButtonInsideTask.addEventListener('click', AddNewTaskForCountry)


    // Clicking on heading function 

    cardHeading.addEventListener('click',() => {

        console.log('Heading clicked');
        
        document.querySelector('.forOneCardHeadingContaner').style.display='block';
        document.getElementById('mainContainer').style.display='none';

         card = cardHeading.parentElement;

         console.log('card is : ',card);

        

        // document.getElementById('cardThatIsSelectedCeneter').insertAdjacentElement("afterbegin",cardHeading.parentElement);
        document.getElementById('cardThatIsSelectedCeneter').insertAdjacentElement("afterbegin",card);
        // document.getElementById('cardThatIsSelectedCeneter').insertAdjacentHTML('afterbegin', card);

        document.getElementById('BackButtonForSingleCard').addEventListener('click', (e) =>{
            e.preventDefault();

            console.log("Function for Back button clicked .");

            document.querySelector('.forOneCardHeadingContaner').style.display='none';
            document.getElementById('mainContainer').style.display='block';


        })




        
    })



    cardHeading.textContent= valueofCardCreated;
    parentForFlexItem.appendChild(newCardInParent);
    newCardInParent.appendChild(cardHeading);
    newCardInParent.appendChild(horizonatllineForEachCard);
    newCardInParent.appendChild(foootertag)
    foootertag.appendChild(deleteButtonInsideTask);
    foootertag.appendChild(plusButtonInsideTask);

//  related to div that is added

    newCardInParent.style.minHeight='40vh';
    newCardInParent.style.height='auto';
    // newCardInParent.style.width='18vw';
    newCardInParent.style.backgroundColor='white';
    newCardInParent.className='DynamicallyAddedFlexItems';
    newCardInParent.style.borderRadius = "6px"

    newCardInParent.style.position='relative';

    // realted to heading that is added 
    cardHeading.style.textAlign='center';
    cardHeading.style.color="Orange";
    cardHeading.style.font="Arial";
    cardHeading.style.fontSize="1.5em";
    cardHeading.style.textShadow="0.2px 0.2px 0.83px grey";


    // related to delete and plus buton 

    deleteButtonInsideTask.style.width='20%';
    deleteButtonInsideTask.style.height='10%';
    deleteButtonInsideTask.style.position='absolute';
    deleteButtonInsideTask.style.bottom='10px';
    deleteButtonInsideTask.style.backgroundColor='lightgreen';
    deleteButtonInsideTask.style.color='white';
    deleteButtonInsideTask.style.borderRadius='10px';



    plusButtonInsideTask.style.width='20%';
    plusButtonInsideTask.style.height='10%';
    plusButtonInsideTask.style.position='absolute';
    plusButtonInsideTask.style.bottom='10px';
    plusButtonInsideTask.style.right='10px';
    plusButtonInsideTask.style.backgroundColor='skyblue';
    plusButtonInsideTask.style.color='white';
    plusButtonInsideTask.style.borderRadius='10px';

    //
    

    document.getElementById('popUp').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';
}


function removeCardFunction(){
    
    this.parentElement.parentElement.remove();
}

function addActivitesInsideCard(){

    document.getElementById('popUpForCountry').style.display='none';
    document.getElementById('mainContainer').style.filter= 'blur(0px)';    
    console.log("Hello this is adding actitvity inside card");
     //console.log(ele);
}


// added task for placing activities inside a card.


function AddNewTaskForCountry(){

    document.getElementById('popUpForCountry').style.display='block';
    document.getElementById('mainContainer').style.filter= 'blur(8px)'; 
    
    
    // var hrel = this.parentElement.previousElementSibling;
    document.getElementById('closeButtonPopUpScreenForCountry').addEventListener('click', function ClosePopUpScreenForCountry(){
        document.getElementById('popUpForCountry').style.display='none';
        document.getElementById('mainContainer').style.filter= 'blur(0px)';
        // console.log("Close pop for country invoked : ", this.parentElement.parentElement);
        
    });

 
    ouetr:
    var hrel = this.parentElement.parentElement;
    console.log("add button for country invoked ", hrel);

    document.getElementById('addButtonPopUpScreenForCountry').addEventListener('click',()=>{

        document.getElementById('popUpForCountry').style.display='none';
        document.getElementById('mainContainer').style.filter= 'blur(0px)';
        
        let break1 = document.createElement('br');
        let divActivityCard = document.createElement('div');
        let activitybox = document.createElement('p');
        let markDoneButton = document.createElement('button');
        let activityValue = document.getElementById('inputTaskIdForCountry').value; 

        activitybox.textContent = activityValue;
        activitybox.style.textAlign='center';
        activitybox.style.verticalAlign='middle';

        divActivityCard.style.display='flex';
        divActivityCard.textAlign='center';
        divActivityCard.style.justifyContent='center';
        divActivityCard.style.paddingLeft='2%';
        divActivityCard.style.alignContent ='spaceBetween'
        divActivityCard.alignItems='center';
        
            
        divActivityCard.appendChild(activitybox);
        divActivityCard.appendChild(markDoneButton);
        
        hrel.appendChild(divActivityCard);
        hrel.appendChild(break1);

        activitybox.style.width='20%';

        markDoneButton.style.background='skyblue';
        markDoneButton.style.color='white';
        markDoneButton.style.height='30px';
        markDoneButton.style.width = 'auto';
        markDoneButton.style.borderRadius='5px'
        markDoneButton.textContent='mark'       

        console.log("input value for country is : ", activityValue);

        console.log('inside anonymous function : ', hrel);
        hrel ='';



        markDoneButton.addEventListener('click', () => {
            markDoneButton.style.display='none';
            activitybox.style.textDecorationLine = 'line-through ';
            activitybox.style.color = 'purple';
            activitybox.style.fontSize='1.2em';
            activitybox.style.paddingLeft = '0px';
            console.log('this is for marking function value : ');
        })
    
    })

    
 ;

    }
