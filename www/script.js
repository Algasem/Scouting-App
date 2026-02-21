const USERNAME_KEY = "ScoutUsername_v1";

const teamData = {
    "188": "Blizzard",
    "610": "Crescent Coyotes",
    "771": "SWAT",
    "772": "Sabre Bytes Robotics",
    "781": "Kinetic Knights",
    "854": "Iron Bears",
    "865": "WARP7",
    "919": "PANTHERA TIGRIS",
    "1114": "Simbotics",
    "1229": "Tidal Shift",
    "1241": "THEORY6",
    "1285": "The Biggest Birds",
    "1305": "Ice Cubed",
    "1310": "Runnymede Robotics",
    "1325": "Inverse Paradox",
    "1334": "Red Devils",
    "1360": "Orbit Robotics",
    "2013": "Cybergnomes",
    "2056": "OP Robotics",
    "2198": "Paradigm Shift Robotics",
    "2200": "BCR Blackout",
    "2386": "Trojans",
    "2609": "BeaverworX",
    "2634": "The Gryphons",
    "2702": "Rebels",
    "2706": "Merge Robotics",
    "2708": "Lake Effect Robotics",
    "2852": "DM High Voltage",
    "2935": "NACI Robotics",
    "3161": "Tronic Titans",
    "3543": "C4 Robotics",
    "3560": "MechaWolves",
    "3683": "Team DAVE",
    "3739": "Oakbotics",
    "3756": "RamFerno",
    "4015": "Jags",
    "4039": "MakeShift Robotics",
    "4069": "Lo-Ellen Robotics",
    "4152": "Hoya Robotics",
    "4308": "ABSOLUTE ROBOTICS",
    "4476": "W.A.F.F.L.E.S.",
    "4617": "DAUN",
    "4678": "CyberCavs",
    "4688": "Saints Bot",
    "4907": "Thunderstamps",
    "4917": "Sir Lancerbot",
    "4920": "Belle River Boltheads",
    "4940": "Knight Vision",
    "4946": "The Alpha Dogs",
    "4951": "CDS Cyclones",
    "4976": "Revolt Robotics",
    "5024": "Raider Robotics",
    "5031": "Full Metal Mustangs",
    "5032": "The Falcons",
    "5036": "The Robo Devils",
    "5406": "Celt-X",
    "5408": "Kennedy Kinetics",
    "5409": "Chargers",
    "5596": "Wolverine Robotics",
    "5672": "First Nations-STEM",
    "5689": "CK Cyber Pack",
    "5719": "Pink Titans",
    "5870": "League of Logic",
    "5885": "Villanova WiredCats",
    "5912": "Copper Hawks",
    "6110": "Doc Botics",
    "6135": "Arctos",
    "6162": "Cap Alpaca 6162",
    "6397": "Romero Robotics",
    "6632": "Northview Robotics",
    "6725": "Westminster WildBOTS",
    "6854": "Viking Robotics",
    "6859": "Big Metal Lakers 6859- BML Robotics",
    "6864": "GryphTech Robotics",
    "6865": "Manitoulin Metal",
    "6875": "Amazon Warriors Robotics",
    "6975": "The Neil McNeil Brotherhood Bots",
    "6978": "QuickStrike Niagara",
    "6987": "Falcon Automation",
    "7022": "ACE Robotics",
    "7058": "StrathDroids",
    "7136": "Titanium Titans",
    "7200": "Banting Robotics",
    "7475": "WIRED 7475",
    "7476": "EOM Robotics 7476",
    "7480": "Machine Mavericks",
    "7520": "Team MineKee",
    "7558": "ALT-F4",
    "7603": "7603 VESPA ROBOTICS",
    "7623": "Morebotics",
    "7659": "HNMCS Robotics",
    "7712": "ACCN UMOJA",
    "7757": "Atomic Dishwashers",
    "7902": "Markham FireBirds",
    "8081": "UMEI Lightning Robotics",
    "8089": "Rockway Robotics",
    "8349": "Newbotics",
    "8729": "Sparkling H2O",
    "8731": "Wild WYRE",
    "8764": "Thunder Robotics",
    "8789": "The Lost Sockets",
    "8850": "Ed Bears",
    "8884": "Knight Owls",
    "9062": "Critical Circuits",
    "9098": "FireHawks",
    "9127": "EOM Robotics 9127",
    "9262": "Humberside Huskies",
    "9263": "ALD Lions",
    "9525": "NileTech",
    "9562": "Royal Robotics",
    "9569": "Milliken Mills Silver Knights",
    "9575": "Silver Robotics",
    "9580": "Grizzly Gears",
    "9589": "Arcade Robotics",
    "9592": "Blue’s Bolts n' Bots",
    "9659": "Vanier Vikings",
    "9782": "Wextech Titans",
    "9785": "Alectrona",
    "10015": "Bubbles",
    "10027": "Spontaneous Combustion",
    "10167": "Jeunes Sans Frontières",
    "10218": "No Signal",
    "10279": "The Erudites",
    "10464": "The Wash",
    "10514": "Mixed Métal",
    "10535": "Liberian Canadian Association of London",
    "10554": "Team VIPER",
    "10579": "BoschBotics",
    "10611": "Gemini Robotics",
    "10634": "The Last Gambit"
}

