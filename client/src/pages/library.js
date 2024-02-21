import Header from '../components/header.js'

export default function Library(){
    return (
        <>
            <Header />
            <h2> Home Page <i>Library</i> </h2>
            <p> Home Page <b>Library</b> Playlists </p>
            (<h3> Title Artist Album Duration</h3>)
            <table>
                <thead>
                    <tr>
                        <td>tabspace</td>
                        <th scope="col" class="Title">Title</th>
                        <th scope="col" class="Artist">Artist</th>
                        <th scope="col" class="Album">Album</th>
                        <th scope="col" class="Duration">Duration</th>
                    </tr>
                </thead>
                <tr>
                    <th scope='row'>1</th>
                    <th scope="row">Way Down We Go</th>
                    <th scope="row">Kaleo</th>
                    <th scope="row">Unknown</th>
                </tr>
                <tr>
                    <th scope='row'>2</th>
                </tr>
            </table>
        </>
    )
}