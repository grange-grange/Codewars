function validateBattlefield(field) {
  let checkSum = field
    .map(a => a.reduce((a, b) => a + b))
    .reduce((a, b) => a + b)
  if (checkSum !== 20) return false   

  // check straitness of ships, contacts with other ships
  // and find coordinates of all ships
  let allCoordinates = []  
  for (let rowInd = 0; rowInd < 10; rowInd++) {
    
    for (let cellInd = 0; cellInd < 10; cellInd++) {
      let cell = field[rowInd][cellInd]
      
      if (cell === 0) continue
      
      if (!checkCell(field, rowInd, cellInd)) return false
      
      allCoordinates.push([rowInd, cellInd])
    }
  
  }  
  
  // search coordinates of each ship and count ships by classes
  let battleships = 0
  let cruisers = 0
  let destroyers = 0
  let submarines = 0
  
  while (allCoordinates.length > 0) {  
    
    let shipCoords = searchShip(allCoordinates[0], allCoordinates)
    
    switch (shipCoords.length) {
        case 4: 
          battleships++
          break        
        case 3: 
          cruisers++
          break        
        case 2: 
          destroyers++
          break        
        default: 
          submarines++        
    }
    
    // delete coordinates of found ship from allCoordinates   
    for (let i = 0; i < shipCoords.length; i++) {
      allCoordinates = allCoordinates.filter(c => c.toString() !== shipCoords[i].toString())
    }
  }
  
  return battleships === 1 && cruisers === 2 && destroyers === 3 && submarines === 4
}

function checkCell(field, r, c) {
  // check that neighboring cells = 1    
  let topLeft = r !== 0 ? field[r - 1][c - 1] === 1 : false // we have to check first and last row because [c] of undefined doesn't exist
  let topRight = r !== 0 ? field[r - 1][c + 1] === 1 : false
  let bottomRight = r !== 9 ? field[r + 1][c + 1] === 1 : false
  let bottomLeft = r !== 9 ? field[r + 1][c - 1] === 1 : false  

  //check that there are no ships diagonally
  if (topLeft || topRight || bottomRight || bottomLeft) return false
  
  return true
}

function searchShip(coords, allCoordinates) {    
  let shipCoords = [coords]
  
  let coord1 = [coords[0] + 1, coords[1]]
  let coord2 = [coords[0], coords[1] + 1]  
  let checkCoord1 = allCoordinates.find((c, i) => c.toString() === coord1.toString())
  let checkCoord2 = allCoordinates.find((c, i) => c.toString() === coord2.toString())
             
  if (checkCoord1) {
    shipCoords.push(...searchShip(coord1, allCoordinates))
  } else if (checkCoord2) {      
    shipCoords.push(...searchShip(coord2, allCoordinates))
  }
  
  return shipCoords
}