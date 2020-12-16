const createInitialState = (m, n) => {
	const desk = [];
	while(desk.length < n){
		const deskLine = []
		while(deskLine.length < m){
			deskLine.push(Math.round(Math.random()))
		}
		desk.push(deskLine)

	}
	return desk
} 

const setNewState = (desk) => {
	let newDesk = [...desk]
	for(let i = 0; i < desk.length; i++){	
		let newDeskLine = newDesk[i]	
		for(let j = 0; j < newDeskLine.length; j++){
			//takes all neighbours in array
			let neighbours = [
				j>0? newDeskLine[j-1] : 0,
				j<newDeskLine.length-1? newDeskLine[j+1] : 0,
				i>0? newDesk[i-1][j] : 0,
				i>0&&j>0?newDesk[i-1][j-1] : 0,
				i>0&&j < newDeskLine.length-1?desk[i-1][j+1] : 0,
				i<newDeskLine.length-1? desk[i+1][j] : 0,
				j>0&&i< newDeskLine.length-1? desk[i+1][j-1] : 0,
				j<newDeskLine.length-1&&i<newDeskLine.length-1? desk[i+1][j+1] : 0
			]
			// find alive neighbours
			let aliveNeighbours = neighbours.filter((item) => item === 1)
			// create new state
			if(newDeskLine[j] === 0){
				if(aliveNeighbours.length === 3) newDeskLine[j] = 1
			} else {
				if(aliveNeighbours.length < 2 || aliveNeighbours.length > 3) newDeskLine[j] = 0
			}
			
		}
	}
	return newDesk
}



let initialState = createInitialState(process.argv[2], process.argv[3])

console.log(initialState)
setInterval(()=>{
	initialState = setNewState(initialState)
	console.log(initialState)
}, 1000)
