// card contains rank (S:suits, D:diamonds, H:heart, C:clover) and number
function createDeck() {
    let deck = [];
    let suits = ["S", "H", "C", "D"]
    for (let suit of suits) {
        for (let i = 1; i < 14; i++) {
            let rank = i;
            if (i == 1) {
                rank = "A"
            };
            if (i == 11) {
                rank = "J"
            }
            if (i == 12) {
                rank = "Q"
            }
            if (i == 13) {
                rank = "K"
            }
            deck.push({
                "suit": suit,
                "rank": rank
            })
        }
    };
    return deck
}

function shuffleDeck(deck){

}

deck=createDeck()
console.log(deck)


//no need to return deck in shuffle deck as deck is a reference variable