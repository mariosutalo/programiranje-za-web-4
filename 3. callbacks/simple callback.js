function connectToDB(dbParams, dbConectionCallback) {

    setTimeout(() => {
        dbConectionCallback(false, 'user doesnt exist')
    }, 5000);

}

function initializeDBConnection() {
    connectToDB({
        url: 'localhost',
        port: 600,
        username: 'root',
        password: 'password',
        dbName: 'webshop'
    },
        (isConnected, error) => {
            if (isConnected) {
                console.log(`database connection success.`)
            } else {
                console.log(`failed to connect to db, error: ${error}`)
            }
        }
    )
}