module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger",
    {
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
        //AllowNull is a flag that restricts a todo from being entered if it doesn't
        validate:{
          //len is a validation that checks that our todo is btwn 1 and 140 characters
          len:[1, 140]
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        //defaultValue is a flag that defaults a new todos complete value to false if it isn't supllied one
        defaultValue: false
      }
    });
    return Todo;
    //Anything that runs this function and returns
    //Make variable consistent with the filename

};
