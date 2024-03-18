// Base de datos local del celular
import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase('sessions.db')

// inicia la base de datos
export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                // consulta, crear tabla
                "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL, email TEXT NOT NULL, tokenId TEXT NOT NULL)",
                // valores de la consulta
                [],
                // si la consulta es exitosa 
                (_, result) => resolve(result),
                // si la consulta fallo
                (_, result) => reject(result)
            )
        })
    })
    return promise
}

// completa la bd
export const insertSession = ({ localId, email, idToken }) => {
    console.log(localId,email,idToken)
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                //insertar la tabla los valores del usuairio: localId, email, token                   
                "INSERT INTO sessionUser (localId,email,idToken) VALUES (localId,email,idToken)",
                [localId, email, idToken],
                (_, result) => resolve(result),
                (_, result) => reject(result)
            )
        })
    })
    return promise
}

// mantiene la session
export const fetchSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                // traer toda la tabla
                "",
                [],
                (_, result) => resolve(result),
                (_, result) => reject(result)
            )
        })
    })
    return promise
}

//cierra session
export const deleteSession = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                //eliminar toda la tabla de la session
                "",
                [],
                (_, result) => resolve(result),
                (_, result) => reject(result)
            )
        })
    })
    return promise
}