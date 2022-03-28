function defineSuit(card) {
    const suit = card.slice(-1)
    switch (suit) {
        case '♣': return 'clubs'
        case '♦': return 'diamonds'
        case '♥': return 'hearts'
        case '♠': return 'spades'
    }
}
