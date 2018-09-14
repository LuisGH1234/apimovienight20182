
//BeginOf: PersonalPlayList
exports.listPersonalPlaylistJSON = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `SELECT * FROM PersonalPlayList WHERE IDUser = ${id}`;
        connection.query(sql, (error, ListPersonalPlayList) => {
            if(error){
                response.json(error);
            }
            response.json(ListPersonalPlayList);
        });
    });
};

exports.deletePersonalPlaylist = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql2 = ` DELETE FROM PersonalPlayList WHERE IDPersonalPlayList = ${id}`;
        //var sql1 = `DELETE FROM PersonalMediaContent WHERE IDPersonalPlayList = ${id};`;
        connection.query(sql2, (error, result) => {
            if(error) throw error;
            console.log(`Number of records deleted: ${result.affectedRows}`);
            response.json({ message: 'PersonalPlayList: Successfully Deleted' });
        });
    });
};

exports.savePersonalPlayList = (request, response) => {
    const data = request.query;
    if (!data){
        response.json({message: 'ADD PersonalPlayList: invalid Query'});
    }
    request.getConnection((error, connection) => {
        if(error) throw error;
        connection.query('INSERT INTO PersonalPlayList set ?', [data], (error, customer) => {
            if(error) throw error;
            response.json({message: 'ADD PersonalPlayList: Successfully Inserted'});
        });
    });
};
//EndOf: PersonalPlayList

//BeginOf: PersonalMediaContent
exports.listPersonalMediaContentJSON = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `SELECT * FROM PersonalMediaContent WHERE IDPersonalPlayList = ${id}`;
        connection.query(sql, (error, PersonalMediaContents) => {
            if(error){
                response.json(error);
            }
            response.json(PersonalMediaContents);
        });
    });
};

exports.deletePersonalMediaContent = (request, response) => {
    const { id } = request.query;
    request.getConnection((error, connection) => {
        if(error) throw error;
        var sql = `DELETE FROM PersonalMediaContent WHERE IDPersonalContent = ${id}`;
        connection.query(sql, (error, result) => {
            if(error) throw error;
            console.log(`Number of records deleted: ${result.affectedRows}`);
            response.json({ message: 'PersonalMediaContent: Successfully Deleted' });
        });
    });
};

exports.savePersonalMediContent = (request, response) => {
    const data = request.query;
    if (!data){
        response.json({message: 'ADD PersonalMediContent: invalid Query'});
    }
    request.getConnection((error, connection) => {
        if(error) throw error;
        connection.query('INSERT INTO PersonalMediaContent set ?', [data], (error, customer) => {
            if(error) throw error;
            response.json({message: 'ADD PersonalMediContent: Successfully Inserted'});
        });
    });
};
//EndOf: PersonalMediaContent
