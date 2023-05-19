<template>
  <div>
    <div v-for="(row, rowIndex) in gameBoard" :key="rowIndex" class="row">
      <div
        v-for="(cell, colIndex) in row"
        :key="colIndex"
        class="cell"
        :class="getCellStyle(cell)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gameBoard: Array(16)
        .fill()
        .map(() => Array(16).fill('empty')),
      playerPosition: {
        row: 7,
        col: 7
      }
    }
  },
  methods: {
    getCellStyle(cell) {
      return {
        obstacle: cell === 'obstacle',
        dyna: cell === 'dyna'
      }
    },
    moveDyna(direction) {
      const { row, col } = this.playerPosition
      let newRow = row
      let newCol = col

      // Update new position based on the direction
      switch (direction) {
        case 'up':
          newRow--
          break
        case 'down':
          newRow++
          break
        case 'left':
          newCol--
          break
        case 'right':
          newCol++
          break
      }

      // Check if the new position is valid (within the game board bounds and not an obstacle)
      if (
        newRow >= 0 &&
        newRow < this.gameBoard.length &&
        newCol >= 0 &&
        newCol < this.gameBoard[0].length &&
        this.gameBoard[newRow][newCol] !== 'obstacle'
      ) {
        // Update the game board and player position
        this.gameBoard[row][col] = 'empty'
        this.gameBoard[newRow][newCol] = 'dyna'
        this.playerPosition = { row: newRow, col: newCol }
      }
    },
    handleKeyPress(event) {
      // Handle keyboard arrow key presses to move Dyna
      switch (event.key) {
        case 'ArrowUp':
          this.moveDyna('up')
          break
        case 'ArrowDown':
          this.moveDyna('down')
          break
        case 'ArrowLeft':
          this.moveDyna('left')
          break
        case 'ArrowRight':
          this.moveDyna('right')
          break
      }
    },
    generateObstacles() {
      // Generate random obstacles on the game board
      for (let i = 0; i < 30; i++) {
        const randomRow = Math.floor(Math.random() * this.gameBoard.length)
        const randomCol = Math.floor(Math.random() * this.gameBoard[0].length)
        if (
          this.gameBoard[randomRow][randomCol] !== 'obstacle' &&
          (randomRow !== this.playerPosition.row || randomCol !== this.playerPosition.col)
        ) {
          this.gameBoard[randomRow][randomCol] = 'obstacle'
        }
      }
    }
  },
  mounted() {
    this.generateObstacles() // Generate obstacles when the component is mounted

    // Listen for keydown events to handle player movement
    window.addEventListener('keydown', this.handleKeyPress)
  },
  beforeUnmount() {
    // Cleanup event listener
    window.removeEventListener('keydown', this.handleKeyPress)
  }
}
</script>

<style>
.row {
  display: flex;
}

.cell {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  background-color: #f5f5f5;
}

.obstacle {
  background-color: #333;
}

.dyna {
  background-color: #00aaff;
}
</style>
