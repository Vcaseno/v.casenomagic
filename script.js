// Database containing 20 distinctly trackable numeric card identities
const baseCards = ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "C11", "C12", "C13", "C14", "C15", "C16", "C17", "C18", "C19", "C20"];
let activeDeck = [...baseCards];
let interactionStepCount = 0;

// Initialize layout structure grid
const gridNode = document.getElementById('deckGrid1');
activeDeck.forEach(cardCode => {
    let item = document.createElement('div');
    item.className = 'premium-holo-card';
    item.innerHTML = `<div class="holo-glare-overlay"></div><div class="inner-card-artwork">${cardCode}</div>`;
    gridNode.appendChild(item);
});

function goToPhase2() {
    // Play sound track upon gesture activation
    document.getElementById('bgMusic').play().catch(err => console.log("Audio pipeline buffered."));

    document.getElementById('phase1').classList.add('hidden');
    const mPhase = document.getElementById('phase2');
    mPhase.classList.remove('hidden');
    mPhase.classList.add('active');

    // Manga layout window holds scene visibility target
    setTimeout(() => {
        mPhase.classList.remove('active');
        mPhase.classList.add('hidden');
        renderMatrixAdjustmentPhase();
    }, 2500);
}

function renderMatrixAdjustmentPhase() {
    const p3Node = document.getElementById('phase3');
    p3Node.classList.remove('hidden');
    p3Node.classList.add('active');
    
    buildSelectionColumns();
}

function buildSelectionColumns() {
    const container = document.getElementById('matrixContainer');
    container.innerHTML = ""; // Clear active viewport elements
    
    // Group elements into 4 vertical arrays containing 5 items each
    let columns = [[], [], [], []];
    for (let i = 0; i < activeDeck.length; i++) {
        columns[i % 4].push(activeDeck[i]);
    }
    
    columns.forEach((colData, colIndex) => {
        let colDiv = document.createElement('div');
        colDiv.className = 'matrix-column';
        colDiv.onclick = () => handleColumnSelection(colIndex, columns);
        
        colData.forEach(card => {
            let cardWidget = document.createElement('div');
            cardWidget.className = 'premium-holo-card';
            cardWidget.style.height = '70px';
            cardWidget.innerHTML = `<div class="inner-card-artwork" style="font-size:1.5rem;">${card}</div>`;
            colDiv.appendChild(cardWidget);
        });
        container.appendChild(colDiv);
    });
}

function handleColumnSelection(selectedIdx, columnsArr) {
    interactionStepCount++;
    
    // Mathematical trace matrix reshuffle calculation algorithm: Place chosen column in middle sequence
    let reorderedDeck = [];
    // Shift target column to index 1 position out of array pool
    const targetCol = columnsArr[selectedIdx];
    columnsArr.splice(selectedIdx, 1);
    
    reorderedDeck = [...columnsArr[0], ...targetCol, ...columnsArr[1], ...columnsArr[2]];
    activeDeck = reorderedDeck;
    
    if (interactionStepCount < 3) {
        // Prompt for phase iteration alignment selection matrix tracking pass
        document.getElementById('instructionText').innerText = `Matrix Shift [Pass ${interactionStepCount + 1}]. Identify the new column area:`;
        buildSelectionColumns();
    } else {
        // Proceed directly into full procedural automation sequence duration window
        document.getElementById('phase3').classList.add('hidden');
        executeLongFormRitualAnimation();
    }
}

function executeLongFormRitualAnimation() {
    const p4Node = document.getElementById('phase4');
    p4Node.classList.remove('hidden');
    p4Node.classList.add('active');
    
    // Time sequence parameters extending the show out to hit multi-minute simulation targets
    setTimeout(() => {
        p4Node.classList.remove('active');
        p4Node.classList.add('hidden');
        renderFinalChibiRevealStage();
    }, 6000); // Tweak delay array variables here to scale execution timelines
}

function renderFinalChibiRevealStage() {
    document.getElementById('phase5').classList.remove('hidden');
    const wandNode = document.getElementById('magicWand');
    
    // Activate vector structural animation parameters loops
    wandNode.classList.add('wand-cast-loop');
    
    setTimeout(() => {
        wandNode.classList.remove('wand-cast-loop');
        
        // Pinpoint target index position from mathematical remainder registers array limit values
        const absoluteCalculatedResult = activeDeck[9]; 
        
        const cardDisplayBox = document.getElementById('predictedTargetCard');
        document.getElementById('finalArtNode').innerText = absoluteCalculatedResult;
        
        cardDisplayBox.classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('verificationBubble').classList.remove('hidden');
            document.getElementById('endActionPanel').classList.remove('hidden');
        }, 900);
        
    }, 4500);
}

function terminateShow() {
    // Graceful presentation exit handler routine injection hook
    alert("Thank you for watching the V.caseno Illusion Show!");
    location.reload();
}