function getTeamName(teamNumber) {
    const name = teamData[String(teamNumber)];
    return name || 'Unknown Team';
}
    
function loadUsername() {
    const saved = localStorage.getItem(USERNAME_KEY);
    if (saved) {
        document.getElementById('userName').value = saved;
    }
}

function saveUsername() {
    const val = document.getElementById('userName').value.trim();
    if (val) {
        localStorage.setItem(USERNAME_KEY, val);
    } else {
        localStorage.removeItem(USERNAME_KEY);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadUsername();
    document.getElementById('userName').addEventListener('input', saveUsername);
});

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
        const missed = parseInt(document.getElementById('humanPlayerFuelMissed').textContent);
        if (parseInt(value.textContent) + 1 > missed) {
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

        if (buttonID === 'humanPlayerFuelMissed') {
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
        const missed = parseInt(document.getElementById('humanPlayerFuelMissed').textContent);
        const newValue = parseInt(value.textContent) + 5;
        if (newValue > missed) {
            value.textContent = missed; // Cap at max miss
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

    if (buttonID === 'humanPlayerFuelMissed') {
        const scored = document.getElementById('humanPlayerFuelScored');
        if (parseInt(scored.textContent) > parseInt(value.textContent)) {
            scored.textContent = value.textContent;
        }
    }
}

// Reset all fields in the form
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

// Generate the CSV array for a match
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
        traversalType = "Bump,";
    }
    else if(data.teleop.trenchTraversal){
        traversalType = "Trench";
    }
    else if(data.teleop.bothTraversal){
        traversalType = "Both";
    }

    let matchType = "";
    if(data.qualMatch){
        matchType = "Q";
    }
    else if(data.playoffMatch){
        matchType = "P";
    }

    let totalMatch = matchType + data.matchNumber;

    console.log(totalMatch);

    let autoClimbLevel = data.auto.climbLevel.substring(6);
    let endgameClimbLevel = "L"+data.endgame.climbLevel.substring(6);

    const values = [

        // General  
        data.teamNumber,
        data.event,
        totalMatch,
        data.driverStation,
        data.scoutName,

        // Auto Scouting
        data.auto.fuelScored,
        data.auto.fuelMissed,
        autoClimbLevel,
        "",
        // data.auto.ballsCollectedToOurSide,

        // Teleop Scouting
        data.teleop.fuelScored,
        data.teleop.fuelMissed,
        data.humanPlayer.fuelScored,
        data.humanPlayer.fuelMissed,
        teleopActiveRole,
        teleopInactiveRole,
        teleopTransitionRole,
        endgameClimbLevel,
        data.teleop.fouls,

        //traversalType,
        data.teleop.drivingScore,
        data.teleop.collaborationScore,
        data.endgame.disconnect,
        data.teleop.traversalTimeSec,
        data.endgame.climbSpeed,
        data.endgame.notes
    ]

    for(let i = 0; i < values.length; i++){
        values[i] = '"' + values[i] + '"';
    }

    return values.join(',');
}

// Generate the CSV array for a pit scouting
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

    const teamName = getTeamName(pitData.teamNumber);

    const values = [
        // Pit Scouting
        pitData.teamNumber,
        teamName,
        pitData.climbLevel,
        pitData.heightInches,
        intakeType,
        pitData.weightLbs,
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

// Create object of all match data points being collected
function collectMatchData(){

    const data = {
        // timestamp: new Date().toISOString(),

        // Match info
        event: document.getElementById('event').value,
        qualMatch: document.getElementById('playoff').checked ? "Yes" : "No",
        playoffMatch: document.getElementById('qualification').checked ? "Yes" : "No",
        matchNumber: document.getElementById('matchNumber').value,
        teamNumber: document.getElementById('teamNumber').value,
        scoutName: document.getElementById('userName').value,
        driverStation: document.getElementById('driverStation').value,

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
            drivingScore: document.getElementById('drivingScore').value,
        },

        endgame: {
            climbLevel: document.getElementById('endgameClimbLevel').value,
            climbSpeed: document.getElementById('endgameClimbSpeed').value,

            //fuelScored: parseInt(document.getElementById('endgameFuelScored').textContent),
            //fuelMissed: parseInt(document.getElementById('endgameFuelMissed').textContent),
            
            disconnect: document.querySelector('input[name="disconnect"]:checked')?.value || "",           
            notes: document.getElementById('endgameNotes').value,
        },

        humanPlayer: {
            fuelMissed: parseInt(document.getElementById('humanPlayerFuelMissed').textContent),
            fuelScored: parseInt(document.getElementById('humanPlayerFuelScored').textContent),
        
            fedRobot: document.getElementById('fedRobot').checked,
            fedHumanPlayers: document.getElementById('fedHumanPlayers').checked,
        
           HPnotes: document.getElementById('endgameNotes').value
        }
        
    }
    return data;
}

