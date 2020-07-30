-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  mer. 29 juil. 2020 à 12:21
-- Version du serveur :  5.7.26
-- Version de PHP :  7.4.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `Projet5`
--

-- --------------------------------------------------------

--
-- Structure de la table `migration_versions`
--

-- CREATE TABLE `migration_versions` (
--   `version` varchar(14) COLLATE utf8mb4_unicode_ci NOT NULL,
--   `executed_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `migration_versions`
--

-- INSERT INTO `migration_versions` (`version`, `executed_at`) VALUES
-- ('20200416230709', '2020-04-16 23:07:53'),
-- ('20200416232852', '2020-04-16 23:29:11'),
-- ('20200424133755', '2020-04-24 13:51:31'),
-- ('20200424135036', '2020-04-24 13:52:57'),
-- ('20200427014652', '2020-04-27 01:48:50'),
-- ('20200430001421', '2020-04-30 00:14:53'),
-- ('20200430001807', '2020-04-30 00:19:06'),
-- ('20200430002149', '2020-04-30 00:22:03'),
-- ('20200430135510', '2020-04-30 13:55:23'),
-- ('20200430144839', '2020-04-30 14:48:48'),
-- ('20200430195353', '2020-04-30 19:54:30'),
-- ('20200502010422', '2020-05-02 01:04:38'),
-- ('20200502020905', '2020-05-02 02:09:18'),
-- ('20200504014631', '2020-05-04 01:46:49'),
-- ('20200504015345', '2020-05-04 01:53:59'),
-- ('20200507021808', '2020-05-07 02:18:48'),
-- ('20200507140331', '2020-05-07 14:05:03'),
-- ('20200513164417', '2020-05-13 16:44:28'),
-- ('20200517010511', '2020-05-17 01:05:46');

-- --------------------------------------------------------

--
-- Structure de la table `portfolio`
--

CREATE TABLE `portfolio` (
  `id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `link` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL,
  `skills` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `portfolio`
--

INSERT INTO `portfolio` (`id`, `title`, `description`, `image`, `link`, `updated_at`, `skills`) VALUES
(14, 'WebAgency', 'Refonte du site de l\'agence de développement web \'WebAgency\' (fake agence).\r\nProjet réalisé dans le cadre de la formation Openclassroom', 'projet1.png', 'http://alliaumen.com/projet1/', '2020-05-26 01:06:00', 'HTML, CSS'),
(15, 'Office du tourisme - Ville de Strasbourg', 'Réalisation du site d\'une office du tourisme (fake site) avec le CMS Wordpress.', 'projet2.png', 'http://alliaumen.com/projet2/', '2020-05-26 01:05:37', 'Wordpress, CSS'),
(16, 'Bike City Nantes', 'Application de géolocalisation de stations de vélos qui permet de reserver son vélo, de savoir le nombre restant, et le nombre de places de parking disponibles.', 'projet3.png', 'http://alliaumen.com/projet3/', '2020-05-26 01:05:48', 'HTML, CSS, JavaScript'),
(17, 'Blog pour un ecrivain', 'Blog conçue pour un écrivain qui souhaite rédigez ses lignes en ligne à travers une interface d\'administration.', 'projet4.png', 'http://alliaumen.com/projet4/', '2020-05-26 01:06:16', 'HTML, CSS, JavaScript, PHP, SQL');

-- --------------------------------------------------------

--
-- Structure de la table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `skills`
--

INSERT INTO `skills` (`id`, `name`, `logo`, `type`, `updated_at`) VALUES
(29, 'HTML', 'icons8-html-5-48.png', 'Frontend', '2020-05-13 00:04:39'),
(30, 'CSS', 'icons8-css3-48.png', 'Frontend', '2020-05-13 00:04:27'),
(31, 'JavaScript', 'icons8-javascript-48.png', 'Frontend', '2020-05-11 11:26:30'),
(32, 'PHP', 'icons8-logo-php-64.png', 'Backend', '2020-05-11 11:26:50'),
(33, 'MySQL', 'icons8-logo-de-mysql-50.png', 'Backend', '2020-06-05 14:54:03'),
(34, 'Jquery', 'icons8-jquery-50.png', 'Frontend', '2020-06-11 00:38:17'),
(35, 'SQL', 'icons8-sql-64.png', 'Backend', '2020-06-11 00:42:40'),
(36, 'Symfony', 'icons8-symfony-48.png', 'Backend', '2020-06-11 00:43:08'),
(37, 'Bootstrap', 'icons8-bootstrap-48 (1).png', 'Frontend', '2020-06-11 00:53:20');

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `email`, `roles`, `password`) VALUES
(1, 'toto@gmail.com', '[\"ROLE_ADMIN\"]', '$2y$12$hsS4umFp8X9tjUVaj22QteKofwYf3AJfzdHb1wHeBYTBxh18UORB.');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `migration_versions`
--
ALTER TABLE `migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `portfolio`
--
ALTER TABLE `portfolio`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_8D93D649E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `portfolio`
--
ALTER TABLE `portfolio`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT pour la table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
