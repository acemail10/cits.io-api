export const addPropertyHelper = ({ secret_key, name, address }) => {
  return `
    INSERT into properties (secret_key, name, address)
    VALUES ('${secret_key}','${name.replace(/'/g, "''")}','${address.replace(/'/g, "''")}')
    RETURNING id, secret_key, name, address
  `;
};

export const getPropertyByNameHelper = ({ name }) => {
  return `
    SELECT *
    FROM properties
    WHERE name='${name.replace(/'/g, "''")}'
  `;
};

export const getPropertyByIDHelper = ({ id }) => {
  return `
    SELECT *
    FROM properties
    WHERE id='${id}'
  `;
};

export const editPropertyHelper = ({ id, name, address }) => {
  return `
    UPDATE properties
      SET name = '${name.replace(/'/g, "''")}',
          address = '${address.replace(/'/g, "''")}'
    WHERE id='${id}'
  `;
};

export const editSecretHelper = ({ id, secret_key }) => {
  return `
    UPDATE properties
      SET secret_key = '${secret_key}'
    WHERE id='${id}'
  `;
};

export const deletePropertyHelper = ({ propertyID }) => {
  return `
    DELETE FROM properties
    WHERE id = '${propertyID}'
  `;
};
