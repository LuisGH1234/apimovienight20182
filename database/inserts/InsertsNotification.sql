use movienightdb;

INSERT INTO `notifications`
(`date`,
`reciever_id`,
`sender_id`,
`description`)
VALUES
(NOW(), 1, 2, 'description 1 2');

INSERT INTO `notifications`
(`date`,
`reciever_id`,
`sender_id`,
`description`)
VALUES
(NOW(), 1, 2, 'description 1 2');

INSERT INTO `notifications`
(`date`,
`reciever_id`,
`sender_id`,
`description`)
VALUES
(NOW(), 2, 3, 'description 1 2');

INSERT INTO `notifications`
(`date`,
`reciever_id`,
`sender_id`,
`description`)
VALUES
(NOW(), 2, 3, 'description 1 2');

select * from notifications;