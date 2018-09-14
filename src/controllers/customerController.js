const controller = {};

controller.list = (request, respond) => {
    request.getConnection((error, connection) => {
        connection.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                respond.json(err);
            }
            console.log(customers);
            /*render es para enviar la data a las vista*/
            respond.render('customers',{
                data:customers
            });
        });
    });
};

controller.listJSON = (request, respond) => {
    request.getConnection((error, connection) => {
        connection.query('SELECT * FROM customer', (err, customers) => {
            if(err){
                respond.json(err);
            }
            console.log(customers);
            /*json es solo para que la peticion retorne un json*/
            respond.json(customers);
        });
    });
};

controller.save = (request, respond) => {
    console.log(request.body);
    /*para sacar la data del form del body*/
    const data = request.body;
    if (!data){
        respond.redirect('/view');
    }
    request.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (error, customer) => {
            console.log(customer);
            respond.redirect('/view');
        });
        /* una ? por cada data */
    });
};

controller.saveJSON = (request, respond) => {
    console.log(request.query);
    /*para sacar la data del Url*/
    const data = request.query;
    if (!data){
        respond.redirect('/');
    }
    request.getConnection((err, conn) => {
        conn.query('INSERT INTO customer set ?', [data], (error, customer) => {
            console.log(customer);
            respond.redirect('/');
        });
        /* una ? por cada data */
    });
};


controller.delete = (request, respond) => {
    console.log(request.params);
    const { id } = request.params;
    /*request.params quiero su propiedad id */
    request.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            respond.redirect('/view');
        });
    });
};

controller.deleteJSON = (request, respond) => {
    console.log(request.query);
    /*request.params quiero su propiedad id */
    const { id } = request.query;
    request.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?', [id], (err, rows) => {
            respond.redirect('/');
        });
    });
};

controller.update = (request, response) => {
    console.log(request.params);
    //respond.send('hello world');
    const {id} = request.params;
    request.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer WHERE id = ?', [id], (err, customer) => {
            response.render('customer', {
               cust: customer[0]
            });
        });
    });
};

controller.updateJSON = (request, response) => {
    console.log(request.query);
    const { id } = request.query;
    request.getConnection((err, conn) => {
        conn.query('', [id], (err, rows) => {
           response.redirect('/');
        });
    });
};

module.exports.customerController = controller;