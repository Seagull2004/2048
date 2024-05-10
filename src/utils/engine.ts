export const VOID_MATRIX = [
  // [4, 4, 8, 16],
  // [256, 128, 64, 32],
  // [512, 1024, 2048, 4096],
  // [4096*16, 4096*8, 4096*4, 4096*2]

  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

export const belong = (m: number[][], n: number) =>
{
  for (let i = 0; i < m.length; i++)
    for (let j = 0; j < m[0].length; j++)
      if (m[i][j] == n)
        return true

  return false
}

export const generateRandomTile = (m: number[][]) =>
{ 
  let gameOver = false
  let listOfFreeTile: number[][] = []
  for (let i = 0; i < m.length; i++) 
    for (let j = 0; j < m.length; j++) 
      if (m[i][j] == 0)
        listOfFreeTile.push([i, j])

  
  if (listOfFreeTile.length == 0)
  {
    return {
      newMatrix: m,
      gameOver: gameOver
    }
  }  

  const randomCoords = listOfFreeTile[Math.floor(Math.random() * listOfFreeTile.length)]
  const value: number = (Math.random() < 0.75 ? 2 : 4)
  
  m[randomCoords[0]][randomCoords[1]] = value

  // actually the number of free tile is 0 'cause we have just insert a new tile
  if (listOfFreeTile.length == 1 && isGameOver(m))
  { 
    gameOver = true
  }

  return {
    newMatrix: m,
    gameOver: gameOver
  }
}

export const isGameOver = (m: number[][]) =>
{
  let mAlias = deepCopy(m)

  return isSameMatrix(mAlias, moveAllDown(mAlias).movedMatrix) && isSameMatrix(mAlias, moveAllUp(mAlias).movedMatrix) && isSameMatrix(mAlias, moveAllRight(mAlias).movedMatrix) && isSameMatrix(mAlias, moveAllLeft(mAlias).movedMatrix)
}

// e.g. [4, 5, 0, 0] -> 2
export const firstSlotFree = (array: number[]) =>
{
  let k = 0
  while (k < array.length)
  {
    if (array[k] == 0)
    {
      return k
    }
    k++
  }
  return -1
}

// e.g. [0, 2, 16, 0] -> [2, 16, 0, 0]
export const alignLeft = (array: number[]) =>
{
  let arrayAlias = deepCopyArray(array)
  let i = firstSlotFree(arrayAlias)
  if (i < 0) 
  {
    return arrayAlias  
  }
  let k = 0
  while (k < arrayAlias.length)
  {
    if (i < k && arrayAlias[k] != 0)
    {
      arrayAlias[i] = arrayAlias[k]
      arrayAlias[k] = 0
    }
    k++

    i = firstSlotFree(arrayAlias)
  }
  return arrayAlias;
}

// e.g. [4, 2, 2, 0] -> [4, 4, 0, 0]
export const alignLeftAndJoin = (array: number[]) =>
{
  let arrayAlias = deepCopyArray(array)
  let k = 0
  let scoreOfLine = 0

  while (k + 1 < arrayAlias.length)
  {
    arrayAlias = alignLeft(arrayAlias)
    if (arrayAlias[k] == arrayAlias[k + 1] && arrayAlias[k] != 0)
    {
      arrayAlias[k] *= 2
      scoreOfLine += arrayAlias[k]
      arrayAlias[k + 1] = 0
    }
    k++
  }

  return {
    joinedArray: arrayAlias,
    scoreOfLine: scoreOfLine
  }
}

export const getRow = (i: number, m: number[][]) =>
{
  // return m[i]
  // EHH???? VUOI DIRMI CHE LEGGERE UNA RIGA MODIFICA LO STATO DI UNA MATRICE??? MA CHE CAVOLO
  let mAlias = deepCopy(m)
  return mAlias[i]
}

export const setRow = (i: number, array: number[], matrix: number[][]) =>
{
  let newMatrix = deepCopy(matrix)
  newMatrix[i] = array
  return newMatrix
}

export const getCol = (j: number, m: number[][]) =>
{
  let col: number[] = []

  for (let i = 0; i < m.length; i++) 
  {
    col.push(m[i][j])
  }
  return col
}

export const setCol = (j: number, array: number[], matrix: number[][]) =>
{
  let newMatrix = deepCopy(matrix)

  for (let i = 0; i < newMatrix.length; i++) 
  {
    newMatrix[i][j] = array[i]
  }

  return newMatrix
}

export const moveAllRight = (m: number[][]) =>
{
  let movedMatrix: number[][] = deepCopy(VOID_MATRIX)
  let scoreMove = 0 

  for (let i = 0; i < m.length; i++) 
  {
    let row = getRow(i, m)
    let result = alignLeftAndJoin(row.reverse())
    row = result.joinedArray.reverse()
    scoreMove += result.scoreOfLine
    movedMatrix = setRow(i, row, movedMatrix);
  }
  
  return {
    movedMatrix: movedMatrix,
    scoreMove: scoreMove
  }
}

export const moveAllLeft = (m: number[][]) =>
{
  let movedMatrix: number[][] = deepCopy(VOID_MATRIX)
  let scoreMove = 0

  for (let i = 0; i < m.length; i++) 
  {
    let row = getRow(i, m)
    let result = alignLeftAndJoin(row)
    row = result.joinedArray
    scoreMove += result.scoreOfLine
    movedMatrix = setRow(i, result.joinedArray, movedMatrix);
  }
  
  return {
    movedMatrix: movedMatrix,
    scoreMove: scoreMove,
  }
}

export const moveAllUp = (m: number[][]) =>
{
  let movedMatrix: number[][] = deepCopy(VOID_MATRIX)
  let scoreMove = 0

  for (let j = 0; j < movedMatrix.length; j++) 
  {
    let col = getCol(j, m)
    let result = alignLeftAndJoin(col)
    col = result.joinedArray
    scoreMove += result.scoreOfLine
    movedMatrix = setCol(j, col, movedMatrix);
  }
  
  return {
    movedMatrix: movedMatrix,
    scoreMove: scoreMove
  }
}

export const moveAllDown = (m: number[][]) =>
{
  let movedMatrix: number[][] = deepCopy(VOID_MATRIX)
  let scoreMove = 0

  for (let j = 0; j < m.length; j++) 
  {
    let col = getCol(j, m)
    let result = alignLeftAndJoin(col.reverse())
    col = result.joinedArray.reverse()
    scoreMove += result.scoreOfLine
    movedMatrix = setCol(j, col, movedMatrix);
  }

  return {
    movedMatrix: movedMatrix,
    scoreMove: scoreMove
  }
}

export const resetGame = () =>
{
  let resetMatrix: number[][] = deepCopy(VOID_MATRIX)

  return generateRandomTile(resetMatrix)
}

export const deepCopy = (m: number[][]) =>
{
  let copied: number[][] = []

  for (let i = 0; i < m.length; i++) 
  {
    // every push is a new row in the matrix
    copied.push([])
  }

  for (let i = 0; i < m.length; i++) 
    for (let j = 0; j < m.length; j++) 
      // every push on a row is a column in the matrix
      copied[i].push(m[i][j])

  return copied
}

export const deepCopyArray = (a: number[]) =>
{
  let copied: number[] = []

  for (let i = 0; i < a.length; i++) 
  {
    copied.push(a[i])
  }

  return copied
}

export const isSameMatrix = (m1: number[][], m2: number[][]) =>
{
  for (let i = 0; i < m1.length; i++) 
    for (let j = 0; j < m1[0].length; j++) 
      if (m1[i][j] != m2[i][j])
        return false

  return true
}