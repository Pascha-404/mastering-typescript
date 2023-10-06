interface Song {
	name: string;
	artist: string;
	length: number;
}

interface Video {
	name: string;
	creator: string;
	length: number;
}

class Playlist<T> {
	public queue: T[] = [];
	add(media: T) {
		this.queue.push(media);
	}
}

const musicPlaylist = new Playlist<Song>();

musicPlaylist.add({ name: 'Loose yourself', artist: 'Eminem', length: 200 })

console.log(musicPlaylist)