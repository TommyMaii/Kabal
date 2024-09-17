let currentCard;
let swappedCard;
let playedCards = [];
let firstTime = true;
const cardSuit = {0: "Spades", 1: "Clubs", 2: "Diamonds", 3:"Hearts"}
const cardValue = {12:'King', 11:'Queen', 10:'Jack', 9:'10', 8:'9', 7:'8', 6:'7', 5:'6', 4:'5', 3:'4', 2:'3', 1:'2', 0:'Ace'}
const cardBack = 'cardbackred'
let allCardsList = []
let runs = 28;


//Tested different methods
let cardStructure = {
    // Example Structure
    // "row1": [
        // {
        //     cardSuit: "Clubs2",
        //     cardValue: 'Jack',
        //     shown: true,
        // },
    // ],
}

let deckStructure = {
//     [{
//             cardSuit: "Clubs2",
//             cardValue: 'Jack',
//             shown: true,
//    }]
//     [{
//             cardSuit: "Clubs2",
//             cardValue: 'Jack',
//             shown: true,
//    }]
}