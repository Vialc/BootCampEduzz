import { Pool } from "pg";

const connectionString = 'postgres://boxjdwtn:ddPXlZWcscpTfReUoTQbTSBvOToaGh1a@kesavan.db.elephantsql.com/boxjdwtn'

const db = new Pool({ connectionString })

export default db