const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    value: DataTypes.INTEGER,
  }, {
   // Assim, informa para o sequelize procurar um nome exatamente igual ao model => freezeTableName: true
   // Assim, informa para o sequelize que o nome da tabela será totalmente diferente a esperada => inftableName: 'OutraCoisa'
  });

  return ;
};

module.exports = Product;