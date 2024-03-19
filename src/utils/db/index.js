// Base de datos local del celular
import * as SQLite from 'expo-sqlite'
const db = SQLite.openDatabase('sessions2.db')

// inicia la base de datos

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                // consulta, crear tabla
                "CREATE TABLE IF NOT EXISTS sessionUser (localId TEXT NOT NULL,email TEXT NOT NULL,idToken TEXT NOT NULL)",
                // valores de la consulta
                [],
                // si la consulta es exitosa 
                (_, result) => {
                    //console.log("Insert successful:", result);
                    resolve(result);
                },
                (_, error) => {
                    console.error("Init error:", error);
                    reject(error);
                }
            )
        })
    })
    return promise
}


// completa la bd
export const insertSession = ({ localId, email, idToken }) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                //insertar la tabla los valores del usuairio: localId, email, token                   
                "INSERT INTO sessionUser(localId, email, idToken) VALUES (?, ?, ?)",
                [localId, email, idToken],
                (_, result) => {
                    //console.log("Insert successful:", result);
                    resolve(result);
                },
                (_, error) => {
                    console.error("Insert error:", error);
                    reject(error);
                }
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
                "SELECT * FROM sessionUser",
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
                "DELETE FROM sessionUser",
                [],
                (_, result) => resolve(result),
                (_, result) => reject(result)
            )
        })
    })
    return promise
}