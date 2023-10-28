import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateTableUsers1698355981436 } from "./migration/1698355981436-create-table-clients"
import { CreateTableTattooArtists1698353691519 } from "./migration/1698353691519-create-table-workers"
import { CreateTableAppointment1698353822932 } from "./migration/1698353822932-create-table-appointment"
import { CreateTableTattoGalery1698353804252 } from "./migration/1698353804252-create-table-products"
import { CreateTableExtras1698486153563 } from "./migration/1698486153563-create-table-portfolio"
import { Client } from "./models/Client"
import { Product } from "./models/Product"
import { Appointment } from "./models/Appointment"
import { Portfolio } from "./models/Portfolio"

export const AppDataSource = new DataSource({
type: "mysql",
host: "localhost",
port: 3306,
username: "root",
password: "password",
database: "tattoo_studio",
entities: [Client,
    Worker,
    Product,
    Appointment,
    Portfolio],
migrations: [CreateTableUsers1698355981436,
    CreateTableTattooArtists1698353691519,
    CreateTableAppointment1698353822932,
    CreateTableTattoGalery1698353804252,
    CreateTableExtras1698486153563],
synchronize: false,
logging: false,
})