# Что из API сейчас работает:

1. GET /api/contest/
{
    "status": 200,
    "body": [
        {
            "_id": "54ff52a1b84c92f0a7000001",
            "hash": "some_hash",
            "user": "test_user",
            "__v": 0,
            "dateDue": "2015-03-10T20:44:56.448Z",
            "dateFrom": "2015-03-10T20:44:56.448Z"
        },
        {
            "_id": "54ff55ac75f0a415a8000001",
            "hash": "some_hash",
            "user": "test_user",
            "dateDue": "2015-03-10T20:44:56.451Z",
            "dateFrom": "2015-03-10T20:44:56.451Z"
        }
    ]
}


2. GET /api/contest/:user
{
    "status": 200,
    "body": [
        {
            "_id": "54ff52a1b84c92f0a7000001",
            "hash": "some_hash",
            "user": "test_user",
            "__v": 0,
            "dateDue": "2015-03-10T20:45:36.211Z",
            "dateFrom": "2015-03-10T20:45:36.211Z"
        },
        {
            "_id": "54ff55ac75f0a415a8000001",
            "hash": "some_hash",
            "user": "test_user",
            "dateDue": "2015-03-10T20:45:36.211Z",
            "dateFrom": "2015-03-10T20:45:36.211Z"
        }
    ]
}

//TODO: Толком не передаются параметры. Разобраться с bodyParser!
3. POST /api/contest
Request: {
    title: String,
    dateFrom: { type: Date, default: Date.now },
    dateDue: { type: Date, default: Date.now }
}

Response {
    "contest": "post"
}