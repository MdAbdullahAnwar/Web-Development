const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height < 0 || isNaN(height)){
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight < 0 || isNaN(weight)){
        results.innerHTML = `Please give a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        let status = '';
        if(bmi < 18.6)
        {
            status = "Under-Weight";
        }
        else if(bmi >= 18.6 && bmi <= 24.9)
        {
            status = "Normal Range";
        }
        else if(bmi > 24.9)
        {
            status = "Over-Weight";
        }
        results.innerHTML = `<span>${bmi} ${status}</span>`
    }
});