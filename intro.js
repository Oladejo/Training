const nemo = ['nemo'];

function findNemo(array){
    let t0 = Date.now(); 
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found Nemo');
        }
    }
    let t1 = Date.now(); 
    console.log('call time ' + (t1 - t0) + ' milliseconds')
}

findNemo(nemo);
