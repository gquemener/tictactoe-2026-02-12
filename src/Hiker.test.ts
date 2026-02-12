describe('Cell', () => {
  it('play player X', () => {
    // Arrange
    const cell: Cell = '';

    // Act
    const newCell: Cell = play('X', cell)

    // Assert
    expect(newCell).toBe('X')
  })

  it('play player O', () => {
    // Arrange
    const cell: Cell = '';

    // Act
    const newCell: Cell = play('O', cell)

    // Assert
    expect(newCell).toBe('O')
  })
  it('should not erase player cell', () => {
    // Arrange
    const cell: Cell = 'X';

    // Act
    const newCell: Cell = play('O', cell)

    // Assert
    expect(newCell).toBe('X')
  })
})

type Player = 'X' | 'O';
const play = (player: Player, cell: Cell): Cell => {
  if (cell === '') {
    return player;
  }
  return cell;
}

type Empty = ''

type Cell = Empty | Player
