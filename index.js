const knex = require('knex')

const kont = knex({
  client: 'mysql2',
  connection: {
    host: '',
    user: '',
    password: '' ,
    database: '',
  },
});

const main = async () => {
  // select * from mst_bengkel
  const tampung = kont('mst_bengkel')
  const bengkelId = undefined

  if (bengkelId !== undefined) {
    tampung.where('bengkel_id', bengkelId)
  }

  console.log(await tampung)
}

main()
