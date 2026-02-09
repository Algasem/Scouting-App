// Switch between Scouting, Pit and History tabs
function switchMainTab(tabName) {
    // Only select the main tabs (first .tabs container that's a direct child of body)
    const mainTabsContainer = document.querySelector('body > .tabs');
    const mainTabs = mainTabsContainer.querySelectorAll('.tab');
    
    // Select only main content sections (scouting, pit, history)
    const mainContents = document.querySelectorAll('body > .tab-content');
    
    mainTabs.forEach(tab => tab.classList.remove('active'));
    mainContents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Switch between Pit, Auto, Teleop, and Engame tabs
function switchTab(tabName) {
    const tabs = document.querySelectorAll('#scouting .tabs .tab');
    const contents = document.querySelectorAll('#scouting .tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Increment fuel buttons 
function increment(buttonID){ 
    const value = document.getElementById(buttonID);

    if(buttonID === 'humanPlayerFuelScored') {
        const shots = parseInt(document.getElementById('humanPlayerFuelShot').textContent);
        if (parseInt(value.textContent) + 1 > shots) {
            return;
        }
    }
    value.textContent = parseInt(value.textContent) + 1;        
}

// Decrement fuel buttons 
function decrement(buttonID){ 
    const value = document.getElementById(buttonID);

    if(value.textContent > 0){
        value.textContent = parseInt(value.textContent) -1;

        if (buttonID === 'humanPlayerFuelShot') {
            const scored = document.getElementById('humanPlayerFuelScored');
            if (parseInt(scored.textContent) > parseInt(value.textContent)) {
                scored.textContent = value.textContent;
            }
        }
    }
}

// Increment fuel buttons by 5 at once
function increment5(buttonID) {
    const value = document.getElementById(buttonID);

    if (buttonID === 'humanPlayerFuelScored') {
        const shots = parseInt(document.getElementById('humanPlayerFuelShot').textContent);
        const newValue = parseInt(value.textContent) + 5;
        if (newValue > shots) {
            value.textContent = shots; // Cap at max shots
            return;
        }
    }

    value.textContent = parseInt(value.textContent) + 5;
}

// Decrement fuel buttons by 5 at once
function decrement5(buttonID) {
    const value = document.getElementById(buttonID);

    if(value.textContent - 5 >= 0) {
        value.textContent = parseInt(value.textContent) -5;
    }
    else{
        value.textContent = parseInt('0');
    }

    if (buttonID === 'humanPlayerFuelShot') {
        const scored = document.getElementById('humanPlayerFuelScored');
        if (parseInt(scored.textContent) > parseInt(value.textContent)) {
            scored.textContent = value.textContent;
        }
    }
}

function resetForm(){
    
    // Reset all +- buttons
    const arrayOfButtons = [];

    arrayOfButtons[0] = document.getElementById('endgameFuelScored');
    arrayOfButtons[1] = document.getElementById('endgameFuelMissed');
    arrayOfButtons[2] = document.getElementById('teleopFuelMissed');
    arrayOfButtons[3] = document.getElementById('teleopFuelScored');
    arrayOfButtons[4] = document.getElementById('autoFuelMissed');
    arrayOfButtons[5] = document.getElementById('autoFuelScored');
    arrayOfButtons[6] = document.getElementById('teleopFouls');
    arrayOfButtons[7] = document.getElementById('teleopCycles');

    for(let i = 0; i < arrayOfButtons.length; i++){
        arrayOfButtons[i].textContent = '0';
    }

    // Reset all checkboxes
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    allCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    })

    const allRadios = document.querySelectorAll('input[type="radio"]');

    allRadios.forEach(option => {
        option.checked = false;
    })

    // Reset all text fields
    const allText = document.querySelectorAll('input[type="text"], input[type="number"], textarea');

    allText.forEach(text => {
        text.value = '';
    })

    // Reset all drop down menu's
    var allDropdowns = document.getElementsByTagName('select');
    
    for (var i = 0; i < allDropdowns.length; i++){
        allDropdowns[i].selectedIndex = 0;
    }            
}

function generateMatchCSV(){
    const data = collectMatchData();

    // TELEOP ACTIVE
    const teleopActiveRoleArr = [
        data.teleop.activeRole.funnel ? "Funnel" : null,
        data.teleop.activeRole.scoring ? "Scoring" : null,
        data.teleop.activeRole.feedHumanStation ? "Feed Human Station" : null
    ];
    
    let teleopActiveRole = "";
    
    for(let i = 0; i < teleopActiveRoleArr.length; i++){
        if(teleopActiveRoleArr[i] != null){
            teleopActiveRole += teleopActiveRoleArr[i] + ",";
        }
    }

    // Remove trailing comma if it exists
    if(teleopActiveRole.endsWith(",")){
        teleopActiveRole = teleopActiveRole.slice(0, -1);
    }
    
    // TELEOP INACTIVE
    const teleopInactiveRoleArr = [
        data.teleop.inactiveRole.limitingBalls ? "Limiting Balls" : null,
        data.teleop.inactiveRole.funnel ? "Funnel" : null,
        data.teleop.inactiveRole.feedHumanStation ? "Feed Human Station" : null,
        data.teleop.inactiveRole.blocking ? "Blocking" : null,
        data.teleop.inactiveRole.refillHopper ? "Refill Hopper" : null
    ];

    let teleopInactiveRole = "";
    
    for(let i = 0; i < teleopInactiveRoleArr.length; i++){
        if(teleopInactiveRoleArr[i] != null){
            teleopInactiveRole += teleopInactiveRoleArr[i] + ",";
        }
    }

    // Remove trailing comma if it exists
    if(teleopInactiveRole.endsWith(",")){
        teleopInactiveRole = teleopInactiveRole.slice(0, -1);
    }
    
    // TELEOP TRANSITION
    const teleopTransitionRoleArr = [
        data.teleop.transitionRole.limitingBalls ? "Limiting Balls" : null,
        data.teleop.transitionRole.scoring ? "Scoring" : null,
        data.teleop.transitionRole.feedHumanStation ? "Feed Human Station" : null,
        data.teleop.transitionRole.blocking ? "Blocking" : null,
        data.teleop.transitionRole.funnel ? "Funnel" : null,
        data.teleop.transitionRole.refillHopper ? "Refill Hopper" : null
    ];

    let teleopTransitionRole = "";
    
    for(let i = 0; i < teleopTransitionRoleArr.length; i++){
        if(teleopTransitionRoleArr[i] != null){
            teleopTransitionRole += teleopTransitionRoleArr[i] + ",";
        }
    }

    // Remove trailing comma if it exists
    if(teleopTransitionRole.endsWith(",")){
        teleopTransitionRole = teleopTransitionRole.slice(0, -1);
    }

    let traversalType = "";
    if(data.teleop.bumpTraversal){
        traversalType += "Bump,";
    }
    else if(data.teleop.trenchTraversal){
        traversalType += "Trench";
    }
    else if(data.teleop.bothTraversal){
        traversalType += "Both";
    }

    const values = [

        // General  
        data.timestamp,
        data.matchNumber,
        data.teamNumber,
        data.scoutName,

        // Auto Scouting
        data.auto.climbLevel,
        data.auto.climbSpeed,
        data.auto.fuelScored,
        data.auto.fuelMissed,
        data.auto.ballsCollectedToOurSide,

        // Teleop Scouting
        data.teleop.fuelScored,
        data.teleop.fuelMissed,
        data.teleop.traversalTimeSec,
        traversalType,
        teleopActiveRole,
        teleopInactiveRole,
        teleopTransitionRole,
        data.teleop.fouls,
        data.teleop.cycles,
        data.teleop.collaborationScore,

        // Endgame Scouting
        data.endgame.climbLevel,
        data.endgame.climbSpeed,
        data.endgame.fuelScored,
        data.endgame.fuelMissed,
        data.endgame.disconnect,
        data.endgame.notes,
    ]

    for(let i = 0; i < values.length; i++){
        values[i] = '"' + values[i] + '"';
    }

    return values.join(',');
}

function generatePitCSV(){
    const pitData = collectPitData();
    
    const featuresArr = [
        pitData.features.vision ? "Vision" : null,
        pitData.features.adjustableScoring ? "Adjustable Scoring" : null
    ];
    
    let features = "";
    
    for(let i = 0; i < featuresArr.length; i++){
        if(featuresArr[i] != null){
            features += featuresArr[i] + ",";
        }
    }

    // Remove trailing comma if it exists
    if (features.endsWith(",")) {
        features = features.slice(0, -1);
    }

    const intakeTypeArr = [
        pitData.intakeType.overTheBumper ? "Over The Bumper" : null,
        pitData.intakeType.inPerimeter ? "In Perimeter" : null,
        pitData.intakeType.stationIntake ? "Station Intake" : null
    ];
    
    let intakeType = "";
    
    for(let i = 0; i < intakeTypeArr.length; i++){
        if(intakeTypeArr[i] != null){
            intakeType += intakeTypeArr[i] + ",";
        }
    }

    // Remove trailing comma if it exists
    if(intakeType.endsWith(",")){
        intakeType = intakeType.slice(0, -1);
    }

    const values = [
        // Pit Scouting
        pitData.climbLevel,
        pitData.heightInches,
        pitData.weightLbs,
        intakeType,
        pitData.driveMechanism,
        pitData.strategy,
        features,
        pitData.hopperType,
        pitData.hopperCapacity,
        pitData.driveExperience,
        pitData.estimatedCycles,
        pitData.buildQuality,
        pitData.outsidePerimeter,
        pitData.breakdowns,
        pitData.notes,
    ]

    for(let i = 0; i < values.length; i++){
        values[i] = '"' + values[i] + '"';
    }

    return values.join(',');
}

function collectMatchData(){

    const data = {
        timestamp: new Date().toISOString(),

        // Match info
        matchNumber: document.getElementById('matchNumber').value,
        teamNumber: document.getElementById('teamNumber').value,
        scoutName: document.getElementById('scoutName').value,

        auto: {
            climbLevel: document.getElementById('autoClimbLevel').value,
            climbSpeed: document.getElementById('autoClimbSpeed').value,

            fuelScored: parseInt(document.getElementById('autoFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('autoFuelMissed').textContent),

            ballsCollectedToOurSide: document.getElementById('autoBallsCollected').checked,
        },

        teleop: {
            fuelScored: parseInt(document.getElementById('teleopFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('teleopFuelMissed').textContent),

            traversalTimeSec: document.getElementById('teleopTraversalTime').value,

            bumpTraversal: document.getElementById('Bump').checked ? "Yes" : "No",
            trenchTraversal: document.getElementById('Trench').checked ? "Yes" : "No",
            bothTraversal: document.getElementById('Both').checked ? "Yes" : "No",

            activeRole: {
                funnel: document.getElementById('activeRoleFunnel').checked,
                scoring: document.getElementById('activeRoleScoring').checked,
                feedHumanStation: document.getElementById('activeRoleFeed').checked
            },

            inactiveRole: {
                limitingBalls: document.getElementById('inactiveRoleLimit').checked,
                funnel: document.getElementById('inactiveRoleFunnel').checked,
                feedHumanStation: document.getElementById('inactiveRoleFeed').checked,
                blocking: document.getElementById('inactiveRoleBlock').checked,
                refillHopper: document.getElementById('inactiveRoleRefill').checked
            },

            transitionRole: {
                limitingBalls: document.getElementById('transitionRoleLimit').checked,
                scoring: document.getElementById('transitionRoleScoring').checked,
                feedHumanStation: document.getElementById('transitionRoleFeed').checked,
                blocking: document.getElementById('transitionRoleBlock').checked,
                funnel: document.getElementById('transitionRoleFunnel').checked,
                refillHopper: document.getElementById('transitionRoleRefill').checked
            },

            fouls: parseInt(document.getElementById('teleopFouls').textContent),
            cycles: parseInt(document.getElementById('teleopCycles').textContent),

            collaborationScore: document.getElementById('teleopCollaboration').value,
        },

        endgame: {
            climbLevel: document.getElementById('endgameClimbLevel').value,
            climbSpeed: document.getElementById('endgameClimbSpeed').value,

            fuelScored: parseInt(document.getElementById('endgameFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('endgameFuelMissed').textContent),
            
            disconnect: document.querySelector('input[name="disconnect"]:checked')?.value || "",           
            notes: document.getElementById('endgameNotes').value,
        }
    }
    return data;
}

function collectPitData(){
    const pitData = {
        climbLevel: document.getElementById('pitClimbLevel').value,
        heightInches: document.getElementById('pitHeight').value,
        weightLbs: document.getElementById('pitWeight').value,
        intakeType: {
            overTheBumper: document.getElementById('otbIntake').checked,
            inPerimeter: document.getElementById('perimeterIntake').checked,
            stationIntake: document.getElementById('stationIntake').checked
        },
        driveMechanism: document.getElementById('pitDriveMechanism').value,
        strategy: document.getElementById('pitStrategy').value,

        features: {
            vision: document.getElementById('pitVision').checked,
            adjustableScoring: document.getElementById('pitAdjustable').checked
        },
        hopperType: document.getElementById('pitHopperType').value,
        hopperCapacity: document.getElementById('pitHopperCapacity').value,
        driveExperience: document.getElementById('pitDriveExperience').value,
        estimatedCycles: document.getElementById('pitEstimatedCycles').value,
        buildQuality: document.getElementById('pitBuildQuality').value,
        outsidePerimeter: document.querySelector('input[name="Outside Perimeter"]:checked')?.value || "",             
        breakdowns: document.getElementById('pitBreakdowns').value,
        notes: document.getElementById('pitNotes').value
    }

    return pitData;
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob(["\uFEFF", csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    // Clean up
    URL.revokeObjectURL(url);
}

let count = Number(localStorage.getItem("MatchCount")) || 0;

function saveMatch() {
    const csv = generateMatchCSV();
    downloadCSV(csv, new Date().toISOString() + ".csv");

    localStorage.setItem("Match" + count, csv);
    count++;

    localStorage.setItem("MatchCount", count);

    for (let i = 0; i < count; i++) {
        console.log(localStorage.getItem("Match" + i));
    }
}

function savePit(){
    downloadCSV(generatePitCSV(), new Date().toISOString() + ".csv");
    console.log("Generated pit download");
}

function generateQRMatch(){
    const csvMatchContent = generateMatchCSV();

    var qrcode = new QRCode("qr-code", {
        text: csvMatchContent,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })

    console.log("Generated match QR Code with content:", csvMatchContent);

}

function generateQRPit(){
    const csvPitContent = generatePitCSV();

    var qrcode = new QRCode("qr-code-pit", {
        text: csvPitContent,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    })

    console.log("Generated Pit QR Code with content:", csvPitContent);
}