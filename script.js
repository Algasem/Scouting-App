

// Switch between Scouting and History tabs
function switchMainTab(tabName) {
    const tabs = document.querySelectorAll('.tabs > .tab');
    const contents = document.querySelectorAll('body > .tab-content');
    
    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById(tabName).classList.add('active');
    
    if (tabName === 'history') {
        updateHistoryDisplay();
    }
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
    value.textContent = parseInt(value.textContent) + 1;        
}  

// Decrement fuel buttons 
function decrement(buttonID){ 
    const value = document.getElementById(buttonID);

    if(value.textContent > 0){
        value.textContent = parseInt(value.textContent) -1;
    }
}

// Increment fuel buttons by 5 at once
function increment5(buttonID) {
    const value = document.getElementById(buttonID);
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
}

// const APP = { 
//     data: [],
//     init() {
//         APP.addListeners()
//     }
//     addListeners() {
//         const form = document.querySelector();
//         form.addEventListener();
//     }
// }

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

function generateCSV(){
    const data = collectData();

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
        teleopActiveRole = teleopActiveRole.slice(0, -1);
    }

    const values = [

        // General  
        data.timestamp,
        data.matchNumber,
        data.teamNumber,
        data.scoutName,

        // Pit Scouting
        data.pit.climbLevel,
        data.pit.heightInches,
        data.pit.weightLbs,
        data.pit.intakeType,
        data.pit.driveMechanism,
        data.pit.strategy,
        data.pit.features.vision,
        data.pit.features.adjustableScoring,
        data.pit.hopperCapacity,
        data.pit.driveExperience,
        data.pit.estimatedCycles,
        data.pit.conversionPercent,
        data.pit.launchRate,
        data.pit.buildQuality,
        data.pit.outsidePerimeter,
        data.pit.breakdowns,
        data.pit.humanPlayerNotes,
        data.pit.notes,

        // Auto Scouting
        data.auto.climbLevel,
        data.auto.climbSpeed,
        data.auto.fuelScored,
        data.auto.fuelMissed,
        data.auto.ballsCollectedToOurSide,
        data.auto.notes,

        // Teleop Scouting
        data.teleop.fuelScored,
        data.teleop.fuelMissed,
        data.teleop.traversalTimeSec,
        teleopActiveRole,
        teleopInactiveRole,
        data.teleop.transitionRole,
        data.teleop.fouls,
        data.teleop.cycles,
        data.teleop.collaborationScore,
        data.teleop.notes,

        // Endgame Scouting
        data.endgame.climbLevel,
        data.endgame.climbSpeed,
        data.endgame.fuelScored,
        data.endgame.fuelMissed,
        data.endgame.notes,
        data.endgame.extraNotes
    ]

    for(let i = 0; i < values.length; i++){
        values[i] = '"' + values[i] + '"';
    }

    return values.join(',');
}

function collectData(){

    const data = {
        timestamp: new Date().toISOString(),

        // Match info
        matchNumber: document.getElementById('matchNumber').value,
        teamNumber: document.getElementById('teamNumber').value,
        scoutName: document.getElementById('scoutName').value,

        pit: {
            climbLevel: document.getElementById('pitClimbLevel').value,
            heightInches: document.getElementById('pitHeight').value,
            weightLbs: document.getElementById('pitWeight').value,
            intakeType: document.getElementById('pitIntake').value,
            driveMechanism: document.getElementById('pitDriveMechanism').value,
            strategy: document.getElementById('pitStrategy').value,

            features: {
                vision: document.getElementById('pitVision').checked,
                adjustableScoring: document.getElementById('pitAdjustable').checked
            },

            hopperCapacity: document.getElementById('pitHopperCapacity').value,
            driveExperience: document.getElementById('pitDriveExperience').value,
            estimatedCycles: document.getElementById('pitEstimatedCycles').value,
            conversionPercent: document.getElementById('pitConversionPercent').value,
            launchRate: document.getElementById('pitLaunchRate').value,
            buildQuality: document.getElementById('pitDurability').value,
            outsidePerimeter: document.getElementById('pitOutsidePerimeter').value,
            breakdowns: document.getElementById('pitBreakdowns').value,
            humanPlayerNotes: document.getElementById('pitHumanPlayer').value,
            notes: document.getElementById('pitNotes').value
        },

        auto: {
            climbLevel: document.getElementById('autoClimbLevel').value,
            climbSpeed: document.getElementById('autoClimbSpeed').value,

            fuelScored: parseInt(document.getElementById('autoFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('autoFuelMissed').textContent),

            ballsCollectedToOurSide: document.getElementById('autoBallsCollected').checked,
            notes: document.getElementById('autoNotes').value
        },

        teleop: {
            fuelScored: parseInt(document.getElementById('teleopFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('teleopFuelMissed').textContent),

            traversalTimeSec: document.getElementById('teleopTraversalTime').value,

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

            transitionRole: document.getElementById('teleopTransitionRole').value,

            fouls: parseInt(document.getElementById('teleopFouls').textContent),
            cycles: parseInt(document.getElementById('teleopCycles').textContent),

            collaborationScore: document.getElementById('teleopCollaboration').value,
            notes: document.getElementById('teleopNotes').value
        },

        endgame: {
            climbLevel: document.getElementById('endgameClimbLevel').value,
            climbSpeed: document.getElementById('endgameClimbSpeed').value,

            fuelScored: parseInt(document.getElementById('endgameFuelScored').textContent),
            fuelMissed: parseInt(document.getElementById('endgameFuelMissed').textContent),

            notes: document.getElementById('endgameNotes').value,
            extraNotes: document.getElementById('extraNotes').value
        }
    }
    return data;
}

function downloadCSV(csvContent, filename) {
    const blob = new Blob(["\uFEFF", csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();

    // Clean up
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function saveMatch(){
    downloadCSV(generateCSV(), new Date().toISOString() + ".csv");
}


function exportAllCSV(){

}

function clearHistory(){

}