// Create object of all pit data points being collected
function collectPitData(){
    const pitData = {
        teamNumber: document.getElementById('teamPitNum').value,
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

    updateMatchCount();
    pastMatchesQR();
}

let pitCount = Number(localStorage.getItem("PitCount")) || 0;

function savePit(){
    const csv = generatePitCSV();
    downloadCSV(csv, new Date().toISOString() + ".csv");

    localStorage.setItem("Pit" + pitCount, csv);
    pitCount++;

    localStorage.setItem("PitCount", pitCount);

    updatePitCount();
    pastPitsQR();
}

function pastMatchesQR() {
    const matchContent = document.getElementById("matchContent");
    const qrWindow = document.getElementById("qrModal");

    // Clear previous content
    matchContent.innerHTML = "";

    let allMatches = [];

    // loop thru all matches
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i); 
        if (key.startsWith("Match") && !key.startsWith("MatchCount")) {
            const matchIndex = parseInt(key.replace("Match", ""), 10); // Extract index from key
            allMatches[matchIndex] = localStorage.getItem(key);
        }
    }

    for (let i = 0; i < allMatches.length; i++) {

        const matchButton = document.createElement("button");
        let tempArr = allMatches[i].split(',')
        
        for(let i = 0; i < tempArr.length; i++){
            tempArr[i] = tempArr[i].replaceAll('"', '');
        }

        matchButton.textContent = tempArr[0] + " -- " + tempArr[1];
        matchButton.className = "match-button";

        matchButton.onclick = () => {

            openQRModal(allMatches[i], "Match " + (i + 1) + " QR");

            console.log(`Generated QR Code for Match ` + i);
        };

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete Match";
        deleteButton.className = "match-button";

        deleteButton.onclick = () => {
            localStorage.removeItem("Match" + i);
        
            let currentCount = Number(localStorage.getItem("MatchCount")) || 0;
            localStorage.setItem("MatchCount", currentCount - 1);
        
            window.location.reload();
        };

        matchContent.appendChild(matchButton);
        qrWindow.appendChild(deleteButton);
    }
}

function pastPitsQR() {
    const pitContent = document.getElementById("pitContent");

    // Clear previous content
    pitContent.innerHTML = "";

    let allPits = [];

    // Loop through all keys in localStorage and filter for pits
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith("Pit")) {
            const pitIndex = parseInt(key.replace("Pit", ""), 10);
            allPits[pitIndex] = localStorage.getItem(key);
        }
    }

    for (let i = 0; i < allPits.length; i++) {

        let tempArr = allPits[i].split(',')
        
        for(let i = 0; i < tempArr.length; i++){
            tempArr[i] = tempArr[i].replaceAll('"', '');
        }

        const pitButton = document.createElement("button");
        pitButton.textContent = "Pit " + tempArr[0];
        pitButton.className = "match-button"; //use same style as match buttons

        pitButton.onclick = () => {

            openQRModal(allPits[i], "Pit " + (i + 1) + " QR");

            console.log(`Generated QR Code for Pit ` + i);
        };

        pitContent.appendChild(pitButton);
    }

    
}


function openQRModal(text, title) {
    const modal = document.getElementById("qrModal");
    const qrTitle = document.getElementById("qrModalTitle");
    const qrCodeDiv = document.getElementById("qrcode");

    qrTitle.textContent = title;
    qrCodeDiv.innerHTML = "";

    const size = Math.min(window.innerWidth * 0.8, 450);

    new QRCode(qrCodeDiv, {
        text: text,
        width: size,
        height: size,
        colorDark: "#da4416",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.L,
    });

    modal.classList.add("active");
}

function closeQRModal() {
    const modal = document.getElementById("qrModal");
    const qrCodeDiv = document.getElementById("qrcode");
    modal.classList.remove("active");
    qrCodeDiv.innerHTML = "";
}

window.onload = function () {
    updateMatchCount();
    updatePitCount();
    pastMatchesQR();
    pastPitsQR();
};

function updateMatchCount() {
    const count = Number(localStorage.getItem("MatchCount")) || 0;
    document.getElementById("matchHistoryCount").textContent = count;
}

function updatePitCount() {
    const count = Number(localStorage.getItem("PitCount")) || 0;
    document.getElementById("pitHistoryCount").textContent = count;
}

function clearHistory(){
    localStorage.clear();
    window.location.reload();
}