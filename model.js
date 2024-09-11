let currentCard;
let swappedCard;
let playedCards = [];
let randomType;
let firstTime = true;

let cardStructure = [
    {row1: [
        {
            cardSuit: "Clubs",
            cardValue: 'Ace',
            shown: false,
        },
        {
            cardSuit: "Clubs2",
            cardValue: 'King',
            shown: false,
        },
        {
            cardSuit: "Clubs2",
            cardValue: 'Queen',
            shown: true,
        },
    ] },
    {row2: [
        {
            cardSuit: "Blank",
            cardValue: 'PlayingCard'
        },
        {
            cardSuit: "Blank",
            cardValue: 'PlayingCard'
        },
        {
            cardSuit: "Blank",
            cardValue: 'PlayingCard'
        },
        {
            cardSuit: "Blank",
            cardValue: 'PlayingCard'
        },
    ] },
    {row3: [
        {
            cardSuit: "Clubs2",
            cardValue: 'Jack',
            shown: true,
        },
    ] },
    {row4: [
        {
            cardSuit: "Clubs",
            cardValue: '10',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '9',
            shown: true,
        },
    ] },
    {row5: [
        {
            cardSuit: "Clubs",
            cardValue: '8',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '7',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '6',
            shown: true,
        },
    ] },
    {row6: [
        {
            cardSuit: "Clubs",
            cardValue: '5',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '4',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '3',
            shown: false,
        },
        {
            cardSuit: "Clubs",
            cardValue: '2',
            shown: true,
        },
    ] },
    {row7: [
        {
            cardSuit: "Hearts",
            cardValue: 'Ace',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: 'King',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: 'Queen',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: 'Jack',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '10',
            shown: true,
        },
    ] },
    {row8: [
        {
            cardSuit: "Hearts",
            cardValue: '9',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '8',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '7',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '6',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '5',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '4',
            shown: true,
        },
    ] },
    {row9: [
        {
            cardSuit: "Hearts",
            cardValue: '3',
            shown: false,
        },
        {
            cardSuit: "Hearts",
            cardValue: '2',
            shown: false,
        },
        {
            cardSuit: "Diamonds",
            cardValue: 'Ace',
            shown: false,
        },
        {
            cardSuit: "Diamonds",
            cardValue: 'King',
            shown: false,
        },
        {
            cardSuit: "Diamonds",
            cardValue: 'Queen',
            shown: false,
        },
        {
            cardSuit: "Diamonds",
            cardValue: 'Jack',
            shown: false,
        },
        {
            cardSuit: "Diamonds",
            cardValue: '10',
            shown: true,
        },
    ] },
]