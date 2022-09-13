const tableName = 'users';

export const createTable = async db => {
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
      user_id integer PRIMARY KEY,
      first_name text NOT NULL,
      last_name text NOT NULL,
      email text NOT NULL UNIQUE,
      avatar text NOT NULL
    );`;

  await db.executeSql(query);
};

export const getUserItems = async db => {
  try {
    let userItems;
    const results = await db.executeSql(
      `SELECT user_id as user_id,first_name,last_name,avatar,email FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        userItems.push(result.rows.item(index));
      }
    });
    return userItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get userItems!');
  }
};

export const getUser = async (db, id) => {
  try {
    const result = await db.executeSql(
      `SELECT * FROM ${tableName} where user_id = ${id}`,
    );
    if (result.length) {
      return result[0].rows.item(0);
    }
  } catch (error) {
    console.error(error);
    throw Error('Failed to get userItems!');
  }
};

export const saveUserItems = async (db, userItems) => {
  try {
    const insertQuery =
      `INSERT OR REPLACE INTO ${tableName}(user_id, first_name, last_name, email, avatar) values` +
      userItems
        .map(
          i =>
            `(${i.id}, '${i.first_name}', '${i.last_name}', '${i.email}', '${i.avatar}')`,
        )
        .join(',');

    return db.executeSql(insertQuery);
  } catch (error) {
    console.error(error);
    throw Error('Failed tosaveUserItems!');
  }
};
