let names=['Max','Moritz','Lena']

function render(){
    
    let content=document.getElementById('content');

    content.innerHTML='';

    for (let i = 0; i < names.length; i++) {
        
        content.innerHTML+=`<li> ${names[i]}</li>`
        
    }

}

function showName(){
    let getInput= document.getElementById('input').value;
    getInput=getInput.toLowerCase();

    console.log('hallo');
    let content=document.getElementById('content');

    content.innerHTML='';

    for (let i = 0; i < names.length; i++) {
        
        if(names[i].toLowerCase().includes(getInput)){
            content.innerHTML+=`<li> ${names[i]}</li>`}
        
    }
    
    
}