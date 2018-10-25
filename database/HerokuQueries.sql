use heroku_f1cf93086df67b3;


select * from playlists;
select * from events;
select * from media_contents;

INSERT INTO `heroku_f1cf93086df67b3`.`personal_playlists`
(`user_id`, `name`, `description`)
VALUES
(71, 'mySecondPlaylist', 'Description for my second personal Playlist');

INSERT INTO `heroku_f1cf93086df67b3`.`personal_media_contents`
(`title`,`year`,`personal_playlist_id`,`image_url`)
VALUES
('Avengers: Infinity War','2018',1,'https://en.wikipedia.org/wiki/Avengers:_Infinity_War#/media/File:Avengers_Infinity_War_poster.jpg');

INSERT INTO `heroku_f1cf93086df67b3`.`personal_media_contents`
(`title`,`year`,`personal_playlist_id`,`image_url`)
VALUES
('Thor: Ragnarok','2017',1,'https://en.wikipedia.org/wiki/Thor:_Ragnarok#/media/File:Thor_Ragnarok_poster.jpg');

INSERT INTO `heroku_f1cf93086df67b3`.`notifications`
(`date`,`reciever_id`,`sender_id`,`description`)
VALUES
(NOW(), 71, 1, 'User Luis notify me. (second time)');

INSERT INTO `heroku_f1cf93086df67b3`.`friendships`
(`user_id`,`friend_id`,`confirmed`)
VALUES
(71, 11, true);

select * from roles;
select * from users;
select * from personal_playlists;
select * from personal_media_contents;
select * from notifications;
select * from friendships;
select * from events;
select * from participant_events where event_id = 291;

delete from users where (id) in (43);
delete from personal_media_contents where id=21;
delete from notifications where id=41;
delete from participant_events where (id) in (191,211);
delete from events where (id) in (271);
delete from participant_events where (event_id) in (271);

ALTER TABLE personal_media_contents MODIFY title VARCHAR(100);
ALTER TABLE notifications MODIFY date datetime;
ALTER TABLE events MODIFY location nvarchar(80) null;
ALTER TABLE events MODIFY date datetime null;
ALTER TABLE events ADD created_by bigint(20) not null;

-- IN es para uso propio del storer rpocedure
DROP procedure IF exists insertEvent;
DELIMITER //
create procedure insertEvent (in name_ varchar(50), in user_rol int(11), in user_id_ bigint(20))
begin
		insert into events (name, created_by) values (name_, user_id_);
        set @last_id := (select max(id) from events where created_by=user_id_);
        insert into participant_events (event_id, user_id, rol_id) values (@last_id, user_id_, user_rol);
end//
DELIMITER ;

DROP procedure IF exists deleteEvent;
DELIMITER //
create procedure deleteEvent (in _id bigint(20))
begin
		delete from participant_events where event_id=_id;
        delete from events where (id) in (_id);
end//
DELIMITER ;

call insertEvent('ProcedureEvent', 11, 71);

SELECT r.id, r.product_name, r.description
                FROM responsabilities r 
                WHERE r.participant_event_id = ?