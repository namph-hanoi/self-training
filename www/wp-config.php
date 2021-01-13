<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'backbeach' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         ']pP]KAy|uOVZ.M-|0x]z^qFb:+m;M1,xF)<:-nPwb}-I5NXDv5Gea%y@FlsCU<UH' );
define( 'SECURE_AUTH_KEY',  'h]O=R;K~:p*1Q8tf#;;3fxWmgq7yxCt1UP9NoQ6],DW__wE{Bdd/>NqCU`ZeW^jj' );
define( 'LOGGED_IN_KEY',    'Ia7Ghn.7,jN_S{e#Nd5T#Eq`Ai6EI$I]z$YPI2Z?McvOCuNja$3OGFxz^e%9/C7>' );
define( 'NONCE_KEY',        'a1p[;j=QJ1R0_Wo)+_t wiXa_y?r4Mk]gzeYHc55{o[I^,g?;8fV4Xx&%ax^^iGF' );
define( 'AUTH_SALT',        'PE#<9RrB&<W]V7(]-<b7,tg&Tj12_!p$64^az,vD|9 *(3;eDJ4]j}$3/xMKf%*.' );
define( 'SECURE_AUTH_SALT', 'jR{T&$H[g|}[Rc3YW/ri.</,~?XKu5}l@B/kubgBfJ)@RMa&X8Q=!?5|1:+E6~pW' );
define( 'LOGGED_IN_SALT',   'c{Iiu{n|iauO3zo8,)Sc*#<>OWph8BbXjLsCUe~kGOE^ms<{(9sssBD8gIFo/??r' );
define( 'NONCE_SALT',       '`O1YGB.R  4.s5WiKyL/h<VV^ZwXs!o<KPcu_?t@Y;Oo)(y|IqphZrg>G6IDCViG' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
