array = []

function init(){
    
    // console.log(array);
    const input = document.getElementById('input')
    array = input.value.split(/\s+/);
    array = array.map((a) => Number(a));
    showBars(array);
//     selectionSort(array);
// console.log(array);
}

function showBars(array,si,sj){
    const container = document.getElementById('container');
    container.innerHTML="";
    for (let k= 0; k<array.length;k++){
        
        const bar = document.createElement('div');
        container.appendChild(bar);
        bar.setAttribute("class",'div');
        bar.style.height = array[k]*5 + 80 + "px";
        if (k==si){
            bar.style.backgroundColor = "blue";
        }

        if (k==sj){
            
            bar.style.backgroundColor = "red";
            
            
        }

    }
}



function selectionSort(copy){
    console.log(array);
    const swaps = [];
    const all = [];
    for (let i=0;i<copy.length;i++){
        for (let j =1;j<copy.length;j++){
            
            if (copy[j-1]>copy[j]){
                swaps.push([j-1,j]);
                [copy[j-1],copy[j]] = [copy[j],copy[j-1]];
            }
        }
    }

    
    return swaps;
}


function playSort(){
    const copy = [...array]
    const swaps = selectionSort(copy);
    animate(swaps);
    
}


function animate(swaps){
    if (swaps.length==0){
        showBars(array,-1,-1);
        return;
    }
    let si,sj;
    if (swaps.length>0){
        [si,sj] = swaps.shift();
    }
    
  
    // showBars(array,si,sj,ai,aj);
    
    [array[si],array[sj]] = [array[sj],array[si]];
    showBars(array,si,sj);
    
    setTimeout(()=>{
        animate(swaps);
    },2000);
}




