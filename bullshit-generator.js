// note: WIP

const oPieces = {
    completeThought: ['do what it does bro', 'vibe with the flow bruh', 'whether we go or not, the river keeps flowin, nahmean?','just wherever the wind sails it', '#blessed','the universe is no joke bro','se la chillness','chill and let chilled'],
    hastags: [],
    intro: [],
    noun: [],
    outro: [],
    verb: [],
}

const arrPlans = [`${fRandomPiece('completeThought')}`]

const iLastPlanUsed = -1;

function fRandomPiece(sPieceGroup) {
    let arrsRelevant = [];

    if (sPieceGroup === 'plans') {
        if (iLastPlanUsed !== -1) arrPlans.splice(iLastPlanUsed, iLastPlanUsed + 1);
        arrsRelevant = arrPlans;
    } else {
        arrsRelevant = oPieces[sPieceGroup];
    }

    const iRandom = Math.floor(Math.random() * arrsRelevant.length)

    if (sPieceGroup === 'plans') {
        iLastPlanUsed = iRandom
    }

    return arrsRelevant[iRandom]
}

// TODO: financial advice bullshit generator, pluggable bullshit pieces
function main() {
    console.log(oPieces)
    //let sRandomPlan = fRandomPiece('plans');
    //let sResult = '';

    // if plan calls plan it should draw without replacement to prevent infinite loop
    //console.log(sRandomPlan)
}

main()
