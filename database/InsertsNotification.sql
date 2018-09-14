use movienightdb;

-- IDDate: Date
INSERT INTO Notification (Date, IDReciever, IDSender, Description) VALUES ('2008-7-04', 1, 2, 'Notificacion 1');
INSERT INTO Notification (Date, IDReciever, IDSender, Description) VALUES ('2008-7-10', 1, 2, 'Notificacion 2');

select * from Notification;