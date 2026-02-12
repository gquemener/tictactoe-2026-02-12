describe('Cell', () => {
  it('play player X', () => {
    // Arrange
    const cell: Cell = {
      content: ''
    }

    // Act
    const newCell: Cell = play('X', cell)

    // Assert
    expect(newCell.content).toBe('X')
  })

  it('play player O', () => {
    // Arrange
    const cell: Cell = {
      content: ''
    }

    // Act
    const newCell: Cell = play('O', cell)

    // Assert
    expect(newCell.content).toBe('O')
  })
  it('should not erase player cell', () => {
    // Arrange
    const cell: Cell = {
      content: 'X'
    }

    // Act
    const newCell: Cell = play('O', cell)

    // Assert
    expect(newCell.content).toBe('X')
  })
})

type Player = 'X' | 'O';
const play = (player: Player, cell: Cell): Cell => {
  if (cell.content === '') {
    return {
      content: player
    };
  }
  return cell;
}

type EMPTY = ''

type Cell = {
  content: EMPTY | Player
}
