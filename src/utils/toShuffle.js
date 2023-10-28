export const toShuffle = (arr) => {
	return [...arr].map((_, i, arrCopy) => {
		let rand = i + Math.floor(Math.random() * (arrCopy.length - i))
		;[arrCopy[rand], arrCopy[i]] = [arrCopy[i], arrCopy[rand]]
		return arrCopy[i]
	})
}
