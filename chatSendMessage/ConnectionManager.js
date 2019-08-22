module.exports = function() {
    this.dbConnections = [];

    this.dbConnections["main"] = {
        host: "main.c2guhaphxbdj.us-east-1.rds.amazonaws.com",
        port: "3306",
        user: "admin",
        password: process.env.Password_rdsMain,
        database: "Main"
    };
};