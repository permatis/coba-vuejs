const fr = function(firebase){
    const db = firebase.initializeApp({
        databaseURL: "https://parabolic-hook-709.firebaseio.com"
    })

    return db.database()
}

export { fr }