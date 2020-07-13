const bankState = {};
const stateState = {};
const districtState = {};
const branchState = {};

window.appState = {};
function filterListByBank(bank) { 
    return ifscData.filter(function (item) { 
        return item.BANK === bank; 
    }) 
}


function filterListByBankAndState(bank, state) { 
    return ifscData.filter(function (item) { 
        return item.BANK === bank && item.STATE === state; 
    }) 
}


function filterListByBankAndStateAndDistrict(bank, state,district) {
    return ifscData.filter(function (item) {
        return item.BANK === bank && item.STATE === state && item.DISTRICT === district;
    })
}


function filterListByBankAndStateAndDistrictAndBranch(bank, state, district,branch) {
    return ifscData.filter(function (item) {
        return item.BANK === bank && item.STATE === state && item.DISTRICT === district && item.BRANCH === branch;
    })
}


function calculateUniqueBankList() {
    const fullBankList = ifscData.map(function (item) { return item.BANK; })
    const bankSet = new Set(fullBankList)
    bankState.uniqueBankList = Array.from(bankSet);
}


function calculateUniqueStateList() {
    stateData = filterListByBank(appState.bank);
    const fullStateList = stateData.map(function (item) { return item.STATE; })
    const StateSet = new Set(fullStateList)
    stateState.uniqueStateList = Array.from(StateSet);
}

function calculateUniqueDistrictList() {
    stateData = filterListByBankAndState(appState.bank, appState.state)
    const fullDistrictList = stateData.map(function (item) { return item.DISTRICT; })
    const DistrictSet = new Set(fullDistrictList)
    districtState.uniqueDistrictList = Array.from(DistrictSet);
}


function calculateUniqueBranchList() {
    stateData = filterListByBankAndStateAndDistrict(appState.bank, appState.state, appState.district)
    const fullBranchList = stateData.map(function (item) { return item.BRANCH; })
    const BranchSet = new Set(fullBranchList)
    branchState.uniqueBranchList = Array.from(BranchSet);
}


document.getElementById('bank').addEventListener('click', function () {
    const bankSelect = document.getElementById('bank')
    calculateUniqueBankList();
    bankState.uniqueBankList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        bankSelect.add(newOption)
    })
},{once: true});

 
document.getElementById('state').addEventListener('click', function () {
    const stateSelect = document.getElementById('state')
    calculateUniqueStateList()
    stateState.uniqueStateList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        stateSelect.add(newOption)
    })
},{ once: true });
 
document.getElementById('district').addEventListener('click', function () {
    const districtSelect = document.getElementById('district')
    calculateUniqueDistrictList();
    districtState.uniqueDistrictList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        districtSelect.add(newOption)
    })
},{ once: true });


document.getElementById('branch').addEventListener('click', function () {
    const branchSelect = document.getElementById('branch')
    calculateUniqueBranchList();
    branchState.uniqueBranchList.forEach(function (element) {
        const newOption = document.createElement("OPTION");
        newOption.text = element;
        newOption.value = element;
        branchSelect.add(newOption)
    })
},{ once: true });

document.getElementById('ifscFind').addEventListener('click', function () {    
    const ifsc = filterListByBankAndStateAndDistrictAndBranch(appState.bank, appState.state, appState.district, appState.branch);
    const codeifsc = ifsc.map(function (item) { return item.IFSC; })    
    document.getElementById('ifscDisplay').innerHTML = '<label><strong>IFSC code is </strong></label>'+codeifsc;
})

function handleBankID(event){
    appState.bank = event.target.value;
}
function handleStateID(event){
    appState.state = event.target.value;
}
function handleDistrictID(event){
    appState.district = event.target.value;
}
function handleBranchID(event){
    appState.branch = event.target.value;
}

document.getElementById('bank').onchange = handleBankID
document.getElementById('state').onchange = handleStateID
document.getElementById('district').onchange = handleDistrictID
document.getElementById('branch').onchange = handleBranchID