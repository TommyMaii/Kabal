    //Controller
    function makeShowDeckCards(){
        firstTime = false;
        updateView();
    }

    function swapCards(element){
        let findClass = document.querySelector('#'+element.id); 
        let images = findClass.children.length;
        let filteredId = element.id.replace(/[a-z]/gi,"");
        
        if(isFirstClick === false && deckStructure[filteredId].topRow === true){
            usedId = filteredId;
            tempValue = deckStructure[usedId];
            isFirstClick = true;
        }   
        else if(isFirstClick === false && cardStructure[element.id][findClass.children.length -1].topRow === false){
            isFirstClick = true;
            cardStructure.currentCard.row = element.id;
            cardStructure.currentCard.index = images - 1; 
        }   
        else if(isFirstClick === true){
        cardStructure.swappedCard.row = element.id;
        cardStructure.swappedCard.index = images - 1;

        let swappedCard = {...cardStructure[cardStructure.swappedCard.row][cardStructure.swappedCard.index]};
        let currentCard = tempValue ? tempValue : {...cardStructure[cardStructure.currentCard.row][cardStructure.currentCard.index]};

        if((isLegalSuits(currentCard, swappedCard)) === false)return;

        cardStructure[cardStructure.swappedCard.row].push(currentCard);
        
        removeCardAfterSwap(currentCard, cardStructure.currentCard.row, cardStructure.currentCard.index);

        tempValue = null;
        isFirstClick = false;
        updateView();
    }
    }

    function isLegalSuits(firstChosenCard, secondChosenCard){
        if(colors[firstChosenCard.cardSuits] === colors[secondChosenCard.cardSuits]){ 
            let firstChosenCard = {};
            let secondChosenCard = {};
            isFirstClick = false;
            return false;
        }
    }

    function removeCardAfterSwap(firstChosenCard, firstChosenCardRow, firstChosenCardIndex){
        if(firstChosenCard.topRow == false){
                cardStructure[firstChosenCardRow].splice(firstChosenCardIndex, 1);
            }else {
                firstChosenCard.topRow = false;
                deckStructure.splice(usedId,1);
            }
    }

    function getCurrentCardBottomRow(rowIndex, columnIndex){
        let row = 'row'+(rowIndex);
        let cV = cardValue[cardStructure[row][columnIndex].cardValues];
        let cS = cardSuit[cardStructure[row][columnIndex].cardSuits];
        return currentGeneratedCard = cV + '_of_' + cS;
    }
    function getCurrentCardDeck(index){
        let cVs = cardValue[deckStructure[index].cardValues];
        let cSs = cardSuit[deckStructure[index].cardSuits];
        return currentGeneratedCard = cVs + '_of_' + cSs;
    }