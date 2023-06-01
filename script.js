const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        const targetCount = +counter.getAttribute('data-target');
        // console.log(targetCounter);

        const startingCount = Number(counter.innerHTML);

        const incr = targetCount / 10;
        if(startingCount < targetCount){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 100);
        }else{
            counter.innerHTML = targetCount;
        }

    }
    updateCounter();
})



/*

There are several ways to achieve it : 

1: Using the unary plus operator
    var n = +str;

2: The Number constructor :
    var n = Number(str);

3: The parseFloat function
    var n = parseFloat(str);
*/