// Load functions with page
$(document).ready(function() {
    $.getJSON("songs.json", function(songs) {
        serialize(songs);
        tablize(songs, "tablize");
        // $('#btn').on('click', filter(songs));
        $('#btn').on('click', function() {
            filter(songs);
            return false;
        })
    })
})

// Part 2
function serialize(songs) {
    var songString = JSON.stringify(songs);
    document.getElementById("serialize").innerHTML = songString;
}

// Part 3
function tablize(songs, id) {
    document.getElementById(id).innerHTML = "";
    for (var i = 0; i < songs.length; i++) {
        var row = `<tr>
                        <td>${songs[i].title}</td>
                        <td>${songs[i].artist}</td>
                        <td>${songs[i].genre}</td>
                        <td>${songs[i].year}</td>
                    </tr>`
        document.getElementById(id).innerHTML += row;
    }
}

// Part 4
function filter(songs) {
    var genre = document.getElementById("select").value;
    var filtered = songs.filter(function(target) {
        return target.genre.includes(genre);
    })
    tablize(filtered, "filtered")
}