import SearchSongs from "./SearchSongs"
import SongsList from "./SongsList"
import SortSongs from "./SortSongs"

const Center = ({ props }) => {
	return (
		<div className="main__centerblock centerblock">
			<SearchSongs />
			<h2 className="centerblock__h2">Треки</h2>
			<SortSongs />
			<SongsList />
		</div>
	)
}

export default Center
