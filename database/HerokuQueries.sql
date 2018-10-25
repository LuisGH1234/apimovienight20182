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

INSERT INTO `heroku_f1cf93086df67b3`.`responsabilities`
(`product_name`,`description`,`participant_event_id`)
VALUES
('Product 2', 'Description Product 2', 261);

INSERT INTO `heroku_f1cf93086df67b3`.`playlists`
(`event_id`,`original`,`description`,`name`)
VALUES
(291,false,'Description Playlist 2','Playlist 2');

INSERT INTO `heroku_f1cf93086df67b3`.`media_contents`
(`playlist_id`,`title`,`year`,`image_url`)
VALUES
(61,'Doctor Strange', '2016','https://upload.wikimedia.org/wikipedia/en/c/c7/Doctor_Strange_poster.jpg');


select * from roles;
select * from users;
select * from personal_playlists;
select * from personal_media_contents;
select * from notifications;
select * from friendships;
select * from events;
select * from participant_events where event_id = 291;
select * from responsabilities;
select * from playlists where event_id=291;
select * from media_contents;

delete from users where (id) in (43);
delete from personal_media_contents where id=21;
delete from notifications where id=41;
delete from participant_events where (id) in (191,211);
delete from events where (id) in (271);
delete from participant_events where (event_id) in (271);

ALTER TABLE media_contents MODIFY title NVARCHAR(100);
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

SELECT * 
FROM snacks s left join snacklists sl on s.snacklist_id=sl.id
WHERE snacklist_id = 1;

select m.id, m.title, m.year, m.image_url
from media_contents m left join playlists p on m.playlist_id=p.id
where p.event_id=291 and m.playlist_id=61;