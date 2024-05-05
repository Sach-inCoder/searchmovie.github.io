const movies =
[
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        "title":"Naruto",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMjZmYjJlYzUtZWM1My00YmUxLTlkNjEtYmYwMzIzOWE5YmRiXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_SX300.jpg",
        "title":"Rebel Moon: Part One - A Child of Fire",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTUzM2I3NDEtMjNhYi00NTQ0LThmZDItZTMyMzM2MjJmZGRjXkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_SX300.jpg",
        "title":"Leave the World Behind",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNDM4NTk0NjktZDJhMi00MmFmLTliMzEtN2RkZDY2OTNiMDgzXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"Wonka",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNGViM2M4NmUtMmNkNy00MTQ5LTk5MDYtNmNhODAzODkwOTJlXkEyXkFqcGdeQXVyMTY1NDY4NTIw._V1_SX300.jpg",
        "title":"Animal",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTkxM2FiYjctYjliYy00NjY2LWFmOTEtMWZiYWRjNjA4MGYxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"Aquaman and the Lost Kingdom",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYzZiMTVmNmQtMzIzOC00OGM5LWJjNGEtZTQ5YzJlMTQ2YTk3XkEyXkFqcGdeQXVyMTE2OTM0MDQ1._V1_SX300.jpg",
        "title":"Maestro",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BM2NmMDQ1ZWEtNDU4OS00MGIxLWEyMGMtMTM2YmFkYzNhYmMxXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
        "title":"Saltburn",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNGIyYWMzNjktNDE3MC00YWQyLWEyMmEtN2ZmNzZhZDk3NGJlXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"Poor Things",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "title":"Barbie",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BZWQzZWFmOWMtODM4Ni00YjYwLWI4ZTYtOTkwZmYyMzFkN2E2XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        "title":"The Family Plan",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYmQ2MmY2MmYtMjUzOS00Y2MyLWE4YmQtYzIzYWQ4OTdmMGU0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"Anyone But You",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTZkNWQyMDEtMmRhNi00Nzc5LWFhNjQtMWRiOTllYmEzOWE5XkEyXkFqcGdeQXVyMTMwNzYxMTUx._V1_SX300.jpg",
        "title":"Godzilla Minus One",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BOTZmMmY2MzctMjU2Yy00YjJlLTk1NjAtY2U4MmMxOWZkZWY4XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        "title":"The Hunger Games: The Ballad of Songbirds & Snakes",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNTMyNmNlYjItNmM2Yi00YWViLTk5Y2MtNGI4YWEyOWU4N2U2XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
        "title":"The Iron Claw",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYWQ4MTAwZTgtMGVhNC00ZmI1LTkzYzYtMzE1MzJhZjk3OGM1XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_SX300.jpg",
        "title":"Chicken Run: Dawn of the Nugget",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
        "title":"Oppenheimer",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BY2M0ZGEwMGQtNzMxOC00OTU2LWExZmUtMTA5N2RhMDZlY2JiXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        "title":"Indiana Jones and the Dial of Destiny",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTc1ODM5YjQtMmQzNS00Y2FkLWJhNTgtYTE5ZDY0NjQyNmRjXkEyXkFqcGdeQXVyMTY3ODE5NTY1._V1_SX300.jpg",
        "title":"May December",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BOGZhOGJjZTAtOTJmYS00ZTk2LTgxYWEtNjM3ZmUxMjY2NWFiXkEyXkFqcGdeQXVyNjU2NTI4MjE@._V1_SX300.jpg",
        "title":"Thanksgiving",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTU3MWYzNzEtZmYwNS00ZjhjLTljMTQtYzk5NTk1ZTJkYTZjXkEyXkFqcGdeQXVyMTM1NjM2ODg1._V1_SX300.jpg",
        "title":"Candy Cane Lane",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMzQ0NDRhNmItYzllYS00NDdlLTk0YTctZDQ5YmFkYjdkNDcyXkEyXkFqcGdeQXVyNTYwMzA0MTM@._V1_SX300.jpg",
        "title":"Dunki",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BZWIzNDAxMTktMDMzZS00ZjJmLTlhNjYtOGUxYmZlYzVmOGE4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        "title":"Napoleon",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BN2ZjNDg4ZGQtZTY4NC00MWVmLTk4ZmEtYjc1NWRkZWRjMWUwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg",
        "title":"Silent Night",
        "year":2023
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BZjZkNThjNTMtOGU0Ni00ZDliLThmNGUtZmMxNWQ3YzAxZTQ1XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"The Boy and the Heron",
        "year":2023
    }
];

