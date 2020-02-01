module.exports= {
	sum(amounts){
		let total=0
		for(i=0;i<amounts.length;i++)
		{
			total+=amounts[i]
		}
		return total
	},
	print(value){console.log(`Value ${value}`)
	}
}