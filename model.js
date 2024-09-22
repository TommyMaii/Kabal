let currentGeneratedCard = '';
const playedCards = [];
let firstTime = true;
const cardSuit = {0: "Spades", 1: "Clubs", 2: "Diamonds", 3:"Hearts"}
const cardValue = {12:'King', 11:'Queen', 10:'Jack', 9:'10', 8:'9', 7:'8', 6:'7', 5:'6', 4:'5', 3:'4', 2:'3', 1:'2', 0:'Ace'}
const cardBack = 'cardbackred'
const allCardsList = []
const S1List = [];
const S2List = [];
const S3List = [];
const S4List = [];
let runs = 28;
let colors = {0: 'black', 1: 'black', 2: 'red', 3: 'red'};
let isFirstClick = false;
const deckCardList = []
let tempValue;
let usedId;


//Tested different methods
let cardStructure = {
    currentCard : {

    },
    swappedCard : {

    },
    // Example Structure
    // "row1": [
        // {
        //     cardSuits: "Clubs2",
        //     cardValues: 'Jack',
        //     shown: true,
        // },
    // ],
}

let deckStructure = {
//     [{
//             cardSuits: "Clubs2",
//             cardValues: 'Jack',
//             shown: true,
//    },
//     {
//             cardSuits: "Clubs2",
//             cardValues: 'Jack',
//             shown: true,
//    }]
}

let firstDeck = {
//     [{
//             cardSuits: "Clubs2",
//             cardValues: 'Jack',
//             shown: true,
//    }]

}



