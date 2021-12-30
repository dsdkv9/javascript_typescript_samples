// if you got 2 covid vaccine you are allowed in the mall
// if one vaccine produce your RTPCR test rport
// no vaccine -> not allowed

let isFullyVaccinated = false;
let isSingleVaccine = true;
let rtpcrTestReportStatus = true;

let isChildWithParent = true;

if (isFullyVaccinated) {
    console.log(`Allowed in the mall as person is adult. isFullyVaccinated: ${isFullyVaccinated}`);
} else if (isSingleVaccine && rtpcrTestReportStatus) {
    console.log(`Allowed in the mall. isSingleVaccine: ${isSingleVaccine} && rtpcrTestReportStatus: ${rtpcrTestReportStatus}`);
} else {
    console.log(`Not allowed. isFullyVaccinated: ${isFullyVaccinated}, isSingleVaccine: ${isSingleVaccine} && 
    rtpcrTestReportStatus: ${rtpcrTestReportStatus}`);
}

function oneLinerConditionCheck(a, b) {
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
    result = (a !== null && a !== undefined) ? a : b;
    console.log(`result: ${result}`);
}

oneLinerConditionCheck(null, 100);
oneLinerConditionCheck(undefined, 100);
oneLinerConditionCheck(20, 100);