const Anime=[
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BM2YwYTkwNjItNGQzNy00MWE1LWE1M2ItOTMzOGI1OWQyYjA0XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
        "title":"One Piece"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYzUxYTI0MWQtNDBjMi00MzEyLWE2NTktODgzYTBkZTdlYmIxXkEyXkFqcGdeQXVyMjQ4OTA4MDU@._V1_SX300.jpg",
        "title":"Shingeki no Kyojin"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjdlZWY1MzctOGUxNS00YmViLWFiOTMtNmQxMmZhMjQ5MjhhXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
        "title":"My Happy Marriage"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BNjRiNmNjMmMtN2U2Yi00ODgxLTk3OTMtMmI1MTI1NjYyZTEzXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "title":"Death Note"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BZjJlNzE5YzEtYzQwYS00NTBjLTk5YzAtYzUwOWQyM2E3OGI2XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_SX300.jpg",
        "title":"One Punch Man"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYjY4MDU2YjMtNzY1MC00ODg1LWIwMzYtMWE5YTA3YTI4ZjMxXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "title":"Sword Art Online"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BODA5MTA5ZmMtYmFhNC00MmU4LTgyODgtNDMzMDBlNDBkNTRiXkEyXkFqcGdeQXVyODMyNTM0MjM@._V1_SX300.jpg",
        "title":"Zom 100: Bucket List of the Dead"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BOGZmYjdjN2UtNjAwZi00YmEyLWFhNTEtNjM1OTc5ODg0MGEyXkEyXkFqcGdeQXVyMTA1NjQyNjkw._V1_SX300.jpg",
        "title":"Boku no Hero Academia"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BMTQ0MGI4NTgtZTlkNy00YTU5LThjM2ItNDczMGFlZWY2ZWM3XkEyXkFqcGdeQXVyMTM3NDc1OTM2._V1_SX300.jpg",
        "title":"CyberPunk: Edgerunners"
    },
    {
        "Poster":"https://m.media-amazon.com/images/M/MV5BYTIxNjk3YjItYmYzMC00ZTdmLTk0NGUtZmNlZTA0NWFkZDMwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
        "title":"Kimetsu no Yaiba"
    }
]

const Popularlist=[
    {
        "Poster":"https://wallpapercave.com/wp/wp11250571.jpg",
        "title":"Dragon Ball Super: Super Hero"
    },
    {
        "Poster":"https://www.tvovermind.com/wp-content/uploads/2018/11/Naruto-Shipp%C5%ABden.jpg",
        "title":"Naruto: Shippuden"
    },
    {
        "Poster":"https://wallpaperaccess.com/full/4611891.jpg",
        "title":"One piece"
    },
    {
        "Poster":"https://somoskudasai.com/wp-content/uploads/2021/07/portada_jujutsu-kaisen-83.jpg",
        "title":"Jujutsu Kaisen"
    },
    {
        "Poster":"https://mlpnk72yciwc.i.optimole.com/cqhiHLc.IIZS~2ef73/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2022/12/dsnewss03-1.jpg",
        "title":"Demon Slayer: Kimetsu No Yaiba - To the Swordsmith Village"
    }
]


export {movies,Anime,Popularlist}