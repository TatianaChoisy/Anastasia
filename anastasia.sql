-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le :  jeu. 25 juil. 2019 à 09:41
-- Version du serveur :  5.7.25
-- Version de PHP :  7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `anastasia`
--

-- --------------------------------------------------------

--
-- Structure de la table `Albums`
--

CREATE TABLE `Albums` (
  `AlbumID` int(11) NOT NULL,
  `NameAlbum` varchar(200) NOT NULL,
  `ArtistID` int(11) DEFAULT NULL,
  `ImageID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Albums`
--

INSERT INTO `Albums` (`AlbumID`, `NameAlbum`, `ArtistID`, `ImageID`) VALUES
(1, 'Currents', 1, 1),
(2, 'Lonerism', 1, 2),
(3, 'Innerspeaker', 1, 3),
(4, 'Tangerine Reef', 2, 4),
(5, 'Young Art Sound II', 3, 5),
(6, 'Embryonic', 4, 6),
(7, 'Unknown Mortal Orchestra II', 5, 7),
(8, 'No No No', 6, 8),
(9, 'LP1', 7, 9),
(10, 'Melody\'s Echo Chamber', 8, 10),
(11, 'Awaken, My Love', 9, 11),
(12, 'When I Get Home', 10, 12),
(13, 'Off of every pearl’s un-insides', 11, 13),
(14, 'Homogenic', 12, 14),
(15, 'Art Angels', 13, 15),
(16, 'Visions', 13, 16);

-- --------------------------------------------------------

--
-- Structure de la table `AlbumsGenres`
--

CREATE TABLE `AlbumsGenres` (
  `AlbumsGenresID` int(11) NOT NULL,
  `AlbumID` int(11) DEFAULT NULL,
  `GenreID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `Artists`
--

CREATE TABLE `Artists` (
  `ArtistID` int(11) NOT NULL,
  `NameArtist` varchar(200) NOT NULL,
  `BioArtist` text NOT NULL,
  `ImageArtist` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Artists`
--

INSERT INTO `Artists` (`ArtistID`, `NameArtist`, `BioArtist`, `ImageArtist`) VALUES
(1, 'Tame Impala', 'Tame Impala (Kevin Parker) has released Patience, the first new music since his GRAMMY nominated, RIAA Gold-Certified 2015 release, Currents.', '/assets/artists/kevinparker.jpg'),
(2, 'Animal Collective', 'Creating a twisted musical language all their own, Animal Collective grew from a closely knit group of childhood friends with exploratory tastes into world-famous pop stars.', '/assets/artists/animalcollective.jpg'),
(3, 'TOKiMONSTA', 'As TOKiMONSTA, California producer Jennifer Lee’s charted a fascinating career over the past seven years, and Lune Rouge is her exhilarating next step.', '/assets/artists/tokimonsta.jpg'),
(4, 'The Flaming Lips', 'Even within the eclectic world of alternative rock, few bands were so brave, so frequently brilliant, and so deliciously weird as the Flaming Lips. ', '/assets/artists/theflaminglips.jpg'),
(5, 'Unknown Mortal Orchestra', 'Unknown Mortal Orchestra began as the modest bedroom recording project of Ruban Nielson in 2010.', '/assets/artists/unknownmortalorchestra.jpg'),
(6, 'Beirut', 'Beirut is an American folk music band formed by Zach Gordon. In 2006, Beirut released two albums on the Ba Da Bing label.', '/assets/artists/beirut.jpg'),
(7, 'FKA Twigs', 'FKA twigs is the project of English singer/songwriter/producer/choreographer Twigs, aka Tahliah Barnett. She was born in Gloucestershire Country and was raised by his mother and father-in-law.', '/assets/artists/fkatwigs.jpg'),
(8, 'Melody\'s Echo Chamber', 'Under the name Melody\'s Echo Chamber, French musician Melody Prochet crafts sweet and swirling psych pop that brings in elements of prog and folk, while casting out bewitching melodies as well', '/assets/artists/melodysechochamber.jpg'),
(9, 'Childish Gambino', 'Childish Gambino is the alter ego of multi-hyphenate American entertainer Donald Glover, who is also known for acting roles on television shows like Community and the Emmy.', '/assets/artists/childishgambino.jpg'),
(10, 'Solange', 'Solange debuted in the early 2000s with pop-oriented contemporary R&B material and has since grown into one of the millennium\'s more adventurous, expectation-defying artists.', '/assets/artists/solange.jpg'),
(11, 'SOPHIE', 'SOPHIE is all of these things, and so much more. SOPHIE is Sophie Long, a Scotland-born, Los Angeles-based pop musician and artist.', '/assets/artists/sophie.jpg'),
(12, 'Björk', 'A visionary artist who effortlessly blends avant-garde and pop elements, Björk soon eclipsed the popularity of her former group the Sugarcubes.', '/assets/artists/bjork.jpg'),
(13, 'Grimes', 'Claire Boucher, better known by her stage name Grimes, is a Canadian artist, musician, singer-songwriter born March 17, 1988 in Vancouver, Canada.', '/assets/artists/grimes.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `Genres`
--

CREATE TABLE `Genres` (
  `GenreID` int(11) NOT NULL,
  `NameGenre` varchar(200) NOT NULL,
  `ImageGenre` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Genres`
--

INSERT INTO `Genres` (`GenreID`, `NameGenre`, `ImageGenre`) VALUES
(1, 'Electronic music', '/assets/genres/electro.svg'),
(2, 'Rock', '/assets/genres/rock.svg'),
(3, 'Jazz', '/assets/genres/jazz.svg'),
(4, 'Pop', '/assets/genres/pop.svg');

-- --------------------------------------------------------

--
-- Structure de la table `Images`
--

CREATE TABLE `Images` (
  `ImageID` int(11) NOT NULL,
  `NameImage` varchar(200) NOT NULL,
  `LinkImage` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Images`
--

INSERT INTO `Images` (`ImageID`, `NameImage`, `LinkImage`) VALUES
(1, 'Currents', '/assets/albums/currents.jpg'),
(2, 'Lonerism', '/assets/albums/lonerism.jpg'),
(3, 'Innerspeaker', '/assets/albums/innerspeaker.png'),
(4, 'Tangerine Reef', '/assets/albums/Tangerine_Reef.jpg'),
(5, 'Young Art Sound II', '/assets/albums/Young_Art_Sound_II.jpg'),
(6, 'Embryonic', '/assets/albums/Embryonic.jpg'),
(7, 'Unknown Mortal Orchestra II', '/assets/albums/Unknown_Mortal_Orchestra.jpg'),
(8, 'No No No', '/assets/albums/NoNoNo.jpg'),
(9, 'LP1', '/assets/albums/LP1.png'),
(10, 'Melody\'s Echo Chamber', '/assets/albums/Melodys_Echo_Chamber.jpg'),
(11, 'Awaken, My Love', '/assets/albums/Awaken_My_Love.jpg'),
(12, 'When I Get Home', '/assets/albums/When_I_Get_Home.jpg'),
(13, 'Off of every pearl’s un-insides', '/assets/albums/OOEPUI.png'),
(14, 'Homogenic', '/assets/albums/Homogenic.png'),
(15, 'Art Angels', '/assets/albums/Art_Angels.jpg'),
(16, 'Visions', '/assets/albums/Visions.png'),
(17, 'Playlist 1', '/assets/playlists/playlist.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `Playlists`
--

CREATE TABLE `Playlists` (
  `PlaylistID` int(11) NOT NULL,
  `NamePlaylist` varchar(200) NOT NULL,
  `ImageID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Playlists`
--

INSERT INTO `Playlists` (`PlaylistID`, `NamePlaylist`, `ImageID`, `UserID`) VALUES
(1, 'thisIsMyPlaylist', 17, 2);

-- --------------------------------------------------------

--
-- Structure de la table `PlaylistsTracks`
--

CREATE TABLE `PlaylistsTracks` (
  `PlaylistsTracksID` int(11) NOT NULL,
  `PlaylistID` int(11) DEFAULT NULL,
  `TrackID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `PlaylistsTracks`
--

INSERT INTO `PlaylistsTracks` (`PlaylistsTracksID`, `PlaylistID`, `TrackID`) VALUES
(1, 1, 20),
(2, 1, 1),
(3, 1, 12);

-- --------------------------------------------------------

--
-- Structure de la table `Roles`
--

CREATE TABLE `Roles` (
  `RoleID` int(11) NOT NULL,
  `RoleName` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Roles`
--

INSERT INTO `Roles` (`RoleID`, `RoleName`) VALUES
(1, 'User'),
(2, 'Subscriber'),
(3, 'Admin');

-- --------------------------------------------------------

--
-- Structure de la table `Tracks`
--

CREATE TABLE `Tracks` (
  `TrackID` int(11) NOT NULL,
  `NameTrack` varchar(200) NOT NULL,
  `LinkTrack` varchar(200) NOT NULL,
  `AlbumID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Tracks`
--

INSERT INTO `Tracks` (`TrackID`, `NameTrack`, `LinkTrack`, `AlbumID`) VALUES
(1, 'Let It Happen', '/assets/music/currents/Let_It_Happen.mp3', 1),
(2, 'Nangs', '/assets/music/currents/Nangs.mp3', 1),
(3, 'The Moment', '/assets/music/currents/The_Moment.mp3', 1),
(4, 'Yes I\'m Changing', '/assets/music/currents/Yes_Im_Changing.mp3', 1),
(5, 'Eventually', '/assets/music/currents/Eventually.mp3', 1),
(6, 'Gossip', '/assets/music/currents/Gossip.mp3', 1),
(7, 'The Less I Know The Better', '/assets/music/currents/The_Less_I_Know_The_Better.mp3', 1),
(8, 'Past Life', '/assets/music/currents/Past_Life.mp3', 1),
(9, 'Disciples', '/assets/music/currents/Disciples.mp3', 1),
(10, '\'Cause I\'m a Man', '/assets/music/currents/Cause_Im_A_Man.mp3', 1),
(11, 'Reality in Motion', '/assets/music/currents/Reality_In_Motion.mp3', 1),
(12, 'Love/Paranoia', '/assets/music/currents/Love_Paranoia.mp3', 1),
(13, 'New Person Same Old Mistakes', '/assets/music/currents/New_Person_Same_Old_Mistakes.mp3', 1),
(14, 'Be Above It', '/assets/music/lonerism/Be_Above_It.mp3', 2),
(15, 'Endors Toi', '/assets/music/lonerism/Endors_Toi.mp3', 2),
(16, 'Apocalypse Dreams', '/assets/music/lonerism/Apocalypse_Dreams.mp3', 2),
(17, 'Mind Mischief', '/assets/music/lonerism/Mind_Mischief.mp3', 2),
(18, 'Music To Walk Home By', '/assets/music/lonerism/Music_To_Walk_Home_By.mp3', 2),
(19, 'Why Won\'t They Talk To Me', '/assets/music/lonerism/Why_Wont_They_Talk_To_Me.mp3', 2),
(20, 'Feels Like We Only Go Backwards', '/assets/music/lonerism/Feels_Like_We_Only_Go_Backwards.mp3', 2),
(21, 'Keep On Lying', '/assets/music/lonerism/Keep_On_Lying.mp3', 2),
(22, 'Elephant', '/assets/music/lonerism/Elephant.mp3', 2),
(23, 'She Just Won\'t Believe Me', '/assets/music/lonerism/She_Just_Wont_Believe_Me.mp3', 2),
(24, 'Nothing That Had Happened So Far Has Been Anything We Could Control', '/assets/music/lonerism/Nothing_That_Has_Happened_So_Far_Has_Been_Anything_We_Could_Control.mp3', 2),
(25, 'Sun\'s Coming Up ', '/assets/music/lonerism/Suns_Coming_Up.mp3', 2),
(26, 'It Is Not Meant To Be', '/assets/music/innerspeaker/Its_Not_Meant_To_Be.mp3', 3),
(27, 'Desire Be Desire Go', '/assets/music/innerspeaker/Desire_Be_Desire_Go.mp3', 3),
(28, 'Alter Ego', '/assets/music/innerspeaker/Alter_Ego.mp3', 3),
(29, 'Lucidity', '/assets/music/innerspeaker/Lucidity.mp3', 3),
(30, 'Why Won\'t You Make Up Your Mind', '/assets/music/innerspeaker/Why_Wont_You_Make_Up_Your_Mind.mp3', 3),
(31, 'Solitude Is Bliss', '/assets/music/innerspeaker/Solitude_Is_Bliss.mp3', 3),
(32, 'Jeremy\'s Storm', '/assets/music/innerspeaker/Jeremys_Storm.mp3', 3),
(33, 'Expectation', '/assets/music/innerspeaker/Expectation.mp3', 3),
(34, 'The Bold Arrow Of Time', '/assets/music/innerspeaker/The_Bold_Arrow_Of_Time.mp3', 3),
(35, 'Runway Houses City Clouds', '/assets/music/innerspeaker/Runway_Houses_City_Clouds.mp3', 3),
(36, 'I Don\'t Really Mind', '/assets/music/innerspeaker/I_Dont_Really_Mind.mp3', 3);

-- --------------------------------------------------------

--
-- Structure de la table `Users`
--

CREATE TABLE `Users` (
  `UserID` int(11) NOT NULL,
  `firstname` varchar(200) NOT NULL,
  `lastname` varchar(200) NOT NULL,
  `pseudo` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `DateCreation` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `DateExpiration` datetime DEFAULT NULL,
  `RoleID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `Users`
--

INSERT INTO `Users` (`UserID`, `firstname`, `lastname`, `pseudo`, `email`, `password`, `DateCreation`, `DateExpiration`, `RoleID`) VALUES
(1, 'Tatiana', 'Choisy', 'Anastasia', 'choisy.tatiana@gmail.com', '$2b$10$Bzrc355/OOl5sEnzXN/KReJu2EzajNzfAjLGVU71/r.DVv5gkb4/u', '2019-07-03 09:14:59', NULL, 3),
(2, 'a', 'a', 'a', 'a', '$2b$10$oNCxsMLUEavE.n1kChVCB.B2bJLaf36xxPy5LXmYQ0YDlBvwQqaFK', '2019-07-18 20:12:10', NULL, NULL),
(3, 'rgrgrg', 'Crgrgrgrgrg', 'rgrgrrgr', 'fqzqfz', '$2b$10$yyIV.aWb8Jlcg6twzPzzEO5Tq8q.jg/HIku/ZN6anXJEhV0bRH6lW', '2019-07-20 17:48:45', NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `Albums`
--
ALTER TABLE `Albums`
  ADD PRIMARY KEY (`AlbumID`),
  ADD KEY `Albums_Artists_FK` (`ArtistID`),
  ADD KEY `Albums_Images_FK` (`ImageID`);

--
-- Index pour la table `AlbumsGenres`
--
ALTER TABLE `AlbumsGenres`
  ADD PRIMARY KEY (`AlbumsGenresID`),
  ADD KEY `AlbumsGenres_Genres_FK` (`GenreID`),
  ADD KEY `AlbumsGenres_Albums_FK` (`AlbumID`);

--
-- Index pour la table `Artists`
--
ALTER TABLE `Artists`
  ADD PRIMARY KEY (`ArtistID`);

--
-- Index pour la table `Genres`
--
ALTER TABLE `Genres`
  ADD PRIMARY KEY (`GenreID`);

--
-- Index pour la table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`ImageID`);

--
-- Index pour la table `Playlists`
--
ALTER TABLE `Playlists`
  ADD PRIMARY KEY (`PlaylistID`),
  ADD KEY `Playlists_Images_FK` (`ImageID`),
  ADD KEY `Playlists_Users_FK` (`UserID`);

--
-- Index pour la table `PlaylistsTracks`
--
ALTER TABLE `PlaylistsTracks`
  ADD PRIMARY KEY (`PlaylistsTracksID`),
  ADD KEY `PlaylistsTracks_Playlists_FK` (`PlaylistID`),
  ADD KEY `PlaylistsTracks_Tracks_FK` (`TrackID`);

--
-- Index pour la table `Roles`
--
ALTER TABLE `Roles`
  ADD PRIMARY KEY (`RoleID`);

--
-- Index pour la table `Tracks`
--
ALTER TABLE `Tracks`
  ADD PRIMARY KEY (`TrackID`),
  ADD KEY `Tracks_Albums_FK` (`AlbumID`);

--
-- Index pour la table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`UserID`),
  ADD KEY `Users_Roles_ID` (`RoleID`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `Albums`
--
ALTER TABLE `Albums`
  MODIFY `AlbumID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT pour la table `AlbumsGenres`
--
ALTER TABLE `AlbumsGenres`
  MODIFY `AlbumsGenresID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `Artists`
--
ALTER TABLE `Artists`
  MODIFY `ArtistID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT pour la table `Genres`
--
ALTER TABLE `Genres`
  MODIFY `GenreID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `Images`
--
ALTER TABLE `Images`
  MODIFY `ImageID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `Playlists`
--
ALTER TABLE `Playlists`
  MODIFY `PlaylistID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `PlaylistsTracks`
--
ALTER TABLE `PlaylistsTracks`
  MODIFY `PlaylistsTracksID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT pour la table `Tracks`
--
ALTER TABLE `Tracks`
  MODIFY `TrackID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT pour la table `Users`
--
ALTER TABLE `Users`
  MODIFY `UserID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `Albums`
--
ALTER TABLE `Albums`
  ADD CONSTRAINT `Albums_Artists_FK` FOREIGN KEY (`ArtistID`) REFERENCES `Artists` (`ArtistID`),
  ADD CONSTRAINT `Albums_Images_FK` FOREIGN KEY (`ImageID`) REFERENCES `Images` (`ImageID`);

--
-- Contraintes pour la table `AlbumsGenres`
--
ALTER TABLE `AlbumsGenres`
  ADD CONSTRAINT `AlbumsGenres_Albums_FK` FOREIGN KEY (`AlbumID`) REFERENCES `Albums` (`AlbumID`),
  ADD CONSTRAINT `AlbumsGenres_Genres_FK` FOREIGN KEY (`GenreID`) REFERENCES `Genres` (`GenreID`);

--
-- Contraintes pour la table `Playlists`
--
ALTER TABLE `Playlists`
  ADD CONSTRAINT `Playlists_Images_FK` FOREIGN KEY (`ImageID`) REFERENCES `Images` (`ImageID`),
  ADD CONSTRAINT `Playlists_Users_FK` FOREIGN KEY (`UserID`) REFERENCES `Users` (`UserID`);

--
-- Contraintes pour la table `PlaylistsTracks`
--
ALTER TABLE `PlaylistsTracks`
  ADD CONSTRAINT `PlaylistsTracks_Playlists_FK` FOREIGN KEY (`PlaylistID`) REFERENCES `Playlists` (`PlaylistID`),
  ADD CONSTRAINT `PlaylistsTracks_Tracks_FK` FOREIGN KEY (`TrackID`) REFERENCES `Tracks` (`TrackID`);

--
-- Contraintes pour la table `Tracks`
--
ALTER TABLE `Tracks`
  ADD CONSTRAINT `Tracks_Albums_FK` FOREIGN KEY (`AlbumID`) REFERENCES `Albums` (`AlbumID`);

--
-- Contraintes pour la table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `Users_Roles_ID` FOREIGN KEY (`RoleID`) REFERENCES `Roles` (`RoleID`);
