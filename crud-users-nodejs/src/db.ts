import { Pool } from "pg";

const connectionString = 'postgres://xxxxxxxxxxxxxxx@kesavan.db.elephantsql.com/boxjdwtn'

const db = new Pool({ connectionString })

export default db