function fivePct() {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value
    
    
    if (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let calculo = bill / nPeople
        
        let calculo2 = (calculo / 100) * 5
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`
    
        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
  
}

function tenPct() {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value
    
    if (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let calculo = bill / nPeople
        
        let calculo2 = (calculo / 100) * 10
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`

        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
    
}


function fifteenPct() {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value
    
    if  (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let calculo = bill / nPeople
    
        let calculo2 = (calculo / 100) * 15
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`
    
        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
    

}

function twentyFivePct() {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value
    
    if (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let calculo = bill / nPeople
    
        let calculo2 = (calculo / 100) * 25
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`
    
        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
}

function fiftyPct() {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value
    
    if (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let calculo = bill / nPeople

        let calculo2 = (calculo / 100) * 50
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`
    
        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
}

function calcular(bill, nPeople) {
    bill = document.getElementById('bill').value
    nPeople = document.getElementById('numberPeoples').value

    if (nPeople == 0) {
        const cant = document.getElementById('cant')
        cant.classList.toggle('active')
    } else {
        let custom = document.getElementById('customValue').value

        let calculo = bill / nPeople
    
        let calculo2 = (calculo / 100) * custom
        document.getElementById('tipAmount').innerHTML = `$${calculo2.toFixed(2)}`
    
        let calculoTotal = calculo + calculo2
        document.getElementById('total').innerHTML = `$${calculoTotal.toFixed(2)}`
    }
    
}

function reset() {
    document.getElementById('tipAmount').innerHTML = '$0.00'
    document.getElementById('total').innerHTML = '$0.00'
}